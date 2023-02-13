class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.x = 0;
        this.title = true;
        this.loadLevel(Title, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, true);

    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
    loadLevel(level, xp, yp, transition, title) {
        this.title = title;
        this.level = level;
        this.clearEntities();
        //x = 0;
        this.knight.position.x = xp;
        this.knight.position.y = yp;
        if(!this.title){// no title     
            this.game.addEntity(this.knight);
            
        }
        
        
        //ASSET_MANAGER.playAsset("./music/forsaken_forest.mp3");
        if(level.Lich){
            for (var i = 0; i < level.Lich.length; i++) {
                let lich = level.Lich[i];
                this.game.addEntity(new Lich(this.game, lich.x * PARAMS.BLOCKWIDTH, lich.y * PARAMS.BLOCKWIDTH));
            }
        }

        if(level.Skeleton){
            for (var i = 0; i < level.Skeleton.length; i++) {
                let skeleton = level.Skeleton[i];
                this.game.addEntity(new Skeleton(this.game, skeleton.x * PARAMS.BLOCKWIDTH, skeleton.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.Slime) {
            for (var i = 0; i < level.Slime.length; i++) {
                let slime = level.Slime[i];
                this.game.addEntity(new Slime(this.game, slime.x * PARAMS.BLOCKWIDTH, slime.y * PARAMS.BLOCKWIDTH));
            }
        }
        if(level.Tree){
            for (var i = 0; i < level.Tree.length; i++) {
                let tree = level.Tree[i];
                this.game.addEntity(new Tree(this.game, tree.x * PARAMS.BLOCKWIDTH, tree.y * PARAMS.BLOCKWIDTH));
            }
        }

        if(level.Bush){
            for (var i = 0; i < level.Bush.length; i++) {
                let bush = level.Bush[i];
                this.game.addEntity(new Bush(this.game, bush.x * PARAMS.BLOCKWIDTH, bush.y * PARAMS.BLOCKWIDTH));
            }
        }

        if(level.Rock){
            for (var i = 0; i < level.Rock.length; i++) {
                let rock = level.Rock[i];
                this.game.addEntity(new Rock(this.game, rock.x * PARAMS.BLOCKWIDTH, rock.y * PARAMS.BLOCKWIDTH));
            }
        }

        if(level.Ground){
            for (var i = 0; i < level.Ground.length; i++) {
                let ground = level.Ground[i];
                for (var j = 0; j < ground.size; j++) {
                    if(ground.c){
                        this.game.addEntity(new TileClear(this.game, ground.sprite, (ground.x+j) * PARAMS.BLOCKWIDTH, ground.y * PARAMS.BLOCKWIDTH,64,64));
                    }else{
                        this.game.addEntity(new Tile(this.game, ground.sprite, (ground.x+j) * PARAMS.BLOCKWIDTH, ground.y * PARAMS.BLOCKWIDTH,64,64));
                    }
                    
                }
            }
        }

        //background
        this.game.addEntity(new Background3());
        this.game.addEntity(new Background2());
        this.game.addEntity(new Background1());

    };

    update() {
        if(this.title && this.game.click){
            this.title = false;
            this.loadLevel(levelOne, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
        }

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        //console.log("MMMMM " + midpoint);
        this.x = this.knight.position.x - midpoint;
        this.y = this.knight.position.y - midpoint + PARAMS.BLOCKWIDTH * 1;; 
    };

    draw(ctx) {
        if(this.title){
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/title_950_164.png") , 0.75 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 950, 164);
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/start_455_127.png") , 4.5 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 455, 127);
        }
    }

};