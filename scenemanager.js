class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        this.loadLevel(1, 9 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, false, true);



        this.game.addEntity(this.knight);
        this.game.addEntity(new Lich(this.game, 35*PARAMS.BLOCKWIDTH, (390/64)*PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Skeleton(this.game, 5 * PARAMS.BLOCKWIDTH, (540 / 64) * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Slime(this.game, 14 * PARAMS.BLOCKWIDTH, (400 / 64) * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Tree(this.game, 55, 4 * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Bush(this.game, 655, 4 * PARAMS.BLOCKWIDTH));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles00.png", 0*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64, 64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1*PARAMS.BLOCKWIDTH, 11* PARAMS.BLOCKWIDTH ,64,64));

        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 1*PARAMS.BLOCKWIDTH, 10* PARAMS.BLOCKWIDTH,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 2*PARAMS.BLOCKWIDTH, 10* PARAMS.BLOCKWIDTH,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 3*PARAMS.BLOCKWIDTH, 10* PARAMS.BLOCKWIDTH,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles01.png", 4*PARAMS.BLOCKWIDTH, 10* PARAMS.BLOCKWIDTH,64,64));

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
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles26.png", 23*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 24*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 25*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 26*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 27*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 28*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 29*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 30*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 31*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 32*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 33*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 34*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 35*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 36*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 37*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 38*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 39*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 40*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 41*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 42*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 43*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 44*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 45*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 46*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 47*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 48*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles27.png", 49*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
        this.game.addEntity(new Tile(this.game, "./tileset/forest/forest_tiles28.png", 50*PARAMS.BLOCKWIDTH, 11 * PARAMS.BLOCKWIDTH ,64,64));
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