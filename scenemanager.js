class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles00.png", -5, 715 ,64, 64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles00.png", -5, 715 ,64, 64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 59, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 123, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 187, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 251, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 315, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 379, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 443, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 507, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 571, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 635, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 699, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 763, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 827, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 891, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles02.png", 955, 715 ,64,64));
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
    };

};