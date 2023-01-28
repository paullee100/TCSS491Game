class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        this.y = 0;
        this.loadLevel(1, 9 * PARAMS.BLOCKWIDTH, 8.49609375 * PARAMS.BLOCKWIDTH, false, true);



        this.game.addEntity(this.knight);
        this.game.addEntity(new Lich(this.game, 300, 390));
        this.game.addEntity(new Skeleton(this.game));
        this.game.addEntity(new Tree(this.game, 55, 270));
        this.game.addEntity(new Bush(this.game, 655, 270));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles00.png", -5 - this.x, 715 - this.y ,64, 64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles00.png", -5- this.x, 715- this.y ,64, 64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 59- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 123- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 187- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 251- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 315- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 379- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 379- this.x, 779- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 443- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 443- this.x, 651- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 507- this.x, 651 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 507- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 571- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 635- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 699- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 763- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 827- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 891- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 955- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1019- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1083- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1147- this.x, 715 - this.y,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles02.png", 1211- this.x, 715- this.y ,64,64));
        this.game.addEntity(new Background3());
        this.game.addEntity(new Background2());
        this.game.addEntity(new Background1());
    };

    loadLevel(level, xp, yp, transition, title) {
        this.title = title;
        this.level = level;
        //this.clearEntities();
        //x = 0;
        this.knight.position.x = xp;
        this.knight.position.y = yp;

    };

    update() {
        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        //console.log("MMMMM " + midpoint);
        this.x = this.knight.position.x - midpoint;
        this.y = this.knight.position.y - midpoint;
    };

    draw(ctx) {
       
    };

};