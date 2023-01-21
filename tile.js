class Tile {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.BB = new BoundingBox(this.x - 300, this.y + 10, 192, 205);
    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset(this.image), this.x, this.y);
    };
};