class Skeleton {
	constructor(game,x,y) {
		Object.assign(this, { game,x,y });
		this.leftbound = this.x - 300;
		this.rightbound = this.x + 300;
		this.speed = 100;
		this.health = 50;
		this.facing = 1; // right = 1 left = -1
		this.state = 1; // stunned = 0, walking = 1, attack = 2, dead = 3
		this.game.Skeleton = this;
		this.deathtime = 0;
		this.attacktime = 0;
		this.spritesheet = [];
		this.animation = [];
		this.damage = 5;
		
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeleton/Skeletonhurt.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeleton/Skeletonwalking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeleton/Skeletonattack.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeleton/Skeletondeath.png"));
		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 0, 0, 70, 70, 3, 0.25, 1, false, false));
		this.animation.push(new Animator(this.spritesheet[1], 71, 0, 71, 75, 8, 0.1, 1, false, true));
		this.animation.push(new Animator(this.spritesheet[2], 0, 0, 95, 90, 4, 0.2, 1, false, false));
		this.animation.push(new Animator(this.spritesheet[3], 0, 0, 68, 75, 6, 0.2, 1, false, false));

		this.dead = false;
		this.updateBB();
	};

	updateBB() {
		this.lastBB = this.BB;
		this.lastVisionBB = this.VisionBB;
		if (this.state == 1 && this.attacktime >= 0.5) {
			if (this.facing == 1) {
				//this.SwordBB = new BoundingBox(this.x + 100, this.y, 122, 185);
			} else {
				//this.SwordBB = new BoundingBox(this.x - 123, this.y, 122, 185);
			}
			this.attacktime = 0;
		} else {
			//this.SwordBB = new BoundingBox(0, 0, 0, 0);
		}
		this.VisionBB = new BoundingBox(this.leftbound, this.y, 695, 185, "enemy", this);
		this.BB = new BoundingBox(this.x, this.y, 100, 185, "enemy", this);
	}

	update() {
		this.x += this.speed * this.game.clockTick;
		// walking path
		if (this.x > this.rightbound) {
			this.speed = -100;
			this.facing = -1;
			//this.state = 0;
		} else if (this.x < this.leftbound) {
			this.speed = 100;
			this.facing = 1;
			//this.state = 0;
		}
		//this.updateBB();
		 // collisions
		
		if (this.state == 2) {
			this.attacktime += this.game.clockTick;
			/*
			if (this.attacktime >= 1) {
				this.attacktime = 0;
			}
			*/
		}
		this.updateBB();
		
		var that = this;
		this.game.entities.forEach(entity => {
			/* if (entity.BB && that.SwordBB.collide(entity.BB)) {
				if (entity instanceof Knight && this.state == 1) {
					console.log("skeleton hurts the knight!")
				}
			} */
			if (entity.BB && that.VisionBB.collide(entity.BB)) {
				if (entity instanceof Knight) {
					if ((that.lastBB.right) <= entity.BB.left) { // skeleton sees knight from right
						this.facing = 1;
						this.speed = 150;
					}
					else if ((that.lastBB.left) >= entity.BB.right) { // skeleton sees knight from left
						this.facing = -1;
						this.speed = -150;
					}
				}
			}
			if (entity.BB && that.BB.collide(entity.BB) && this.state !== 0) {
				if (entity instanceof Knight) {
					this.state = 2;
					this.speed = 0;
					if (this.animation[2].currentFrame() == 2) {
						if (this.facing == 1) {
							this.attackBB = new AttackBox(this.game, this, this.x + 100, this.y, 122, 185, 2, 3, this.damage);
						}
						else {
							this.attackBB = new AttackBox(this.game, this, this.x - 123, this.y, 122, 185, 2, 3, this.damage);
						}
					}
					/* else if (this.attackBB) {
						this.attackBB.removeFromWorld = true;
					}; */
					console.log("skeleton has collided")
				}
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 1;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 100;
			} else {
				this.speed = -100;
			}
		};
		if (this.health <= 0) {
			this.speed = 0;
			this.state = 3;
			this.deathtime += this.game.clockTick;
			if (this.deathtime >= 1) {
				this.dead = true;
			}
			this.removeFromWorld;
		}
	};

	draw(ctx) {
		if (PARAMS.DEBUG) {
			//hit box
			ctx.strokeStyle = "purple";
			if (this.facing == 1) {
				ctx.strokeRect((this.x + 100) - this.game.camera.x, this.y- this.game.camera.y, 122, 185);
			} else {
				ctx.strokeRect((this.x - 123) - this.game.camera.x, this.y- this.game.camera.y, 122, 185);
			}
			// hurt box
			ctx.strokeStyle = "green";
			ctx.strokeRect(this.x - this.game.camera.x, this.y- this.game.camera.y, 100, 185);
			// vision box
			ctx.strokeStyle = "red";
			ctx.strokeRect((this.leftbound) - this.game.camera.x, this.y- this.game.camera.y, 695, 185);
		}
		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		var stateMod = 0;
		if (this.state == 1) stateMod = 0;
		else if (this.state == 2) stateMod = -48;
		else if (this.state == 3) stateMod = 0;
		else if (this.state == 0) stateMod = 0;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing)- this.game.camera.x, this.y + stateMod- this.game.camera.y, 2.5)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95)- (this.game.camera.x * this.facing), this.y + stateMod- this.game.camera.y, 2.5)
			}

		} else {
			this.game.Lich.maxSummon--;
			console.log(this.game.Lich.maxSummon);
			this.removeFromWorld = true;
			console.log("is ded");
		}

		ctx.restore();

		//ctx.drawImage(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 0, 0);
	};
}

