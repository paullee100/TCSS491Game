class Lich {
    constructor (game, x, y) {
        Object.assign(this, {game, x, y});

        this.velocity = {x: 250, y: 0};

        this.game.Lich = this;
        this.state = 0; // idle = 0, walking = 1, attack1 = 2, attack2 = 3, attack3 = 4, death = 5
        this.attackState = 0; // initiate smoke = 0, smoke = 1, fire = 2
        this.facing = -1; // right = 1, left = -1
        this.dead = false;
        this.deadCounter = 0;
        //testing
        //this.health = 1
        this.health = 250
        this.maxhealth = 250;
        this.damage = 12.5;

        this.maxSummon = 0;
        this.summonCounter = 0;
        this.numOfFire = 0;

        this.placedSmokeBomb = false;
        this.smokePlacementX = 0;
        this.smokePlacementY = 0;

        this.waitTime = 0;
        this.attackTime = 0;

        this.spritesheet = [];
        this.animation = [];

        this.attackSpritesheet = [];
        this.attackAnimation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Walking.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Attack1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Attack2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Attack3.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Death.png"));

        this.attackSpritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Pellet.png"));
        this.attackSpritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Explosion.png"));
        this.attackSpritesheet.push(ASSET_MANAGER.getAsset("./sprites/Lich/Lich_Fire.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 0, 5, 52, 83, 4, 0.25, 40, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 0, 5, 54, 83, 8, 0.15, 43, false, true));
        this.animation.push(new Animator(this.spritesheet[2], 19, 15, 62, 90, 5, 0.55, 30, false, true));
        this.animation.push(new Animator(this.spritesheet[3], 13, 8, 69, 90, 5, 0.1, 23, false, true));
        this.animation.push(new Animator(this.spritesheet[4], 10, 4, 62, 90, 5, 0.1, 30, false, true));
        this.animation.push(new Animator(this.spritesheet[5], 0, 1, 70, 90, 10, 0.1, 21, false, true));

        this.attackAnimation.push(new Animator(this.attackSpritesheet[0], 42, 26, 15, 136, 1, 0.5, 0, false, true));
        this.attackAnimation.push(new Animator(this.attackSpritesheet[1], 0, 8, 130, 136, 10, 0.1, 100, false, true));
        this.attackAnimation.push(new Animator(this.attackSpritesheet[2], 5, 8, 15, 24, 8, 0.5, 9, false, true));

        this.updateBB();
    };

    determineState() {
        this.attackTime = 0;
        this.waitTime = 0;
        this.attackState = 0;
        this.numOfFire = 0;

        if (this.health <= 0) {
            return;
        }
        let rng = Math.floor(Math.random() * 100);
        if (rng <= 55 && this.maxSummon < 3) {
            this.state = 2;
        } else if (rng >= 25 && rng <= 80) {
            this.state = 4;

        } else if (rng >= 81 && rng <= 95) {
            this.state = 3;
        } else {
            this.state = 0;
        }
    };

    getKnightCoordinate() {
        this.placedSmokeBomb = true;
        this.smokePlacementX = this.game.camera.knight.position.x;
        this.smokePlacementY = this.game.camera.knight.position.y;
        this.game.addEntitySpecific(new LichSmoke(this.game, this.smokePlacementX, this.smokePlacementY), 0);
    };

    updateBB() {
        this.lastBB = this.BB;
        this.lastFireBB = this.FireBB;

        this.BB = new BoundingBox(this.x, this.y, 200, 330, "enemy", this);
        if (this.state === 4) {
            //console.log("fire bounding box working");
            this.FireBB = new BoundingBox(this.x - 150 * this.numOfFire, this.y + 175, 150 * this.numOfFire, 155, "enemy", this);
        } else {
            this.FireBB = new BoundingBox(0, 0, 0, 0, "enemy", this);
        }
    };

    update() {
        if (this.health <= 0) {
            this.state = 5;
            this.deadCounter += this.game.clockTick;
            if (this.deadCounter >= 1) {
                //level complete
                this.game.camera.levelclear = true;
                this.game.camera.levelComplete.one = true;
                this.dead = true;
                this.removeFromWorld = true;
            }
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
            if (this.maxSummon < 0) this.maxSummon = 0;

            if (this.maxSummon != 3) {
                this.summonCounter += this.game.clockTick;
                if (this.summonCounter >= 2.5) {
                    this.maxSummon++;
                    let rand = Math.floor(Math.random()*(3-1+1))+1;
                    this.game.addEntitySpecific(new Skeleton(this.game,this.x+(rand * PARAMS.BLOCKWIDTH),(540/64)* PARAMS.BLOCKWIDTH, true), 1);
                    this.summonCounter = 0;
                }
            } else {
                this.determineState();
            }
        } else if (this.state == 3) {
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 1.5 && this.waitTime < 2) {
                this.attackState = 1;
            }

            if (this.attackState === 1 && !this.placedSmokeBomb) {
                this.getKnightCoordinate();
            }

            if (this.waitTime >= 3) {
                this.placedSmokeBomb = false;
                this.determineState();
                
            }
        } else if (this.state == 4) {
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 1 && this.waitTime < 1.5) {
                this.attackState = 3;
            }
            if (this.waitTime >= 6.5) {
                this.determineState();
            }
        } else if (this.state == 0) {
            this.waitTime += this.game.clockTick;
            if (this.waitTime >= 2.5) {
                this.determineState();
            }
        }

        this.updateBB();

        // collision
        this.game.entities.forEach((entity) => {
            if (entity.BB && this.BB.collide(entity.BB)) {
                if (entity instanceof Knight) {
                    // console.log("Lich and Knight collision");
                }
            }

            if (entity.BB && this.FireBB.collide(entity.BB)) {
                if (entity instanceof Knight && this.state === 4) {
                    console.log("damaged by fire");
                    this.attackBB = new AttackBox(this.game, this, this.x - 150 * this.numOfFire, this.y + 175, 150 * this.numOfFire, 155, 0, 0, this.damage);
                    this.state = 0;
                    this.updateBB();
                }
            }
        });
    };

    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle="purple";
            ctx.strokeRect(this.x- this.game.camera.x, this.y- this.game.camera.y, 200, 330);
            ctx.strokeStyle = "black";
            ctx.strokeRect(this.x - this.game.camera.x - 150 * this.numOfFire, this.y - this.game.camera.y + 175, 150 * this.numOfFire, 155);
        }

        if (this.dead === false) {
            let ratio = this.health / this.maxhealth;
            ctx.strokeStyle = "black";
            ctx.fillStyle = ratio < 0.2 ? "Red" : ratio < 0.5 ? "Yellow" : "Green";

            if (this.health > 0) {
                ctx.fillRect(this.x - 120 - this.game.camera.x, this.y - this.game.camera.y - 100, 5.5 * PARAMS.BLOCKWIDTH * ratio, 0.5 * PARAMS.BLOCKWIDTH);
            }
            ctx.strokeRect(this.x - 120 - this.game.camera.x, this.y - this.game.camera.y - 100, 5.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH);

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
            else if (this.state == 4) stateModY = 15;
            
            if (this.facing == 1) {
                this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) - this.game.camera.x, this.y - stateModY- this.game.camera.y, 4);
            } else if (this.facing == -1) {
                this.animation[this.state].drawFrame(this.game.clockTick, ctx, ((this.x * this.facing) - 200 + (stateModX * this.facing)) - (this.game.camera.x * this.facing), this.y - stateModY- this.game.camera.y, 4);
            }
            ctx.restore();

            if (this.state == 4) {
                this.attackTime += this.game.clockTick;
                this.numOfFire = 1;
                this.attackAnimation[2].drawFrame(this.game.clockTick, ctx, (this.x - 150 * 1) - this.game.camera.x, this.y + 88 - this.game.camera.y, 10);
                this.updateBB();
                if (this.attackTime >= 1.5) {
                    this.numOfFire = 2;
                    this.attackAnimation[2].drawFrame(this.game.clockTick, ctx, (this.x - 150 * 2) - this.game.camera.x, this.y + 88 - this.game.camera.y, 10);
                    this.updateBB();
                }

                if (this.attackTime >= 3) {
                    this.numOfFire = 3;
                    this.attackAnimation[2].drawFrame(this.game.clockTick, ctx, (this.x - 150 * 3) - this.game.camera.x, this.y + 88 - this.game.camera.y, 10);
                    this.updateBB();
                }

                if (this.attackTime >= 4.5) {
                    this.numOfFire = 4;
                    this.attackAnimation[2].drawFrame(this.game.clockTick, ctx, (this.x - 150 * 4) - this.game.camera.x, this.y + 88 - this.game.camera.y, 10);
                    this.updateBB();
                }

                if (this.attackTime >= 6) {
                    this.numOfFire = 5;
                    this.attackAnimation[2].drawFrame(this.game.clockTick, ctx, (this.x - 150 * 5) - this.game.camera.x, this.y + 88 - this.game.camera.y, 10);
                    this.updateBB();
                }
            }
        }

    };
}

