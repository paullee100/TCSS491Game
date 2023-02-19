class Potion {
    constructor(game, x, y) {
        console.log('potion being made')
        Object.assign(this, { game, x, y });
        this.velocity = 300;
        this.spritesheet = [];
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/Items/medium_potion.png"));
        this.updateBB();
    }
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 20, this.y + 30, 35, 70)
    }
    update() {
        this.updateBB();
        this.y += this.velocity * this.game.clockTick;
		var that = this;
		this.game.entities.forEach(entity => {
			if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Tile) {
                    if ((that.lastBB.bottom) <= entity.BB.top) { //landing
                        console.log('potion landed')
                        that.velocity = 0;
                        that.y = entity.y - 100;
                    }
				};
			};
		});
    };
    draw(ctx) {
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = "red";
            ctx.strokeRect(this.x + 20 - this.game.camera.x, this.y + 30 - this.game.camera.y, 35, 70);
        }
        ctx.drawImage(this.spritesheet[0], this.x - this.game.camera.x, this.y - this.game.camera.y)
    };
}