class Cyclops {
	constructor(game, x, y) {
		Object.assign(this, {game, x, y})

		this.state = 1; // stunned = 0, idle = 1, walking = 2, attack1 = 3, attack2 = 4, attack3 = 5, death = 6
		this.facing = 1; // right = 1, left = -1
		this.health = 100;
		this.attack = -10;
		this.speed = 100;
		this.spritesheet = [];
		this.animation = [];

		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Walking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Idle.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Walking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack1.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack2.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Attack3.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Cyclops_Death.png"));
		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 19, 13, 139, 81, 5, 0.2, 6, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 13, 9, 46, 80, 10, 0.5, 99, false, true));
		this.animation.push(new Animator(this.spritesheet[2], 8, 15, 50, 81, 6, 0.35, 103, false, true));
		this.animation.push(new Animator(this.spritesheet[3], 19, 13, 139, 81, 5, 0.2, 6, false, true));
		this.animation.push(new Animator(this.spritesheet[4], 16, 7, 104, 132, 5, 0.2, 41, false, true));
		this.animation.push(new Animator(this.spritesheet[5], 34, 20, 88, 175, 5, 0.2, 57, false, true));
		this.animation.push(new Animator(this.spritesheet[6], 39, 13, 58, 79, 7, 0.25, 89, false, true));

		this.updateBB();
	};

	updateBB() {
		this.lastBB = this.BB;

		this.BB = new BoundingBox(this.x, this.y, 120, 240, "enemy", this);
	};

	update() {
		if (this.game.Knight.position.x > this.x) {
			this.facing = 1;
		} else if (this.game.Knight.position.x < this.x) {
			this.facing = -1;
		}

		if (this.health <= 0) {
			this.state = 6;
			if (this.animation[this.state].isDone()) {
				this.removeFromWorld = true;
			}
		}

		if (this.state < 3) {
			this.x += this.speed * this.game.clockTick * this.facing;
		}
		if (this.x !== 0) {
			this.state = 2;
		} else {
			this.state = 1;
		}

		this.game.entities.forEach((entity) => {
			if (entity.BB && this.BB.collide(entity.BB)) {
				if (entity instanceof Knight) {
					this.state = 3;
				}
			}
		});

		if (this.animation[this.state].isDone()) {
			const tempState = this.state;
			this.state = 0;
			this.animation[tempState].elapsedTime = 0;
		}

		this.updateBB();
	};

	draw(ctx) {
		if (PARAMS.DEBUG) {
			ctx.strokeStyle = "purple";
			ctx.strokeRect(this.x - this.game.camera.x, this.y - this.game.camera.y, 120, 240);
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

		if (this.facing == 1) {
			this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 3);
		} else if (this.facing == -1) {
			this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - 120 - (this.game.camera.x * this.facing), this.y - this.game.camera.y, 3);

		}

		ctx.restore();
	};
}

