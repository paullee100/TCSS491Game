class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        this.loadLevel(1, 34.375 * PARAMS.BLOCKWIDTH, 8.49609375 * PARAMS.BLOCKWIDTH, false, true);



        this.game.addEntity(this.knight);
        this.game.addEntity(new Lich(this.game, 300, 390));
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

    loadLevel(level, x, y, transition, title) {
        this.title = title;
        this.level = level;
        //this.clearEntities();
        x = 0;
        this.knight.position.x = x;
        this.knight.position.y = y;

    };

    update() {
        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        this.x = this.knight.position.x - midpoint; 
    };

    draw(ctx) {
       
    };

};