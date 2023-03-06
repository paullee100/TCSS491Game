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
        this.speed = 120;

        this.start = x;
        this.cache = [];

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Lightning.png");
        this.animation = [];
        this.state = 0;

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet, 5, 12, 44, 44, 1, 0.2, 0, false, true)); // straight
        this.animation.push(new Animator(this.spritesheet, 56, 12, 44, 44, 1, 0.2, 0, false, true)); // right1
        this.animation.push(new Animator(this.spritesheet, 113, 12, 44, 44, 1, 0.2, 0, false, true)); // right2
        this.animation.push(new Animator(this.spritesheet, 164, 12, 44, 44, 1, 0.2, 0, false, true)); // right3

        this.elapsedTime = 0;
    };

    updateBB() {

    };

    update() {
        this.updateBB();

        if (this.facing == 1) {
            if (this.x > this.dist * 0.85 && this.x <= this.dist * 0.90) this.state = 1;
            else if (this.x > this.dist * 0.90 && this.x <= this.dist * 0.95) this.state = 2;
            else if (this.x > this.dist * 0.95 && this.x <= this.dist * 1) this.state = 3;
        } else {
            if (this.x > this.dist * 0.75 && this.x <= this.dist * 0.75) this.state = 1;
            else if (this.x > this.dist * 0.85 && this.x <= this.dist * 0.85) this.state = 2;
            else if (this.x > this.dist * 1 && this.x <= this.dist * 1) this.state = 3;
        }

        if (this.state == 0) {
            this.x += (this.speed * this.facing) * this.game.clockTick;

        } else if (this.state == 1) {
            this.x += (this.speed * 0.50 * this.facing) * this.game.clockTick;
            this.y += (this.speed * 1.15) * this.game.clockTick;
        } else if (this.state == 2) {
            this.x += (this.speed * 0.25 * this.facing) * this.game.clockTick;
            this.y += (this.speed * 1.35) * this.game.clockTick;
        } else if (this.state == 3) {
            this.y += (this.speed * 1.5) * this.game.clockTick;
        }

        // this.game.entities.forEach((entity) => {
        //     if (entity.BB && this.BB.collide(entity.BB)) {
        //         if (entity instanceof Tile) {

        //         }
        //     }
        // });
    };

    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x - this.game.camera.x, this.y - this.game.camera.y, 100, 100);
        }

        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }

        if (this.facing == 1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x + 100 - this.game.camera.x, this.y - 30 - this.game.camera.y, 3);
        } else if (this.facing == -1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - (this.game.camera.x * this.facing), this.y - this.game.camera.y, 3);
        }
        
        ctx.restore();
    };
}