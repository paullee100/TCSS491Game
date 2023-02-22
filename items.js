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

class ThrowingKnife {
    constructor(game, x, y, facing) {

        Object.assign(this, { game, x, y, facing});
        this.start = x;
        this.damage = 5;
        this.dead = false;
        this.speed = 1000;
        this.BB = new BoundingBox(this.x, this.y, 10, 10, "player", this);
        this.spritesheet = [];
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/throwing_knife.png"));

    }
    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 10, 10, "player", this);
    };

    update() {
        this.x += this.speed * this.facing;
        if (this.x = this.x + (this.speed*3)) this.removeFromWorld = true;
    };

    draw(ctx) {
        if (this.removeFromWorld !== true) ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y, 1, 1);
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
        this.animation.push(new Animator(this.spritesheet[2], 11, 13, 100, 100, 12, 0.1, 20, false, false));
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
                entity.health -= (0.5);
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
        else this.animation[this.state - 1].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 2);
    };
}
