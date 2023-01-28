class Tile {
    constructor(game,image, x, y, width, height) {
        Object.assign(this, { game,image, x, y, width, height });
        this.BB = new BoundingBox(this.x, this.y+10, width, height);
    };

    update() {
        
    };

    draw(ctx) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x- this.game.camera.x, this.y + 10, this.width, this.height);
        ctx.drawImage(ASSET_MANAGER.getAsset(this.image), this.x- this.game.camera.x, this.y, this.width, this.height);
    };
};