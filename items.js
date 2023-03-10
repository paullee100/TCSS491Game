class Potion {
    constructor(game, x, y) {
        console.log('potion being made')
        Object.assign(this, { game, x, y });
        this.velocity = 300;
        this.spritesheet = [];
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/medium_potion.png"));
        this.updateBB();
    }
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 20, this.y + 30, 35, 70)
    }
    update() {
        this.updateBB();
        this.y += this.velocity * this.game.clockTick;
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Tile) {
                    if ((that.lastBB.bottom) <= entity.BB.top) { //landing
                        console.log('potion landed')
                        that.velocity = 0;
                        that.y = entity.y - 100;
                    }
				};
			};
		});
    };
    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x + 20 - this.game.camera.x, this.y + 30 - this.game.camera.y, 35, 70);
        }
        ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y)
    };
};
class Arrow {
    constructor(game, x, y, facing) {
        Object.assign(this, { game, x, y, facing });
        this.speed = 300;
        this.spritesheet = [];
        this.damage = 7;
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Elf/Elf_Arrow.png"));
        this.updateBB();
    }
    updateBB() {
        this.lastBB = this.BB;
        if (this.facing == 1) {
            this.BB = new BoundingBox(this.x + 100, this.y + 50, 90, 20);
        } else {
            this.BB = new BoundingBox(this.x - 90, this.y + 30, 100, 20);
        }
    }
    update() {
        this.x += this.speed * this.game.clockTick * this.facing;
        this.updateBB();
        var that = this;
        
        this.game.entities.forEach(entity => {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Knight) {
                    if (entity.state != 4) {
                        if (entity.state < 9 && entity.facing) entity.health -= this.damage;
                        that.removeFromWorld = true;
                    }
                }
                if (entity instanceof Tile) {
                    that.removeFromWorld = true;
                }
            }
        });
        
    };
    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            if (this.facing == 1) {
                ctx.strokeRect(this.x + 100 - this.game.camera.x, this.y + 50 - this.game.camera.y, 90, 20);
            } else {
                ctx.strokeRect(this.x - 90 - this.game.camera.x, this.y + 30 - this.game.camera.y, 100, 20);
            }
        }
        
        if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
        
        if (this.facing == 1) {
            ctx.drawImage(this.spritesheet[0], this.x + 100 - this.game.camera.x, this.y + 20 - this.game.camera.y, 100, 100);
        } else {
            ctx.drawImage(this.spritesheet[0], (this.x - this.game.camera.x) * this.facing, this.y - this.game.camera.y, 100, 100);
        }
        ctx.restore();
    };
}
class ThrowingKnife {
    constructor(game, x, y, facing, state) {
        console.log('throwing knife being made')
        Object.assign(this, { game, x, y, facing, state}); // state: 0 = pickup, 1 = thrown
        this.start = x;
        this.damage = 5;
        this.dead = false;
        this.speed = 1500;
        this.spritesheet = [];
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/throwing_knife.png"));
        this.updateBB();
        this.velocity = 300;

    }
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 40, 40, "player", this);
    };

    update() {
        console.log(this.state);
        if (this.state == 0) {
            
            this.y += this.velocity * this.game.clockTick;
            var that = this;
            this.game.entities.forEach(entity => {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Tile) {
                        if ((that.lastBB.bottom) <= entity.BB.top) { //landing
                            console.log('knife landed')
                            that.velocity = 0;
                            that.y = entity.y - 50;
                        }
                    };
                };
            });
        }
        if (this.state == 1) {
            this.updateBB();
            this.x += (this.speed * this.facing) * this.game.clockTick;

            if (this.facing == 1) {
                if (this.x >= this.start + this.speed) this.removeFromWorld = true;
            } else {
                if (this.x <= this.start - this.speed) this.removeFromWorld = true;
            }
            var that = this;
            this.game.entities.forEach(entity => {
                if (entity.BB && that.BB.collide(entity.BB)) {
                    if (entity instanceof Tile) {
                        that.removeFromWorld = true;
                    };
                };
            });
        };
        this.game.entities.forEach(entity => {
            if (entity.BB && this.BB.collide(entity.BB) && entity.BB.type == "enemy" && this.state == 1) {
                entity.health -= (this.damage);
                this.removeFromWorld = true;
            }
        });
        this.updateBB();
    };

    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x - this.game.camera.x, this.y - this.game.camera.y, 40, 40);
        }
        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }
        if (this.facing == 1) {
            if (this.state == 0) ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y, 60, 60);
            if (this.state == 1) ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y, 40, 40);
        } else {
            if (this.state == 0) ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y, 60, 60);
            if (this.state == 1) ctx.drawImage(this.spritesheet[0], (this.x * this.facing) - (this.game.camera.x * this.facing), this.y - this.game.camera.y, 40, 40);

        }
        ctx.restore();
    };
};

class Bomb {
    constructor(game, x, y, state) {
        console.log('bomb being made')
        Object.assign(this, { game, x, y, state}); // 0 = pickup, 1 = detonating, 2 = explosion
        this.velocity = 300;
        this.spritesheet = [];
        this.animation = [];
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/medium_bomb.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/medium_bomb_detonation.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/medium_bomb_explosion.png"));
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[1], 11, 13, 52, 60, 3, 0.75, 20, false, false));
        this.animation.push(new Animator(this.spritesheet[2], 0, 0, 88, 95, 12, 0.1, 8, false, false));
        this.updateBB();
    }
    updateBB() {
        this.lastBB = this.BB;
        if (this.state !== 2) this.BB = new BoundingBox(this.x+ 10, this.y + 20, 50, 50);
        else this.BB = new BoundingBox(this.x - 15, this.y - 30, 100, 100);

    }
    update() {
        this.updateBB();
        this.y += this.velocity * this.game.clockTick;
        var that = this;
        this.game.entities.forEach(entity => {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Tile) {
                    if ((that.lastBB.bottom) <= entity.BB.top) { //landing
                        console.log('bomb landed')
                        that.velocity = -0;
                        that.y = entity.y - 70;
                    }
                };
            };
        });
        if (this.animation[0].isDone()) {
            var tempState = this.state;
            this.state = 2;
            this.animation[tempState - 1].elapsedTime = 0;
            ASSET_MANAGER.playAsset("./sounds/bomb_explosion.mp3");
        };
        if (this.animation[1].isDone()) {
            this.removeFromWorld = true;
        };
        this.game.entities.forEach(entity => {
            if (entity.BB && this.BB.collide(entity.BB) && entity.BB.type == "enemy" && this.state == 2) {
                entity.health -= (80) * this.game.clockTick;
            }
        });
    };
    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            if (this.state !== 2) ctx.strokeRect(this.x+ 10 - this.game.camera.x, this.y + 20- this.game.camera.y, 50, 50);
            else ctx.strokeRect(this.x - 15 - this.game.camera.x, this.y -30- this.game.camera.y, 100, 100);
        }
        if (this.state == 0) ctx.drawImage(this.spritesheet[this.state], this.x - this.game.camera.x, this.y - this.game.camera.y);
        else if (this.state == 1) this.animation[this.state - 1].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1);
        else this.animation[this.state - 1].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x - 75, this.y - this.game.camera.y - 75, 2);
    };
}
