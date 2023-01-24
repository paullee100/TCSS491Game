class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        this.game.addEntity(this.knight);
        this.game.addEntity(new Skeleton(this.game));
        this.game.addEntity(new Tree(55, 270));
        this.game.addEntity(new Bush(655, 270));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles00.png", -5, 715 ,64, 64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles00.png", -5, 715 ,64, 64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 59, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 123, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 187, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 251, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 315, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 379, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 379, 779 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 443, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 443, 651 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 507, 651 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 507, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 571, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 635, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 699, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 763, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 827, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 891, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 955, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 1019, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 1083, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles01.png", 1147, 715 ,64,64));
        this.game.addEntity(new Tile("./tileset/forest/forest_tiles02.png", 1211, 715 ,64,64));
        this.game.addEntity(new Background3());
        this.game.addEntity(new Background2());
        this.game.addEntity(new Background1());
    };

    update() {
        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        this.x = this.knight.position.x - midpoint; 
    };

    draw(ctx) {
       
    };

};