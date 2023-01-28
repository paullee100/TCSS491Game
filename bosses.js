class Lich {
    constructor (game, x, y) {
        Object.assign(this, {game, x, y});

        //this.position = {x: 300, y: 390};
        this.velocity = {x: 250, y: 0};

        this.game.Lich = this;
        this.state = 2; // idle = 0, walking = 1, attack1 = 2, attack2 = 3, attack3 = 4, death = 5
        this.facing = 1; // right = 1, left = -1
        this.dead = false;
        this.deadCounter = 0;
        this.health = 100;
        this.damage = 10;

        this.maxSummon = 0;
        this.summonCounter = 0;

        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Walking.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Attack1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Attack2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Attack3.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich_Death.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 0, 5, 52, 83, 4, 0.25, 40, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 0, 5, 54, 83, 8, 0.15, 43, false, true));
        this.animation.push(new Animator(this.spritesheet[2], 19, 15, 62, 90, 5, 0.55, 30, false, true));
        this.animation.push(new Animator(this.spritesheet[3], 13, 8, 69, 90, 5, 0.1, 23, false, true));
        this.animation.push(new Animator(this.spritesheet[4], ));
        this.animation.push(new Animator(this.spritesheet[4], 0, 1, 70, 90, 10, 0.1, 21, false, true));

        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        //this.BB = new BoundingBox(this.position.x, this.position.y, 200, 330);
        this.BB = new BoundingBox(this.x, this.y, 200, 330);
    };

    update() {
        if (this.health <= 0) {
            this.state = 5;
            this.dead = true;
            this.deadCounter += this.game.clockTick;
            if (this.deadCounter >= 1) this.removeFromWorld = true;
        } else if (this.state == 1) {
            if (this.position.x > 840) {
                this.facing = -1;
            } else if (this.position.x < 0) {
                this.facing = 1;
            }

            if (this.facing == 1) {
                //this.position.x += this.game.clockTick * this.velocity.x;
                //this.position.y += this.game.clockTick * this.velocity.y;
                this.x += this.game.clockTick * this.velocity.x;
                this.y += this.game.clockTick * this.velocity.y;
            } else if (this.facing == -1) {
                //this.position.x -= this.game.clockTick * this.velocity.x;
                //this.position.y -= this.game.clockTick * this.velocity.y;
                this.x -= this.game.clockTick * this.velocity.x;
                this.y -= this.game.clockTick * this.velocity.y;
            }
        }

        if (this.maxSummon != 3 && this.state == 2) {
            this.summonCounter += this.game.clockTick;
            if (this.summonCounter >= 2.5) {
                this.maxSummon++;
                this.game.addEntitySpecific(new Skeleton(this.game), 1);
                this.summonCounter = 0;

                console.log(this.maxSummon)
            }
        } else {
            this.state = 0;
        }

        // collision
        this.game.entities.forEach((entity) => {
            if (entity.BB && this.BB.collide(entity.BB)) {
                if (entity instanceof Knight) {
                    console.log("Lich and Knight collision");
                }
            }
        })
    };

    draw(ctx) {
        ctx.strokeStyle="purple";
        ctx.strokeRect(this.x- this.game.camera.x, this.y, 200, 330);
        //ctx.strokeRect(this.position.x, this.position.y, 200, 330);

        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }

        let stateModX = 0;
        let stateModY = 0;
        if (this.state == 2 || this.state == 3) stateModY = 25;

        if (this.dead == true) {
            //this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.position.x - stateModX, this.position.y - stateModY, 4);
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x - stateModX- this.game.camera.x, this.y - stateModY, 4);
        } else if (this.facing == 1) {
            //this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.position.x - stateModX, this.position.y - stateModY, 4);
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x - stateModX- this.game.camera.x, this.y - stateModY, 4);
        } else if (this.facing == -1) {
            //this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x * this.facing) - 200 + (stateModX * this.facing), this.position.y - stateModY, 4);
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - 200 + (stateModX * this.facing)- this.game.camera.x, this.y - stateModY, 4);
        }
        ctx.restore();
    };
}