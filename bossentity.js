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
    constructor(game, x, y, facing, state) {
        Object.assign(this, {game, x, y, facing, state});
        // 0 = forward, 1 = right, 2 = left 
        this.speed = 1500;
        this.start = x;

        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Lightning0.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Lightning1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Lightning2.png"));
    
        
    };

    updateBB() {

    };

    update() {
        if (this.state == 0) {
            this.updateBB();
            this.x += (this.speed * this.facing) * this.game.clockTick;

            if (this.facing == 1) {
                if (this.x >= this.start * 2) this.state = 1;
            } else {
                if (this.x <= this.start * -1) this.state = 1;
            }

            this.state = 0;
        }
    };

    draw(ctx) {
        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }

        if (this.facing == 1) {
            ctx.drawImage(this.spritesheet[this.state], this.x + 100 - this.game.camera.x, this.y - 30 - this.game.camera.y, 200, 200);
        } else if (this.facing == -1) {
            ctx.drawImage(this.spritesheet[this.state], (this.x * this.facing) - (this.game.camera.x * this.facing), this.y - this.game.camera.y, 200, 200);
        }
        
        ctx.restore();
    };
}