class Titan {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.game.Titan = this;
        this.state = 2; // stunned = 0, melee2 = 1, idle = 2, walking = 3, melee1 = 4, melee3 = 5, range1 = 6, range2 = 7, range3 = 8, death = 9
        this.facing = 1; // right = 1, left = -1
        this.health = 500;
        this.maxhealth = 500;
        this.damage = 10;
        this.attackDelay = 0;
        this.firstEncounter = false;
        this.encounter = false;

        this.spritesheet = [];
        this.animation = [];

        this.dead = false;
        this.deathCounter = 0;

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Walking.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Melee2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Walking.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Melee1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Melee3.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Range1.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Range2.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Range3.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Titan/Titan_Death.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 4, 6, 47, 104, 7, 0.5, 71, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 5, 7, 99, 99, 5, 0.2, 13, false, false));
        this.animation.push(new Animator(this.spritesheet[2], 6, 4, 41, 103, 6, 0.5, 71, false, true));
        this.animation.push(new Animator(this.spritesheet[3], 4, 6, 47, 104, 7, 0.5, 71, false, true));
        this.animation.push(new Animator(this.spritesheet[4], 11, 4, 73, 108, 5, 0.5, 39, false, true));
        this.animation.push(new Animator(this.spritesheet[5], 4, 4, 63, 124, 5, 0.5, 49, false, true));
        this.animation.push(new Animator(this.spritesheet[6], 5, 6, 80, 101, 5, 0.5, 32, false, true));
        this.animation.push(new Animator(this.spritesheet[7], 5, 7, 82, 101, 6, 0.15, 31, false, false));
        this.animation.push(new Animator(this.spritesheet[8], 8, 5, 78, 102, 6, 0.5, 35, false, true));
        this.animation.push(new Animator(this.spritesheet[9], 9, 11, 60, 102, 9, 0.15, 52, false, false));

        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.lastMeleeRange = this.meleeRange;

        this.meleeRange = new BoundingBox(this.x - 226, this.y, 226 + 226 + 160, 410, "enemy", this);
        this.BB = new BoundingBox(this.x, this.y, 160, 410, "enemy", this);
    };

    update() {
        if (this.health <= 0) {
            this.dead = true;
            this.state = 9;
            if (this.animation[this.state].isDone()) {
                //level complete
                this.game.camera.levelclear = true;
                this.game.camera.levelComplete.two = true;
                this.dead = true;
                this.removeFromWorld = true;
            }
        } else {

            if (this.game.camera.knight.position.x > this.x) {
                this.facing = 1;
            } else if (this.game.camera.knight.position.x < this.x) {
                this.facing = -1;
            }

            this.game.entities.forEach((entity) => {
                if (this.state !== 9) {
                    if (entity.BB && this.meleeRange.collide(entity.BB) && this.state !== 0) {
                        if (entity instanceof Knight) {

                            if (!this.firstEncounter && this.attackDelay < 2.5) {
                                this.attackDelay += this.game.clockTick;
                            } else if (this.firstEncounter || this.attackDelay >= 2.5) {
                                this.state = 1;
                                if (this.animation[1].currentFrame() == 1) {
                                    if (this.facing == 1) {
                                        this.attackBB = new AttackBox(this.game, this, this.x + 160, this.y, 226, 410, 1, 3, this.damage);
                                    } else {
                                        this.attackBB = new AttackBox(this.game, this, this.x - 226, this.y, 226, 410, 1, 3, this.damage);
                                    }
                                }
                                this.encounter = true;
                            } else {
                                this.state = 2;
                            }
                        }
                    } else {
                        if (entity instanceof Knight) {
                            this.state = 7;
                            if (this.animation[7].currentFrame() == 4) {
                                this.state = 7;
                                this.game.addEntitySpecific(new TitanLightning(this.game, this.x, this.y, this.game.knight, this.facing), 1);
                                this.animation[this.state].elapsedTime = 0;
                            }
                        }
                    }
                }
            });

            if (this.animation[this.state].isDone()) {
                let tempState = this.state;
                this.state = 2;
                this.animation[tempState].elapsedTime = 0;
                if (this.firstEncounter) {
                    this.firstEncounter = false;
                } else if (this.encounter) {
                    this.attackDelay = 0;
                }

            };
            this.updateBB();
        }
    };

    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(this.x - this.game.camera.x, this.y - this.game.camera.y, 160, 410);

            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x + 160 - this.game.camera.x, this.y - this.game.camera.y, 226, 410);
            ctx.strokeRect(this.x - 226 - this.game.camera.x, this.y - this.game.camera.y, 226, 410);
        }

        if (this.dead === false) {
            let ratio = this.health / this.maxhealth;
            ctx.strokeStyle = "black";
            ctx.fillStyle = ratio < 0.2 ? "red" : ratio < 0.5 ? "yellow" : "green";
            if (this.health > 0) {
                ctx.fillRect(this.x - this.game.camera.x - 120, this.y - this.game.camera.y - 100, 5.5 * PARAMS.BLOCKWIDTH * ratio, 0.5 * PARAMS.BLOCKWIDTH);
            }
            ctx.strokeRect(this.x - this.game.camera.x - 120, this.y - this.game.camera.y - 100, 5.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH);
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

        if (this.state == 2) stateModX = -13, stateModY = -15;
        else if (this.state == 7) stateModX = 55//, stateModY = -40;
        else if (this.state == 9) stateModY = -50;
            
        if (this.facing == 1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) - this.game.camera.x, this.y + stateModY - this.game.camera.y, 4);
        } else if (this.facing == -1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 160) + (stateModX * this.facing) - (this.facing * this.game.camera.x), this.y + stateModY - this.game.camera.y, 4);
        }
        ctx.restore();
    };
}

