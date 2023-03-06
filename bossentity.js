class LichSmoke {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.state = 0; // 0 = pellet, 1 = smoke explosion
        this.detonateTimer = 0;
        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Pellet.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Explosion.png"));

        this.animation.push(new Animator(this.spritesheet[0], 42, 26, 15, 136, 1, 0.5, 0, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 0, 8, 130, 136, 10, 0.1, 100, false, true));
    };

    update() {
        this.detonateTimer += this.game.clockTick;
        if (this.detonateTimer >= 1.5 && this.detonateTimer < 2) {
            this.state = 1;
        }

        if (this.detonateTimer >= 3) {
            this.detonateTimer = 0;
            this.state = 0;
            this.removeFromWorld = true;
        }
    };

    draw(ctx) {
        if (this.state == 0) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
        } else if (this.state == 1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x - 175 - this.game.camera.x, this.y - 175 - this.game.camera.y, 3);
        }
    };
}

class TitanLightning {
    constructor(game, x, y, target, facing) {
        Object.assign(this, {game, x, y, target, facing});
        
        this.dist = this.target.position.x;
        this.playerY = this.target.position.y;
        this.speed = 500;

        this.start = x;
        this.SummonLightning = false;
        this.waitToThrow = false;

        this.LightningX = 0;
        this.LightningY = 0;
        this.LightningCounter = 1;
        this.summonLightningTimer = 0;

        this.spritesheet = [];
        this.animation = [];
        this.state = 0;

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Lightning.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_BigLightning.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 5, 12, 44, 44, 1, 0.2, 0, false, true)); // straight
        this.animation.push(new Animator(this.spritesheet[0], 56, 12, 44, 44, 1, 0.2, 0, false, true)); // right1
        this.animation.push(new Animator(this.spritesheet[0], 113, 12, 44, 44, 1, 0.2, 0, false, true)); // right2
        this.animation.push(new Animator(this.spritesheet[0], 164, 12, 44, 44, 1, 0.2, 0, false, true)); // right3
    };

    updateBB() {
        this.lastBB = this.BB;

        if (this.SummonLightning) {
            this.BB = new BoundingBox(this.LightningX + 40, this.LightningY - 1320, 160, 117.5 * this.LightningCounter);
        } else {
            if (this.state == 1) {
                this.BB = new BoundingBox(this.x + 100, this.y + 15, 180, 95);
            } else if (this.state == 2) {
                this.BB = new BoundingBox(this.x + 100, this.y - 10, 100, 155);
            } else if (this.state == 3) {
                this.BB = new BoundingBox(this.x + 103, this.y - 26, 25, 195);
            } else {
                this.BB = new BoundingBox(this.x + 100, this.y + 50, 200, 35);
            }
        }
    };

    update() {
        this.updateBB();

        if (this.facing == 1) {
            if (this.x > this.dist * 0.80 && this.x <= this.dist * 0.86) this.state = 2;
            // else if (this.y > this.playerY * 0.8 && this.y <= this.playerY * 0.85) this.state = 2;
            else if (this.y > this.playerY * 0.9) this.state = 3;
        } else {
            if (this.x > this.dist * 0.85 && this.x <= this.dist * 0.9) this.state = 1;
            else if (this.x > this.dist * 0.85 && this.x <= this.dist * 0.85) this.state = 2;
            else if (this.x > this.dist * 1 && this.x <= this.dist * 1) this.state = 3;
        }

        if (this.state == 0) {
            this.x += (this.speed * this.facing) * this.game.clockTick;

        } else if (this.state == 1) {
            this.x += (this.speed * this.facing) * this.game.clockTick;
            this.y += (this.speed * 1) * this.game.clockTick;
        } else if (this.state == 2) {
            this.x += (this.speed * this.facing) * this.game.clockTick;
            this.y += (this.speed * 1.15) * this.game.clockTick;
        } else if (this.state == 3) {
            this.y += (this.speed * 1.5) * this.game.clockTick;
        }

        this.game.entities.forEach((entity) => {
            if (entity.BB && this.BB.collide(entity.BB)) {
                if (entity instanceof Knight) {
                    console.log("test");
                }

                if (entity instanceof Tile) {
                    if ((this.lastBB.bottom) <= entity.BB.top) {
                        this.LightningX = this.x;
                        this.LightningY = this.y;
                        this.SummonLightning = true;
                        // this.removeFromWorld = true;

                        console.log(this.LightningX);
                        console.log(this.LightningY);
                    }
                }
            }
        });
    };

    draw(ctx) {
        if (true) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.LightningX + 40 - this.game.camera.x, this.LightningY - this.game.camera.y - 1020, 160, 1175);

            if (this.SummonLightning) {
                if (this.state == 1) {
                    ctx.strokeRect(this.x + 100 - this.game.camera.x, this.y + 15 - this.game.camera.y, 180, 95);
                } else if (this.state == 2) {
                    ctx.strokeRect(this.x + 100 - this.game.camera.x, this.y - 10 - this.game.camera.y, 100, 155);
                } else if (this.state == 3) {
                    ctx.strokeRect(this.x + 103 - this.game.camera.x, this.y - 26 - this.game.camera.y, 25, 195);
                } else {
                    ctx.strokeRect(this.x + 100 - this.game.camera.x, this.y + 50 - this.game.camera.y, 200, 35);
                }
            }
        }

        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }


        let stateModX = 0;
        let stateModY = 0;

        if (this.SummonLightning) {
            this.summonLightningTimer += this.game.clockTick;
            // 1020 ---- 1500
            if (this.summonLightningTimer >= 0.0 && this.summonLightningTimer < 0.05) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 2;

            } else if (this.summonLightningTimer >= 0.05 && this.summonLightningTimer < 0.1) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 3;

            } else if (this.summonLightningTimer >= 0.1 && this.summonLightningTimer < 0.15) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 4;

            } else if (this.summonLightningTimer >= 0.15 && this.summonLightningTimer < 0.2) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 5;

            } else if (this.summonLightningTimer >= 0.2 && this.summonLightningTimer < 0.25) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 6;

            } else if (this.summonLightningTimer >= 0.25 && this.summonLightningTimer < 0.3) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 7;

            } else if (this.summonLightningTimer >= 0.3 && this.summonLightningTimer < 0.35) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 8;

            } else if (this.summonLightningTimer >= 0.35 && this.summonLightningTimer < 0.4) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 9;

            } else if (this.summonLightningTimer >= 0.4 && this.summonLightningTimer < 0.45) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();
                this.LightningCounter = 10;

            } else if (this.summonLightningTimer >= 0.45 && this.summonLightningTimer < 0.5) {
                ctx.drawImage(this.spritesheet[1], this.LightningX - 25 - this.game.camera.x, this.LightningY - 1320 - this.game.camera.y, 300, 150 * this.LightningCounter);
                this.updateBB();

            } else {
                this.LightningCounter = 1;
                this.SummonLightning = false;
                this.summonLightningTimer = 0;
                this.removeFromWorld = true;
            }

        } else {
            if (this.facing == 1) {
                this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) + 100 - this.game.camera.x, this.y - stateModY - 30 - this.game.camera.y, 4.5);
            } else if (this.facing == -1) {
                this.animation[this.state].drawFrame(this.game.clockTick, ctx, ((this.x * this.facing) + (stateModX * this.facing)) - (this.game.camera.x * this.facing), this.y - stateModY - this.game.camera.y, 4.5);
            }
        }
        
        ctx.restore();
    };
}