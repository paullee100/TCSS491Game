class Skeleton {
	constructor(game) {
		Object.assign(this, {game});
		this.x = 100;
		this.y = 100;
		this.game.Skeleton = this;
		// (spritesheet, XStart, YStart, width, height, frameCount, frameDuration)
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/Skeletonwalking.png"), 71, 0, 71, 75, 8, 0.1, 1, false, true);
		this.dead = false;
		this.updateBB();
	};

	updateBB() {
		this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 100, 185);
	}

	update() {

	};

	draw(ctx) {
		ctx.strokeStyle = "green";
		ctx.strokeRect(this.x, this.y, 100, 185);
		if (this.dead == false) {
			this.animator.drawFrame(this.game.clockTick, ctx, 100, 100, 2.5);
		} else {
			this.removeFromWorld = true;
			console.log("is ded");
		}
		//ctx.drawImage(ASSET_MANAGER.getAsset("./Skeletonwalking.png"), 0, 0);
	};
}