class Dragon {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.state = 3; // stunned = 0, attack = 1, pre-attack = 2, idle = 3, flight = 4, death = 5
        this.facing = -1; // right = 1, left = -1
        this.health = 500;
        this.maxhealth = 500;
        this.damage = 7.5;
        this.firedamage = 15;
        this.speed = 0;
        this.position = 32;
        this.dead = false;

        this.spritesheet = [];
        this.animation = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_Attack.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_PreAttack.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_Idle.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_Flight.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Dragon/Dragon_Death.png"));

        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation.push(new Animator(this.spritesheet[0], 30, 0, 90, 113, 4, 0.20, 10, false, false));
        this.animation.push(new Animator(this.spritesheet[1], 50, 4, 250, 117, 6, 0.20, 48, false, false));
        this.animation.push(new Animator(this.spritesheet[2], 16, 8, 141, 105, 4, 0.25, 10, false, false));
        this.animation.push(new Animator(this.spritesheet[3], 46, 0, 90, 113, 14, 0.25, 10, false, true));
        this.animation.push(new Animator(this.spritesheet[4], 4, 4, 182, 136, 11, 0.15, 20, false, false));
        this.animation.push(new Animator(this.spritesheet[5], 17, 8, 120, 126, 5, 0.5, 10, false, false));
    
