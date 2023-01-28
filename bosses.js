class Lich {
    constructor (game, x, y) {
        Object.assign(this, {game, x, y});

        this.velocity = {x: 250, y: 0};

        this.game.Lich = this;
        this.state = 0; // idle = 0, walking = 1, attack1 = 2, attack2 = 3, attack3 = 4, death = 5
        this.facing = 1; // right = 1, left = -1
        this.dead = false;
        this.deadCounter = 0;
        this.health = 100;
        this.damage = 10;

        this.maxSummon = 0;
        this.summonCounter = 0;
        this.waitTime = 0;

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
        this.animation.push(new Animator(this.spritesheet[4], 0, 1, 70, 90, 10, 0.1, 21, false, true));
        this.determineState();
        this.updateBB();
    };

    determineState() {
        this.waitTime = 0;
        let rng = Math.floor(Math.random() * 100);
        console.log(rng);
        if (rng < 50) {
            this.maxSummon = 0;
            this.state = 2;
        } else if (rng >= 50 && rng <= 70) {
            this.state = 3;
        } else if (rng >= 71 && rng <= 80) {
            this.state = 4;
        } else {
            this.state = 0;
        }
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 200, 330);
    };

    update() {
        if (this.health <= 0) {
            this.state = 4;
            this.dead = true;
            this.deadCounter += this.game.clockTick;
            if (this.deadCounter >= 1) this.removeFromWorld = true;
        } else if (this.state == 1) {
            if (this.x > 840) {
                this.facing = -1;
            } else if (this.x < 0) {
                this.facing = 1;
            }

            if (this.facing == 1) {
                this.x += this.game.clockTick * this.velocity.x;
                this.y += this.game.clockTick * this.velocity.y;
            } else if (this.facing == -1) {
                this.x -= this.game.clockTick * this.velocity.x;
                this.y -= this.game.clockTick * this.velocity.y;
            }
        } else if (this.state == 2) {
            if (this.maxSummon != 3) {
                this.summonCounter += this.game.clockTick;
                if (this.summonCounter >= 2.5) {
                    this.maxSummon++;
                    this.game.addEntitySpecific(new Skeleton(this.game), 1);
                    this.summonCounter = 0;
                }
            } else {
                this.determineState();
            }
        } else if (this.state == 3) {
            console.log("attack2");
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 3) {
                this.determineState();
            }
        } else if (this.state == 4) {
            console.log("attack3");
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 3) {
                this.determineState();
            }
        } else if (this.state == 0) {
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 5) {
                this.determineState();
            }
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
        ctx.strokeRect(this.x- this.game.camera.x, this.y - this.game.camera.y, 200, 330);
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
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) - this.game.camera.x, this.y - stateModY - this.game.camera.y, 4);
        } else if (this.facing == 1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) - this.game.camera.x, this.y - stateModY - this.game.camera.y, 4);
        } else if (this.facing == -1) {
            //this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x * this.facing) - 200 + (stateModX * this.facing), this.position.y - stateModY, 4);
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, ((this.x * this.facing) - 200 + (stateModX * this.facing)) - (this.game.camera.x * this.facing), this.y - stateModY - this.game.camera.y, 4);
        }
        ctx.restore();
    };
}
