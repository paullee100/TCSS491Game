class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
    };

    update() {

    };

    draw(ctx) {
        new Tile("./tileset/forest/forest_tiles00.png", -5, 715 ,64, 64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 59, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 123, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 187, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 251, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 315, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 379, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 443, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 507, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 571, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 635, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 699, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 763, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 827, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles01.png", 891, 715 ,64,64).draw(ctx);
        new Tile("./tileset/forest/forest_tiles02.png", 955, 715 ,64,64).draw(ctx);
        /*
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 187, 715 ,64,64), 187, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 251, 715 ,64,64), 251, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 315, 715 ,64,64), 315, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 379, 715 ,64,64), 379, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 443, 715 ,64,64), 443, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 507, 715 ,64,64), 507, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 571, 715 ,64,64), 571, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 635, 715 ,64,64), 635, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 699, 715 ,64,64), 699, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 763, 715 ,64,64), 763, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 827, 715 ,64,64), 827, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles01.png", 891, 715 ,64,64), 891, 715);
        ctx.drawImage(new Tile("./tileset/forest/forest_tiles02.png", 955, 715 ,64,64), 955, 715); */
    };
};