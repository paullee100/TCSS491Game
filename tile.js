class Tile {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.BB = new BoundingBox(this.x, this.y, width, height);
    };

    update() {
        console.log(this.BB.top);
    };

    draw(ctx) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.strokeText(this.BB.top, 20, 20)
        ctx.drawImage(ASSET_MANAGER.getAsset(this.image), this.x, this.y, this.width, this.height);
    };
};