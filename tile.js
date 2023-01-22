class Tile {
    constructor(image, x, y, width, height) {
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
        ctx.strokeRect(this.x, this.y + 10, this.width, this.height);
        ctx.drawImage(ASSET_MANAGER.getAsset(this.image), this.x, this.y, this.width, this.height);
    };
};