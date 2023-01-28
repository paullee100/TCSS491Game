class Tile {
    constructor(game, image, x, y, width, height) {
        this.game = game
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.BB = new BoundingBox(this.x, this.y+10, width, height);
    };

    update() {
        
    };

    draw(ctx) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x- this.game.camera.x, this.y + 10 - this.game.camera.y, this.width, this.height);
        ctx.drawImage(ASSET_MANAGER.getAsset(this.image), this.x- this.game.camera.x, this.y - this.game.camera.y, this.width, this.height);
    };
};