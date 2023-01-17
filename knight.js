class Knight {
    constructor(game) {

        Object.assign(this, {game});

        this.position = {x: 550, y:540};
        this.game.Knight = this;
        this.velocity = {x: 0, y: 0};
        this.facing = 1; // right = 1, left = -1
        this.state = 3; // running = 0, attack = 1, idle = 3, rolling = 4, jump = 5
        
        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Run.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Roll.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Roll.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 43, 41, 30, 40, 10, 0.060, 90, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 37, 37, 85, 45, 4, 0.1, 35, false, true));
        this.animation.push(new Animator(this.spritesheet[2], 30, 40, 88, 40, 6, 0.1, 32, false, true));
        this.animation.push(new Animator(this.spritesheet[3], 45, 43, 20, 36, 10, 0.1, 100, false, true));
        this.animation.push(new Animator(this.spritesheet[4], 42, 41, 42, 37, 12, 0.075, 78, false, true));
        this.animation.push(new Animator(this.spritesheet[5], 43, 41, 30, 40, 12, 0.075, 90, false, true));
    
        this.readyToAttack = 0;
        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        if (this.state == 1) {
            if (this.facing == 1) {
                this.BB = new BoundingBox(this.position.x + 200, this.position.y + 10, 192, 205);
            } else if (this.facing == -1) {
                this.BB = new BoundingBox(this.position.x - 300, this.position.y + 10, 192, 205);
            }
        } else if (this.state == 3 || this.state == 0) {
            this.BB = new BoundingBox(this.position.x, this.position.y, 100, 181);
        }
    };

    update() {

        const RUN = 750;
        const JUMP = -1000;
        const FALL = 1750;

        const TICK = this.game.clockTick;

        if (this.state != 5 && this.state != 4 && this.state != 1 && this.state != 2) {
            if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
                console.log("A is pressed");
                this.facing = -1;
                this.state = 0;
                //this.position.x -= 10;
                this.velocity.x = -RUN;
            } else if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
                console.log("D is pressed");
                this.facing = 1;
                this.state = 0;
                //this.position.x += 10;
                this.velocity.x = RUN;
            } /*else if (this.game.keys["w"] || this.game.keys["ArrowUp"]) {
                console.log("W is pressed");
                //this.position.y -= 10;
                //this.velocity.y = -RUN;
            } else if (this.game.keys["s"] || this.game.keys["ArrowDown"]) {
                console.log("S is pressed");
                //this.position.y += 10;
                //this.velocity.y = RUN;

                // attack
            } */ else if (this.game.keys["k"] || this.game.click) {
                this.state = 1;
                this.updateBB();

            } else if (this.game.keys["Shift"] || (this.game.keys["Shift"] && (this.game.keys["a"] || this.game.keys["d"]))) {
                this.state = 4;
                this.velocity.x = 500 * (this.facing);
                this.spritesheet[this.state].ad
            } else {
                this.state = 3;
                this.velocity.x = 0;
                this.velocity.y = 0;
            }

            /* if (this.game.keys["a"] && this.game.keys["s"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowDown"]) {
                console.log("A and S is pressed at same time");
                //this.position.y += 10;
                //this.position.x -= 10;
                this.velocity.y += 10;
                this.velocity.x -= 10;
                this.state = 0;
            } else if (this.game.keys["a"] && this.game.keys["w"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowUp"]) {
                console.log("A and W is pressed at same time");
                //this.position.y -= 10;
                //this.position.x -= 10;
                this.velocity.y -= 10;
                this.velocity.x -= 10;
                this.state = 0;
            } else if (this.game.keys["d"] && this.game.keys["s"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowDown"]) {
                console.log("D and S is pressed at same time");
                //this.position.y += 10;
                //this.position.x += 10;
                this.velocity.y += 10;
                this.velocity.x += 10;
                this.state = 0;
            } else if (this.game.keys["d"] && this.game.keys["w"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowUp"]) {
                console.log("D and W is pressed at same time");
                //this.position.y -= 10;
                //this.position.x += 10;
                this.velocity.y -= 10;
                this.velocity.x += 10;
                this.state = 0;
            }  */

            if (this.game.keys["w"]) { // jump
                this.velocity.y = JUMP;
                this.state = 5;
            }
    }
    else {
            //mid-air physics
            //vertical physics
            if (this.velocity.y < 0 && this.game.keys["w"]) { // holding A while jumping jumps higher
                //this.velocity.y -= 25;
            };

            // horizontal physics
            if (this.game.keys["d"] || this.game.keys["ArrowRight"] && !(this.game.keys["a"] || this.game.keys["ArrowLeft"])) {
                this.velocity.x = RUN/2;
            } else if ((this.game.keys["a"] || this.game.keys["ArrowLeft"]) && !(this.game.keys["d"] || this.game.keys["ArrowRight"])) {
                this.velocity.x = -RUN/2;
            } else {
                    // does nothing
            };

        };

        if (this.position.y < 540) {
            this.velocity.y += FALL * TICK;
        }

        this.position.x += this.velocity.x * TICK;
        this.position.y += this.velocity.y * TICK;


        // collision
        this.game.entities.forEach(entity => {
            if (entity.BB && this.BB.collide(entity.BB)) {
                if (entity instanceof Skeleton &&
                    this.state == 1) {

                    entity.dead = true;
                };
            };
        });
        if (this.position.y > 700) { //Just for testing. Replace with floor collision to reset sprite later
            this.position.y = 540;
            this.state = 3;
        };
    };

    draw(ctx) {
        // let canvas = document.getElementById("gameWorld");
        // canvas.style.backgroundColor = "black
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.position.x, this.position.y, 100, 181);

        ctx.strokeStyle = "purple";
        ctx.strokeRect(this.position.x + 200, this.position.y + 10, 192, 205);

        ctx.strokeStyle = "purple";
        ctx.strokeRect(this.position.x - 300, this.position.y + 10, 192, 205);
        
        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }

        var stateMod = 0;
        if(this.state == 0) stateMod = 20;
        else if (this.state == 1) stateMod = 100;
        else if (this.state == 4) stateMod = 50;

        if(this.facing == 1) this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x - stateMod), this.position.y, 5);
        else this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x * this.facing) - 100 + (stateMod * this.facing), this.position.y, 5);
        ctx.restore();
    };
}