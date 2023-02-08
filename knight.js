class Knight {
    constructor(game, xp, yp,) {

        Object.assign(this, {game});

        //this.position = {x: 550, y:543.75};
        this.position = {x: xp, y: yp};
        this.health = 100;
        this.damage = 20;

        this.game.Knight = this;
        this.velocity = {x: 0, y: 0};
        this.facing = 1; // right = 1, left = -1
        this.state = 3; // running = 0, attack1 = 1, attack2 = 2, idle = 3, rolling = 4, jump = 5, death = 6, fall = 7, hit = 8, parry = 9, block = 10;
        
        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Run.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Attack2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Roll.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Jump.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Death.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Fall.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Hit.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Parry.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Knight_Block.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 43, 41, 30, 40, 10, 0.060, 90, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 37, 37, 85, 45, 4, 0.1, 35, false, false));
        this.animation.push(new Animator(this.spritesheet[2], 30, 40, 88, 40, 6, 0.1, 32, false, false));
        this.animation.push(new Animator(this.spritesheet[3], 45, 43, 20, 36, 10, 0.1, 100, false, true));
        this.animation.push(new Animator(this.spritesheet[4], 42, 41, 42, 37, 12, 0.075, 78, false, false));
        this.animation.push(new Animator(this.spritesheet[5], 43, 41, 30, 40, 3, 0.075, 90, false, true));
        this.animation.push(new Animator(this.spritesheet[6], 19, 40, 50, 40, 10, 0.1, 69, false, false));
        this.animation.push(new Animator(this.spritesheet[7], 36, 43, 32, 36, 3, 0.1, 90, false, true));
        this.animation.push(new Animator(this.spritesheet[8], 36, 41, 30, 40, 1, 0.5, 90, false, false));
        this.animation.push(new Animator(this.spritesheet[9], 42, 41, 31, 50, 5, 0.125, 83, false, false));
        this.animation.push(new Animator(this.spritesheet[10], 42, 41, 30, 40, 1, 0.5, 90, false, true));

        this.readyToAttack = 0;
        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.lastSwordBB = this.SwordBB
         if (this.state == 1 || this.state == 2) {
            if (this.facing == 1) {
                //this.SwordBB = new BoundingBox(this.position.x + 100 - this.game.camera.x, this.position.y - this.game.camera.y, 200, 181);
            } else if (this.facing == -1) {
                //this.SwordBB = new BoundingBox(this.position.x - 200 - this.game.camera.x, this.position.y - this.game.camera.y, 200, 181);
            }
        } else { 
            //this.SwordBB = new BoundingBox(0, 0, 0, 0);
        }
        this.BB = new BoundingBox(this.position.x, this.position.y, 100, 181, "player", this);
    };

    update() {

        const RUN = 750;
        const JUMP = -900;
        const FALL = 1750;

        const TICK = this.game.clockTick;

        if (this.state != 5 && this.state != 4 && this.state != 1 && this.state != 2 && this.state != 7 && this.state != 8 && this.state != 9) {
            if (this.game.keys["a"] || this.game.keys["ArrowLeft"]) { // move left
                console.log("A is pressed");
                this.facing = -1;
                this.state = 0;
                this.velocity.x = -RUN;
                //this.velocity.y = 0;
            } else if (this.game.keys["d"] || this.game.keys["ArrowRight"]) { // move right
                console.log("D is pressed");
                this.facing = 1;
                this.state = 0;
                this.velocity.x = RUN;
                //this.velocity.y = 0;
            } else if (this.game.keys["k"] || this.game.click) { // attack
                this.state = 1;
                //this.velocity.y = 0;
                if (this.facing == 1) {
                    this.swordBB = new AttackBox(this.game, this, this.position.x + 100, this.position.y, 200, 181, this.game.timer.gameTime, 2, this.damage);
                }
                else {
                    this.swordBB = new AttackBox(this.game, this, this.position.x - 200, this.position.y, 200, 181, this.game.timer.gameTime, 2, this.damage);
                }
                /* this.game.entities.forEach(entity => {
                    if (this.swordBB !== undefined) {
                        if (entity.BB && this.swordBB.collide(entity.BB)) {
                            if (entity.BB.type == "enemy" &&
                                this.state == 1) {
                                this.swordBB.damageDeal(entity);
                                ASSET_MANAGER.playAsset("./sounds/knight_attack_hit.mp3");
                            }
                        }
                    }   
                }); */
                ASSET_MANAGER.playAsset("./sounds/knight_attack1.mp3");
            } else if (this.game.keys["Shift"] || (this.game.keys["Shift"] && (this.game.keys["a"] || this.game.keys["d"]))) { // roll
                this.state = 4;
                this.velocity.x = 500 * (this.facing);
                ASSET_MANAGER.playAsset("./sounds/knight_roll.mp3");
            } else if (this.game.keys["w"]) { // jump
                this.velocity.y = JUMP;
                this.state = 5;
                ASSET_MANAGER.playAsset("./sounds/knight_jump.mp3");
            }else if (this.game.keys["l"]) { // TEST FOR HIT ANIMATION
                //this.velocity.y = JUMP;
                if (this.state == 10) this.state = 10;
                else {
                    this.state = 9;
                    ASSET_MANAGER.playAsset("./sounds/knight_block.mp3");
                }
            } 
            else {
                this.state = 3;
                this.velocity.x = 0;
                //this.velocity.y = 0;
            }
            //this.updateBB();
    }
    else if (this.state == 1) {
        if (this.animation[this.state].currentFrame() + 1 >= 3) {
            if (this.game.keys["k"] || this.game.click) { // attack
                this.state = 2;
                this.animation[1].elapsedTime = 0;
                //this.velocity.y = 0;
                if (this.facing == 1) {
                    this.swordBB = new AttackBox(this.game, this, this.position.x + 100, this.position.y, 200, 181, this.game.timer.tick, 3, this.damage);
                }
                else {
                    this.swordBB = new AttackBox(this.game, this, this.position.x - 200, this.position.y, 200, 181, this.game.timer.tick, 3, this.damage);
                }
                /* this.game.entities.forEach(entity => {
                    if (this.swordBB !== undefined) {
                        if (entity.BB && this.swordBB.collide(entity.BB)) {
                            if (entity.BB.type == "enemy" &&
                                this.state == 2) {
                                this.swordBB.damageDeal(entity);
                                ASSET_MANAGER.playAsset("./sounds/knight_attack_hit.mp3");
                            }
                        }
                    }   
                }); */
                ASSET_MANAGER.playAsset("./sounds/knight_attack2.mp3");
            }
        } else {
            if (this.game.click != null) {
                this.game.click = null;
            }
        }
    }
    else {
            //mid-air physics
            //vertical physics
            if (this.state == 5 && this.velocity.y > 0) this.state = 7;
            if (this.velocity.y < 0 && this.game.keys["w"]) { // holding A while jumping jumps higher
                //this.velocity.y -= 25;
            };

            // horizontal physics
            if (this.state != 4 && this.game.keys["d"] || this.game.keys["ArrowRight"] && !(this.game.keys["a"] || this.game.keys["ArrowLeft"])) {
                this.velocity.x = RUN/2;
            } else if (this.state != 4 && (this.game.keys["a"] || this.game.keys["ArrowLeft"]) && !(this.game.keys["d"] || this.game.keys["ArrowRight"])) {
                this.velocity.x = -RUN/2;
            } else {
                    // does nothing
            };

        };
        //if (this.position.y < 540) { //Just for testing. Replace with floor collision to reset sprite later
        this.velocity.y += FALL * TICK;
        //}

        this.position.x += this.velocity.x * TICK;
        this.position.y += this.velocity.y * TICK;
        this.updateBB();

        // collision
        var that = this;
        this.game.entities.forEach(entity => {
            if (that.swordBB) {
                if (entity.BB && that.swordBB.collide(entity.BB)) {
                    if (entity.BB.type == "enemy" &&
                        (this.state == 1 || this.state == 2) && that.swordBB.removeFromWorld !== true) {
                        this.swordBB.damageDeal(entity);
                        ASSET_MANAGER.playAsset("./sounds/knight_attack_hit.mp3");
                    }
                }
            }   
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Tile) {
                    if ((that.lastBB.bottom) <= entity.BB.top) { //landing
                        that.position.y = entity.y - 171.25;
                        that.velocity.y = 0;
                        if (that.state == 5 || that.state == 7) that.state = 3;
                    }
                    else if ((that.lastBB.right) <= entity.BB.left) {
                        that.position.x = entity.BB.left - 100;
                        if (that.velocity.x > 0) that.velocity.x = 0;
                    } 
                    else if ((that.lastBB.left) >= entity.BB.right) {
                        that.position.x = entity.BB.right;
                        if (that.velocity.x < 0) that.velocity.x = 0;
                    }
                };
            };
            if (entity.BB && entity.attackBB && that.BB.collide(entity.attackBB) && entity.BB.type == "enemy" && entity.attackBB.removeFromWorld !== true) {
                that.state = 8;
                if (entity.attackBB.attacker.facing == -1) that.velocity.x = Math.max(-600, -40 * entity.attackBB.damage);
                else if (entity.attackBB.attacker.facing == 1) that.velocity.x = Math.min(600, 40 * entity.attackBB.damage);
            }
        });
        that.updateBB();
        /* if (this.position.y > 700) { //Just for testing. Replace with floor collision to reset sprite later
            this.position.y = 540;
            this.state = 3;
        }; */
        if (this.animation[this.state].isDone()) {
            var tempState = this.state;
            if (this.state == 9) this.state = 10;
            else this.state = 3;
            this.animation[tempState].elapsedTime = 0;
            if (this.game.click != null) {
                this.game.click = null;
            }
        };

        //reseting character
        if(this.position.y > 10000){
            this.position ={x:9 * PARAMS.BLOCKWIDTH, y:6 * PARAMS.BLOCKWIDTH}
        }
    }

    draw(ctx) {
        // let canvas = document.getElementById("gameWorld");
        // canvas.style.backgroundColor = "black
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.position.x - this.game.camera.x, this.position.y - this.game.camera.y, 100, 181);

        ctx.strokeStyle = "purple";
        ctx.strokeRect(this.position.x + 100 - this.game.camera.x, this.position.y - this.game.camera.y, 200, 181);

        ctx.strokeStyle = "purple";
        ctx.strokeRect(this.position.x - 200 - this.game.camera.x, this.position.y - this.game.camera.y, 200, 181);

        if (this.swordBB && (this.state == 1 || this.state == 2) && this.swordBB.removeFromWorld !== true) {
            this.swordBB.draw(ctx);
        }
        
        if (this.facing == -1) {
            ctx.save();
            ctx.scale(-1, 1);
        } else if (this.facing == 1) {
            ctx.save();
            ctx.scale(1, 1);
        }

        var stateModx = 0;
        var stateMody = 0;
        if(this.state == 0) stateModx = 20, stateMody = 10;
        else if (this.state == 1) stateModx = 100, stateMody = 30;
        else if (this.state == 2) stateModx = 100, stateMody = 18;
        else if (this.state == 4) stateModx = 50;
        else if (this.state == 8) stateModx = 35;
        else if (this.state == 9) stateModx = 25, stateMody = 20;
        else if (this.state == 10) stateModx = 20, stateMody = 15;

        if(this.facing == 1) this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x - stateModx)- this.game.camera.x, this.position.y - stateMody- this.game.camera.y, 5);
        else this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.position.x * this.facing) - 100 + (stateModx * this.facing) - (this.game.camera.x * this.facing), this.position.y - stateMody- this.game.camera.y, 5);
        ctx.restore();
    };
}
