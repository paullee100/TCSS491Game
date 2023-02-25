class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.potion = 0;
        this.bomb = 0;
        this.knife = 0;
        this.x = 0;
        this.title = true;
        this.over = false;
        this.loadLevel(Title, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, true);

        //level is completed successfully: this.levelclear == true
        this.levelclear = false;

    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
    clearEnemyEntities() {
        this.game.entities.forEach(function (entity) {
            if(entity instanceof Skeleton){
                entity.removeFromWorld = true;
            }
            if(entity instanceof Slime){
                entity.removeFromWorld = true;
            }
        });
    };
    loadLevel(level, xp, yp, transition, title) {
        this.title = title;
        this.level = level;
        this.clearEntities();
        //x = 0;
        this.knight.position.x = xp;
        this.knight.position.y = yp;
        if(!this.title && !this.over){// no title     
            this.game.addEntity(this.knight);
            
        }
        
        
        if(level.Music && !this.title) {
            ASSET_MANAGER.pauseBackgroundMusic();
            ASSET_MANAGER.playAsset(level.Music);
        }
        if(level.Potion){
            for (var i = 0; i < level.Potion.length; i++) {
                let potion = level.Potion[i];
                this.game.addEntity(new Potion(this.game, potion.x * PARAMS.BLOCKWIDTH, potion.y * PARAMS.BLOCKWIDTH));
            }
        }
        if(level.Bomb){
            for (var i = 0; i < level.Bomb.length; i++) {
                let bomb = level.Bomb[i];
                this.game.addEntity(new Bomb(this.game, bomb.x * PARAMS.BLOCKWIDTH, bomb.y * PARAMS.BLOCKWIDTH, 0));
            }
        }
        if(level.Mimic){
            for (var i = 0; i < level.Mimic.length; i++) {
                let mimic = level.Mimic[i];
                this.game.addEntity(new Mimic(this.game, mimic.x * PARAMS.BLOCKWIDTH, mimic.y * PARAMS.BLOCKWIDTH, mimic.facing));
            }
        }
        if(level.Chest){
            for (var i = 0; i < level.Chest.length; i++) {
                let chest = level.Chest[i];
                this.game.addEntity(new Chest(this.game, chest.x * PARAMS.BLOCKWIDTH, chest.y * PARAMS.BLOCKWIDTH, chest.facing, chest.item));
            }
        }
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
                this.game.addEntity(new Slime(this.game, slime.x * PARAMS.BLOCKWIDTH, slime.y * PARAMS.BLOCKWIDTH, slime.color));
            }
        }
        if (level.RedSlime) {
            for (var i = 0; i < level.RedSlime.length; i++) {
                let redslime = level.RedSlime[i];
                this.game.addEntity(new RedSlime(this.game, redslime.x * PARAMS.BLOCKWIDTH, redslime.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.YellowSlime) {
            for (var i = 0; i < level.YellowSlime.length; i++) {
                let yellowslime = level.YellowSlime[i];
                this.game.addEntity(new YellowSlime(this.game, yellowslime.x * PARAMS.BLOCKWIDTH, yellowslime.y * PARAMS.BLOCKWIDTH));
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

    updateAudio() {
        let mute = document.getElementById("mute").checked;
        let volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        if(this.title && this.game.click){
            this.title = false;
            this.loadLevel(levelOne, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
            if (this.game.click != null) this.game.click = null; 
        }
        if(!this.title && this.knight.dead === true){
            this.over = true;
            this.loadLevel(GameOver, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
        }
        if(!this.title && this.levelclear === true){
            this.clearEnemyEntities();
        }

        if (this.levelclear && this.game.click) {
            this.loadnextlevel = false;
            this.levelclear = false;
            this.knight = new Knight(this.game);
            if (this.game.click != null) this.game.click = null;
            this.loadLevel(Title, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, true);
        }

        if(this.over && this.game.click) {
            this.over = false;
            this.knight = new Knight(this.game);
            if (this.game.click != null) this.game.click = null;
            this.loadLevel(Title, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, true);
        }
        this.updateAudio();

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

        if(this.over){
            //ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/gameover_883_201.png") , 1.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 883, 201);
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/gameover_865_183.png"), 1 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 865, 183);
            this.bomb = 0;
            this.potion = 0;
        }
        if(this.levelclear){
            //ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/tbc_1024_127.png") , 1.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 883, 201);
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/tbc_856_109.png") , 1 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 865, 183);
        }
        if(!this.title && !this.over){
            var ratio = this.knight.health / this.knight.maxhealth;
            ctx.strokeStyle = "Black";
            ctx.fillStyle = ratio < 0.2 ? "Red" : ratio < 0.5 ? "Yellow" : "Green";
            if(this.knight.health>0){
                ctx.fillRect(0.5*PARAMS.BLOCKWIDTH, 0.5*PARAMS.BLOCKWIDTH, 5.5 * PARAMS.BLOCKWIDTH * ratio, 0.5 *PARAMS.BLOCKWIDTH);
            }
            ctx.strokeRect(0.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH, 5.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH);

            ctx.fillStyle = "White";
            ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/Items/medium_potion.png"), 12 * PARAMS.BLOCKWIDTH, - 22)
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/Items/medium_bomb.png"), 14 * PARAMS.BLOCKWIDTH, .15 * PARAMS.BLOCKWIDTH)
            ctx.fillText("x" + this.potion, 13 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
            ctx.fillText("x" + this.bomb, 15 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        }
    }

};