        this.updateBB();
    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x+25, this.y+75, 300, 275, "enemy", this);
    }
    update() {
        this.speed = 0;
        if (this.health <= 0) {
            this.dead = true;
            this.state = 5;
            if (this.animation[this.state].isDone()) {
                //level complete
                this.game.camera.finishGame = true;
                this.dead = true;
                this.removeFromWorld = true;
            }
        } else {
            const TICK = this.game.clockTick;
            if (this.facing == -1 && this.game.knight.position.x / PARAMS.BLOCKWIDTH >= this.position && this.state == 3) {
                this.state = 4;
                ASSET_MANAGER.playAsset("./sounds/dragon_flight.mp3");
            }
            else if (this.facing == -1 && Math.abs(this.game.knight.position.x / PARAMS.BLOCKWIDTH - this.position) < 6 && this.state == 3) {
                let rng = Math.floor(Math.random() * 100);
			    if (rng < 20) {
				    this.state = 4;
                    ASSET_MANAGER.playAsset("./sounds/dragon_flight.mp3");
                }
                else {
                    this.state = 2;
                    ASSET_MANAGER.playAsset("./sounds/dragon_fire.mp3");
                }
            }
            else if (this.facing == 1 && (this.game.knight.position.x - 300) / PARAMS.BLOCKWIDTH <= this.position && this.state == 3) {
                this.state = 4;
                ASSET_MANAGER.playAsset("./sounds/dragon_flight.mp3");
            }
            else if (this.facing == 1 && (this.game.knight.position.x - 300) / PARAMS.BLOCKWIDTH - this.position < 6 && this.state == 3) {
                let rng = Math.floor(Math.random() * 100);
			    if (rng < 20) {
				    this.state = 4;
                    ASSET_MANAGER.playAsset("./sounds/dragon_flight.mp3");
                }
                else {
                    this.state = 2;
                    ASSET_MANAGER.playAsset("./sounds/dragon_fire.mp3");
                }
            }
            if (this.state == 4) {
                if (this.facing== -1) {
                    this.speed = (-450 * ((this.position - 20)/12)) * TICK
                    this.x += this.speed;
                }
                if (this.facing == 1) {
                    this.speed = (450 * (Math.abs(this.position - 32)/12)) * TICK
                    this.x += this.speed;
                }
                if (this.animation[4].currentFrame() > 2 && this.animation[4].currentFrame() < 6) {
                    if (this.facing == 1) {
                        this.attackBB = new AttackBox(this.game, this, this.x+115, this.y+75, 200, 275, 2, 3, this.damage);
                    }
                    else if (this.facing == -1) {
                        this.attackBB = new AttackBox(this.game, this, this.x+25, this.y+75, 200, 275, 2, 3, this.damage);
                    }
                }
            } else this.attackBB = null;
            if (this.state == 1) {
                if (this.facing == 1) {
                    this.fireBB1 = new AttackBox(this.game, this, this.x + 350, this.y + 175, 100, 100, 0, 0, this.firedamage);
                    //this.fireBB1 = new BoundingBox(this.x + 350, this.y+175, 100, 100, "enemy", this);
                    this.fireBB2 = new AttackBox(this.game, this, this.x + 450, this.y + 250, 100, 100, 0, 0, this.firedamage);
                    //this.fireBB2 = new BoundingBox(this.x + 450, this.y+250, 100, 100, "enemy", this);
                    this.fireBB3 = new AttackBox(this.game, this, this.x + 550, this.y + 300, 165, 100, 0, 0, this.firedamage);
                    //this.fireBB3 = new BoundingBox(this.x + 550, this.y+300, 165, 100, "enemy", this);
                }
                else if (this.facing == -1) {
                    this.fireBB1 = new AttackBox(this.game, this, this.x - 110, this.y + 175, 100, 100, 0, 0, this.firedamage);
                    //this.fireBB1 = new BoundingBox(this.x + 350, this.y+175, 100, 100, "enemy", this);
                    this.fireBB2 = new AttackBox(this.game, this, this.x - 210, this.y + 250, 100, 100, 0, 0, this.firedamage);
                    //this.fireBB2 = new BoundingBox(this.x + 450, this.y+250, 100, 100, "enemy", this);
                    this.fireBB3 = new AttackBox(this.game, this, this.x - 375, this.y + 300, 165, 100, 0, 0, this.firedamage);
                    //this.fireBB3 = new BoundingBox(this.x + 550, this.y+300, 165, 100, "enemy", this);
                }
            }
            this.game.entities.forEach((entity) => {
                /* if (this.fireBB1 && entity.BB && this.fireBB1.collide(entity.BB) && this.state === 1) {
                    if (entity instanceof Knight) {
                        console.log("damaged by fire");
                        this.game.knight.hit(this.firedamage, this.fireBB1);
                        this.updateBB();
                    }
                } */
                if ((this.fireBB1 && entity.BB && this.fireBB1.collide(entity.BB) || this.fireBB2 && entity.BB && this.fireBB2.collide(entity.BB) 
                || this.fireBB3 && entity.BB && this.fireBB3.collide(entity.BB)) && this.state === 1) {
                    if (entity instanceof Knight) {
                        console.log("damaged by fire");
                        this.game.knight.hit(this.firedamage, this.fireBB2);
                        this.updateBB();
                    }
                }
                /* if (this.fireBB3 && entity.BB && this.fireBB3.collide(entity.BB) && this.state === 1) {
                    if (entity instanceof Knight) {
                        console.log("damaged by fire");
                        this.game.knight.hit(this.firedamage, this.fireBB3);
                        this.updateBB();
                    }
                } */
            });

            /* if (this.animation[this.state].isDone()) {
                const temp = this.state;
                this.state = 3;
                this.animation[temp].elapsedTime = 0;
            } */
            if (this.animation[4].isDone()) {
                const temp = this.state;
                this.facing = this.facing * -1;
                this.state = 3;
                this.animation[temp].elapsedTime = 0;
                this.position = this.x / PARAMS.BLOCKWIDTH;
            }
            if (this.animation[2].isDone()) {
                const temp = this.state;
                //this.facing = this.facing * -1;
                this.state = 1;
                this.animation[temp].elapsedTime = 0;
            }
            if (this.animation[this.state].isDone()) {
                const temp = this.state;
                this.state = 3;
                this.animation[temp].elapsedTime = 0;
            };
            this.updateBB();
        }
        
    };

    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(this.x - this.game.camera.x+20, this.y - this.game.camera.y+75, 300, 375);
            ctx.strokeStyle = "green";
            if (this.attackBB && this.attackBB.removeFromWorld !== true) {
                ctx.strokeRect(this.attackBB.x - this.game.camera.x, this.attackBB.y - this.game.camera.y, this.attackBB.width, this.attackBB.height);
            }

            if (this.facing == 1 && this.state == 1) {
                if (this.fireBB1) ctx.strokeRect(this.fireBB1.x - this.game.camera.x, this.fireBB1.y - this.game.camera.y, this.fireBB1.width, this.fireBB1.height);
                if (this.fireBB2) ctx.strokeRect(this.fireBB2.x - this.game.camera.x, this.fireBB2.y - this.game.camera.y, this.fireBB2.width, this.fireBB2.height);
                if (this.fireBB3) ctx.strokeRect(this.fireBB3.x - this.game.camera.x, this.fireBB3.y - this.game.camera.y, this.fireBB3.width, this.fireBB3.height);
            }

            if (this.facing == -1 && this.state == 1) {
                if (this.fireBB1) ctx.strokeRect(this.fireBB1.x - this.game.camera.x, this.fireBB1.y - this.game.camera.y, this.fireBB1.width, this.fireBB1.height);
                if (this.fireBB2) ctx.strokeRect(this.fireBB2.x - this.game.camera.x, this.fireBB2.y - this.game.camera.y, this.fireBB2.width, this.fireBB2.height);
                if (this.fireBB3) ctx.strokeRect(this.fireBB3.x - this.game.camera.x, this.fireBB3.y - this.game.camera.y, this.fireBB3.width, this.fireBB3.height);
            }
        }

        if (this.dead === false) {
            let ratio = this.health / this.maxhealth;
            ctx.strokeStyle = "black";
            ctx.fillStyle = ratio < 0.2 ? "red" : ratio < 0.5 ? "yellow" : "green";
            if (this.health > 0) {
                ctx.fillRect(this.x - this.game.camera.x + 50, this.y - this.game.camera.y - 25, 5.5 * PARAMS.BLOCKWIDTH * ratio, 0.5 * PARAMS.BLOCKWIDTH);
            }
            ctx.strokeRect(this.x - this.game.camera.x + 50, this.y - this.game.camera.y - 25, 5.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH);
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
        let facingModX = 0;

        if (this.state == 1 && this.facing == -1) stateModX = 200, facingModX = -50;
        if (this.state == 1 && this.facing == 1) stateModX = 200
        if (this.state == 2) stateModX = 200;
        if (this.state == 2) stateModY = -50;
        if (this.state == 4) stateModY = 75, stateModX = 150;

        if (this.facing == 1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x - stateModX) - this.game.camera.x, (this.y - stateModY) - this.game.camera.y, 4);
        } else if (this.facing == -1) {
            this.animation[this.state].drawFrame(this.game.clockTick, ctx, ((this.x * this.facing) - 375 + (stateModX * this.facing) - facingModX) - (this.game.camera.x * this.facing), (this.y - stateModY) - this.game.camera.y, 4);
        }

        ctx.restore();
    };
}