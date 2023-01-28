class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        //this.loadLevel(1, 9 * PARAMS.BLOCKWIDTH, 8.49609375 * PARAMS.BLOCKWIDTH, false, true);
        this.loadLevel(1, 10 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, false, true);


        this.game.addEntity(this.knight);
        this.game.addEntity(new Lich(this.game, 300, 390));
        this.game.addEntity(new Skeleton(this.game));
        this.game.addEntity(new Tree(this.game, 55, 4 * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Bush(this.game, 655, 4 * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles00.png", 0*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64, 64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1*PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 2*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 3*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 4*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 5*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 6*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 7*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 8*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 9*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 10*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 11*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 12*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 13*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 14*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 15*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 16*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 17*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 18*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 19*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles02.png", 20*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
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
    };

    draw(ctx) {
       
    };

};