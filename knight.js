class Knight {
    constructor(game) {

        Object.assign(this, {game});

        this.position = {x: 10, y:10};
        this.game.Knight = this;
        this.velocity = {x: 0, y: 0};
        this.facing = 0; // right = 0, left = 1
        this.state = 0; // idle = 0, running = 1
        this.attack = 0; // no attack = 0, attack1 = 1, attack2 = 2
        
        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Run.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Idle.png"));

        this.animation.push(new Animator(this.spritesheet[0], 43, 41, 30, 40, 10, 0.1, 90, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 37, 37, 85, 45, 4, 0.1, 35, false, true));
        this.animation.push(new Animator(this.spritesheet[2], 30, 40, 88, 40, 6, 0.1, 32, false, true));
        this.animation.push(new Animator(this.spritesheet[3], 45, 43, 20, 36, 10, 0.1, 100, false, true));
    };

    update() {
        if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
            console.log("A is pressed");
            this.facing = 1;
            this.position.x -= 10;
            this.velocity.x -= 10;
        } else if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
            console.log("D is pressed");
            this.facing = 0;
            this.position.x += 10;
            this.velocity.x += 10;
        } else if (this.game.keys["w"] || this.game.keys["ArrowUp"]) {
            console.log("W is pressed");
            this.position.y -= 10;
            this.velocity.y -= 10;
        } else if (this.game.keys["s"] || this.game.keys["ArrowDown"]) {
            console.log("S is pressed");
            this.position.y += 10;
            this.velocity.y += 10;
        }

        if (this.game.keys["a"] && this.game.keys["s"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowDown"]) {
            console.log("A and S is pressed at same time");
            this.position.y += 10;
            this.position.x -= 10;
            this.velocity.y += 10;
            this.velocity.x -= 10;
        } else if (this.game.keys["a"] && this.game.keys["w"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowUp"]) {
            console.log("A and W is pressed at same time");
            this.position.y -= 10;
            this.position.x -= 10;
            this.velocity.y -= 10;
            this.velocity.x -= 10;
        } else if (this.game.keys["d"] && this.game.keys["s"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowDown"]) {
            console.log("D and S is pressed at same time");
            this.position.y += 10;
            this.position.x += 10;
            this.velocity.y += 10;
            this.velocity.x += 10;
        } else if (this.game.keys["d"] && this.game.keys["w"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowUp"]) {
            console.log("D and W is pressed at same time");
            this.position.y -= 10;
            this.position.x += 10;
            this.velocity.y -= 10;
            this.velocity.x += 10;
        }

        if (this.game.keys["f"]) {
            console.log("Y Velocity is: " + this.velocity.y + "     X Velocity is: " + this.velocity.x);
        }
    };

    draw(ctx) {
        let canvas = document.getElementById("gameWorld");
        canvas.style.backgroundColor = "black";
        
        if (this.facing == 1) {
            ctx.save();
            ctx.scale(-1, 1);
            this.animation[0].drawFrame(this.game.clockTick, ctx, -this.position.x - 140, this.position.y, 5);
            this.animation[1].drawFrame(this.game.clockTick, ctx, -this.position.x - 445, this.position.y + 200, 5);
            this.animation[2].drawFrame(this.game.clockTick, ctx, -(this.position.x + 200) - 440, this.position.y, 5);
            this.animation[3].drawFrame(this.game.clockTick, ctx, -(this.position.x + 500) - 140, this.position.y + 240, 5);
            ctx.restore();
        } else if (this.facing == 0) {
            this.animation[0].drawFrame(this.game.clockTick, ctx, this.position.x, this.position.y, 5);
            this.animation[1].drawFrame(this.game.clockTick, ctx, this.position.x, this.position.y + 200, 5);
            this.animation[2].drawFrame(this.game.clockTick, ctx, this.position.x + 200, this.position.y, 5);
            this.animation[3].drawFrame(this.game.clockTick, ctx, this.position.x + 500, this.position.y + 200, 5);
    
        }
    };
}