class GreenSlime {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.dead = false;
		this.speed = 150;
		this.health = 50;
		this.facing = 1; // right = 1 left = -1
		this.state = 1; // damage/stunned = 0,  jump = 1, jump2 = 2, idle = 3, death = 4 
		this.game.GreenSlime = this;
		this.deathtime = 0;
		this.idletime = 0;
		this.spritesheet = [];
		this.animation = [];
		this.damage = 5;
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Green/Green_Slime_Damage.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Green/Green_Slime_Jump.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Green/Green_Slime_Jump2.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Green/Green_Slime_Idle.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Green/Green_Slime_Death.png"));

		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 0, 0, 16, 18, 5, 0.1, 0.1, false, false));
		this.animation.push(new Animator(this.spritesheet[1], 0, 0, 15.15, 30, 10, 0.1, 1, false, false));
		this.animation.push(new Animator(this.spritesheet[2], 0, 0, 15.16, 47, 10, 0.1, 1, false, true));
		this.animation.push(new Animator(this.spritesheet[3], 0, 0, 15.9, 18, 9, 0.1, 1, false, true));
		this.animation.push(new Animator(this.spritesheet[4], 0, 0, 15.5, 18, 5, .15, 1, false, true));
		this.updateBB();
	}
	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y + 10, 90, 160, "enemy", this);
	}
	update() {

		this.x += this.speed * this.game.clockTick;
		this.idletime += this.game.clockTick;
		if (this.idletime >= 2) {
			this.state = 1;
			this.idletime = 0;
			if (this.facing == 1) {
				this.speed = 150;
			} else {
				this.speed = -150;
			}
		}
		// collision
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB) /*&& this.state !== 3*/) {
				if (entity instanceof Knight) {
					//this.state = 3;
					this.speed = 0;
					if (this.animation[1].currentFrame() == 2) {
						if (this.facing == 1) {
							//this.attackBB = new AttackBox(this.game, this, this.x + 100, this.y, 122, 185, 2, 3, this.damage);
						}
						else {
							//this.attackBB = new AttackBox(this.game, this, this.x - 123, this.y, 122, 185, 2, 3, this.damage);
						}
					}
					if (this.state == 1) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 90, 160, 2, 3, this.damage);
					} else if (this.state == 3) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 70, 90, 90, 2, 3, this.damage);
					}
					//this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 95, 160, 2, 3, this.damage);
					console.log("slime has collided")
				}
				if (entity instanceof Tile) {
					if ((that.lastBB.right) <= entity.BB.left) {
						this.facing = -1;
						this.speed = -150;
					}
					else if ((that.lastBB.left) >= entity.BB.right) {
						this.facing = 1;
						this.speed = 150;
						
					}
				};
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 3;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 0;
			} else {
				this.speed = 0;
			}
		};
		this.updateBB();
		if (this.health <= 0) {
			this.speed = 0;
			this.state = 4;
			this.deathtime += this.game.clockTick;
			if (this.deathtime >= .7) {
				this.dead = true;
			}
		}
	}
	draw(ctx) {
		if (PARAMS.DEBUG) {
			// hitbox
			ctx.strokeStyle = "red";
			if (this.state == 1) {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 10) - this.game.camera.y, 90, 160);
			} else {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 70) - this.game.camera.y, 90, 90);
			}
		}

		/*
		if (this.state == 3) {
			ctx.strokeRect(this.x - this.game.camera.x, (this.y + 70) - this.game.camera.y, 95, 90);
		} else {
			ctx.strokeRect(this.x - this.game.camera.x, (this.y + 10) - this.game.camera.y, 95, 160);
		}
		*/
		//ctx.strokeRect(this.x - this.game.camera.x, (this.y + 10) - this.game.camera.y, 95, 160);
		
		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		//ctx.save();
		var stateMod = 0;
		if (this.state == 0) stateMod = 65;
		else if (this.state == 1) stateMod = 0;
		else if (this.state == 2) stateMod = 0;
		else if (this.state == 3) stateMod = 70;
		else if (this.state == 4) stateMod = 65;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - this.game.camera.x, this.y - this.game.camera.y + stateMod, 6)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95) - (this.facing * this.game.camera.x), this.y - this.game.camera.y + stateMod, 6)
			}

		} else {
			this.removeFromWorld = true;
			console.log("slime is ded");
		}
		ctx.restore();
	}
}
class RedSlime {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.dead = false;
		this.speed = 150;
		this.health = 50;
		this.facing = 1; // right = 1 left = -1
		this.state = 1; // damaged/stunned = 0,  jump = 1, idle = 2, death = 3 
		this.game.RedSlime = this;
		this.deathtime = 0;
		this.idletime = 0;
		this.spritesheet = [];
		this.animation = [];
		this.damage = 5;
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Red/Red_Slime_Damage.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Red/Red_Slime_Jump.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Red/Red_Slime_Idle.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Red/Red_Slime_Death.png"));

		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 0, 0, 16, 18, 5, .1, 0, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 0, 0, 16, 31, 10, 0.1, 0, false, false));
		this.animation.push(new Animator(this.spritesheet[2], 1, 0, 16, 17, 10, 0.1, 0, false, true));
		this.animation.push(new Animator(this.spritesheet[3], 0, 0, 16, 18, 5, 0.15, 0, false, false));
	
		this.updateBB();
	};
	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y + 10, 95, 160, "enemy", this);
	};
	update() {

		this.x += this.speed * this.game.clockTick;
		this.idletime += this.game.clockTick;
		if (this.idletime >= 2) {
			this.state = 1;
			this.idletime = 0;
			if (this.facing == 1) {
				this.speed = 150;
			} else {
				this.speed = -150;
			}
		}
		// collision
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB) /*&& this.state !== 3*/) {
				if (entity instanceof Knight) {
					//this.state = 3;
					this.speed = 0;
					if (this.animation[1].currentFrame() == 2) {
						if (this.facing == 1) {
							//this.attackBB = new AttackBox(this.game, this, this.x + 100, this.y, 122, 185, 2, 3, this.damage);
						}
						else {
							//this.attackBB = new AttackBox(this.game, this, this.x - 123, this.y, 122, 185, 2, 3, this.damage);
						}
					}
					if (this.state == 1) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 95, 160, 2, 3, this.damage);
					} else if (this.state == 2) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 70, 95, 90, 2, 3, this.damage);
					}
					//this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 95, 160, 2, 3, this.damage);
					console.log("slime has collided")
				}
				if (entity instanceof Tile) {
					if ((that.lastBB.right) <= entity.BB.left) {
						this.facing = -1;
						this.speed = -150;
					}
					else if ((that.lastBB.left) >= entity.BB.right) {
						this.facing = 1;
						this.speed = 150;

					}
				};
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 2;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 0;
			} else {
				this.speed = 0;
			}
		};
		this.updateBB();
		if (this.health <= 0) {
			this.speed = 0;
			this.state = 3;
			this.deathtime += this.game.clockTick;
			if (this.deathtime >= .7) {
				this.dead = true;
			}
		}
	};
	draw(ctx) {
		if (PARAMS.DEBUG) {
			// hitbox
			ctx.strokeStyle = "red";
			if (this.state == 1) {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 10) - this.game.camera.y, 95, 160);
			} else {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 70) - this.game.camera.y, 95, 90);
			}
		}

		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		var stateMod = 0;
		if (this.state == 0) stateMod = 60;
		else if (this.state == 1) stateMod = -10;
		else if (this.state == 2) stateMod = 70;
		else if (this.state == 3) stateMod = 60;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - (this.facing * this.game.camera.x), this.y - this.game.camera.y + stateMod, 6)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95) - (this.facing * this.game.camera.x), this.y - this.game.camera.y + stateMod, 6)
			}
		} else {
			this.removeFromWorld = true;
			console.log("slime is ded");
		}
		ctx.restore();
	};
};
class YellowSlime {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		this.dead = false;
		this.speed = 150;
		this.health = 50;
		this.facing = 1; // right = 1 left = -1
		this.state = 1; // damaged/stunned = 0,  jump = 1, idle = 2, death = 3 
		this.game.YellowSlime = this;
		this.deathtime = 0;
		this.idletime = 0;
		this.spritesheet = [];
		this.animation = [];
		this.damage = 5;
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Yellow/Yellow_Slime_Damage.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Yellow/Yellow_Slime_Jump.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Yellow/Yellow_Slime_Idle.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Yellow/Yellow_Slime_Death.png"));

		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 0, 0, 16, 18, 5, .1, 0, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 0, 0, 16, 31, 10, 0.1, 0, false, false));
		this.animation.push(new Animator(this.spritesheet[2], 0, 0, 16, 17, 10, 0.1, 0, false, true));
		this.animation.push(new Animator(this.spritesheet[3], 0, 0, 16, 18, 5, 0.15, 0, false, false));

		this.updateBB();
	};
	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y + 10, 95, 160, "enemy", this);
	};
	update() {

		this.x += this.speed * this.game.clockTick;
		this.idletime += this.game.clockTick;
		if (this.idletime >= 2) {
			this.state = 1;
			this.idletime = 0;
			if (this.facing == 1) {
				this.speed = 150;
			} else {
				this.speed = -150;
			}
		}
		// collision
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB) /*&& this.state !== 3*/) {
				if (entity instanceof Knight) {
					//this.state = 3;
					this.speed = 0;
					if (this.animation[1].currentFrame() == 2) {
						if (this.facing == 1) {
							//this.attackBB = new AttackBox(this.game, this, this.x + 100, this.y, 122, 185, 2, 3, this.damage);
						}
						else {
							//this.attackBB = new AttackBox(this.game, this, this.x - 123, this.y, 122, 185, 2, 3, this.damage);
						}
					}
					if (this.state == 1) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 95, 160, 2, 3, this.damage);
					} else if (this.state == 2) {
						this.attackBB = new AttackBox(this.game, this, this.x, this.y + 70, 95, 90, 2, 3, this.damage);
					}
					//this.attackBB = new AttackBox(this.game, this, this.x, this.y + 10, 95, 160, 2, 3, this.damage);
					console.log("slime has collided")
				}
				if (entity instanceof Tile) {
					if ((that.lastBB.right) <= entity.BB.left) {
						this.facing = -1;
						this.speed = -150;
					}
					else if ((that.lastBB.left) >= entity.BB.right) {
						this.facing = 1;
						this.speed = 150;

					}
				};
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 2;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 0;
			} else {
				this.speed = 0;
			}
		};
		this.updateBB();
		if (this.health <= 0) {
			this.speed = 0;
			this.state = 3;
			this.deathtime += this.game.clockTick;
			if (this.deathtime >= .7) {
				this.dead = true;
			}
		}
	};
	draw(ctx) {
		if (PARAMS.DEBUG) {
			// hitbox
			ctx.strokeStyle = "red";
			if (this.state == 1) {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 10) - this.game.camera.y, 95, 160);
			} else {
				ctx.strokeRect(this.x - this.game.camera.x, (this.y + 70) - this.game.camera.y, 95, 90);
			}	
		}
		
		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		var stateMod = 0;
		if (this.state == 0) stateMod = 60;
		else if (this.state == 1) stateMod = -10;
		else if (this.state == 2) stateMod = 70;
		else if (this.state == 3) stateMod = 60;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing) - (this.facing * this.game.camera.x), this.y - this.game.camera.y + stateMod, 6)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95) - (this.facing * this.game.camera.x), this.y - this.game.camera.y + stateMod, 6)
			}
		} else {
			this.removeFromWorld = true;
			console.log("slime is ded");
		}
		ctx.restore();
	};
};