class Skeleton {
	constructor(game) {
		Object.assign(this, { game });
		this.x = 100;
		this.y = 540;
		this.speed = 100;
		this.facing = 1; // right = 1 left = -1
		this.state = 0; // walking = 0, attack = 1, dead = 2,
		this.game.Skeleton = this;

		this.spritesheet = [];
		this.animation = [];

		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeletonwalking.png"));
		this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Skeletonattack.png"));
		//spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
		this.animation.push(new Animator(this.spritesheet[0], 71, 0, 71, 75, 8, 0.1, 1, false, true));
		this.animation.push(new Animator(this.spritesheet[1], 0, 0, 95, 90, 4, 0.2, 1, false, false));

		// (spritesheet, XStart, YStart, width, height, frameCount, frameDuration)
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Skeletonwalking.png"), 71, 0, 71, 75, 8, 0.1, 1, false, true);
		//this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Skeletonattack2.png"), 0, 0, 95, 90, 4, 0.2, 1, false, true);

		this.dead = false;
		this.updateBB();
	};

	updateBB() {
		this.lastBB = this.BB;
		this.BB = new BoundingBox(this.x, this.y, 100, 185);
	}

	update() {
		this.x += this.speed * this.game.clockTick;
		// walking path
		if (this.x > 500) {
			this.speed = -100;
			this.facing = -1;
			//this.state = 0;
		} else if (this.x < 100) {
			this.speed = 100;
			this.facing = 1;
			//this.state = 0;
		}
		this.updateBB();
		 // collisions
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB)) {
				if (entity instanceof Knight) {
					this.state = 1;
					this.speed = 0;
					console.log("skeleton has collided")
				} else {
					
				};
			};
		});
		if (this.animation[this.state].isDone()) {
			var tempState = this.state;
			this.state = 0;
			this.animation[tempState].elapsedTime = 0;
			if (this.facing == 1) {
				this.speed = 100;
			} else {
				this.speed = -100;
			}
		};
	};

	draw(ctx) {
		//hit box
		ctx.strokeStyle = "green";
		ctx.strokeRect(this.x- this.game.camera.x, this.y, 100, 185);

		ctx.strokeStyle = "red";
		ctx.strokeRect(100- this.game.camera.x, this.y, 500, 185);

		if (this.facing == -1) {
			ctx.save()
			ctx.scale(-1, 1)
		} else if (this.facing == 1) {
			ctx.save()
			ctx.scale(1, 1)
		}
		var stateMod = 0;
		if (this.state == 0) stateMod = 0;
		else if (this.state == 1) stateMod = -48;
		else if (this.state == 2) stateMod = 0;
		else if (this.state == 3) stateMod = 0;
		if (this.dead == false) {
			if (this.facing == 1) {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing)- this.game.camera.x, 540 + stateMod, 2.5)
			} else {
				this.animation[this.state].drawFrame(this.game.clockTick, ctx, (this.x * this.facing - 95)- this.game.camera.x, 540 + stateMod, 2.5)
			}

			//this.animator.drawFrame(this.game.clockTick, ctx, this.x, 540, 2.5);
		} else {
			this.removeFromWorld = true;
			console.log("is ded");
		}

		ctx.restore();

		//ctx.drawImage(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 0, 0);
	};
}