class Knight {
    constructor(game) {

        Object.assign(this, {game});

        this.position = {x: 10, y:10};
        this.game.Knight = this;
        this.velocity = {x: 0, y: 0};
        this.facing = -1; // right = 1, left = -1
        this.state = 3; // running = 0, attack = 1, idle = 3
        
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
        if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) {
            console.log("A is pressed");
            this.facing = -1;
            this.state = 0;
            this.position.x -= 10;
            this.velocity.x -= 10;
        } else if (this.game.keys["d"] || this.game.keys["ArrowRight"]) {
            console.log("D is pressed");
            this.facing = 1;
            this.state = 0;
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

            // attack
        } else if (this.game.keys["k"] || this.game.click) {
            this.state = 1;
            this.updateBB();

        } else {
            this.state = 3;
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        if (this.game.keys["a"] && this.game.keys["s"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowDown"]) {
            console.log("A and S is pressed at same time");
            this.position.y += 10;
            this.position.x -= 10;
            this.velocity.y += 10;
            this.velocity.x -= 10;
            this.state = 0;
        } else if (this.game.keys["a"] && this.game.keys["w"] || this.game.keys["ArrowLeft"] && this.game.keys["ArrowUp"]) {
            console.log("A and W is pressed at same time");
            this.position.y -= 10;
            this.position.x -= 10;
            this.velocity.y -= 10;
            this.velocity.x -= 10;
            this.state = 0;
        } else if (this.game.keys["d"] && this.game.keys["s"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowDown"]) {
            console.log("D and S is pressed at same time");
            this.position.y += 10;
            this.position.x += 10;
            this.velocity.y += 10;
            this.velocity.x += 10;
            this.state = 0;
        } else if (this.game.keys["d"] && this.game.keys["w"] || this.game.keys["ArrowRight"] && this.game.keys["ArrowUp"]) {
            console.log("D and W is pressed at same time");
            this.position.y -= 10;
            this.position.x += 10;
            this.velocity.y -= 10;
            this.velocity.x += 10;
            this.state = 0;
        } 

        // collision
        this.game.entities.forEach(entity => {
            if (entity.BB && this.BB.collide(entity.BB)) {
                if (entity instanceof Skeleton &&
                    this.state == 1) {

                    entity.dead = true;
                }
            }
        });
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

        this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x * this.facing), this.position.y, 5);
        ctx.restore();
    };
}