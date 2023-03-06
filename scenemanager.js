class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.knight = new Knight(game);
        this.potion = 0;
        this.bomb = 0;
        this.knife = 0;
        this.lichTrigger = false;
        this.x = 0;
        this.title = true;
        this.levelSelection = false;
        this.controlMenu = false;

        // checks if player defeat level before boss level is revealed
        this.levelComplete = {
            one: false,
            two: false
        };

        // used to determine if mouse is hovering over a specific button
        this.selection = {
            start: false,
            controls: false,
            levelOne: false,
            levelTwo: false,
            boss: false,
            back: false
        };

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
        this.lichTrigger = false;
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

        if (level.Dragon) {
            const dragon = level.Dragon[0];
            this.game.addEntity(new Dragon(this.game, dragon.x * PARAMS.BLOCKWIDTH, dragon.y * PARAMS.BLOCKWIDTH));
        }

        if (level.Titan) {
            const titan = level.Titan[0];
            this.game.addEntity(new Titan(this.game, titan.x * PARAMS.BLOCKWIDTH, titan.y * PARAMS.BLOCKWIDTH));
        }

        if (level.Elf) {
            for (var i = 0; i < level.Elf.length; i++) {
                let elf = level.Elf[i];
                this.game.addEntity(new Elf(this.game, elf.x * PARAMS.BLOCKWIDTH, elf.y * PARAMS.BLOCKWIDTH));
            }
        }
        if (level.Cyclops) {
            for (var i = 0; i < level.Cyclops.length; i++) {
                let cyclops = level.Cyclops[i];
                this.game.addEntity(new Cyclops(this.game, cyclops.x * PARAMS.BLOCKWIDTH, cyclops.y * PARAMS.BLOCKWIDTH));
            }
        }
        if(level.Skeleton){
            for (var i = 0; i < level.Skeleton.length; i++) {
                let skeleton = level.Skeleton[i];
                this.game.addEntity(new Skeleton(this.game, skeleton.x * PARAMS.BLOCKWIDTH, skeleton.y * PARAMS.BLOCKWIDTH, false));
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
        if(level.Chest){
            for (var i = 0; i < level.Chest.length; i++) {
                let chest = level.Chest[i];
                this.game.addEntity(new Chest(this.game, chest.x * PARAMS.BLOCKWIDTH, chest.y * PARAMS.BLOCKWIDTH, chest.facing, chest.item));
            }
        }
        if(level.Mimic){
            for (var i = 0; i < level.Mimic.length; i++) {
                let mimic = level.Mimic[i];
                this.game.addEntity(new Mimic(this.game, mimic.x * PARAMS.BLOCKWIDTH, mimic.y * PARAMS.BLOCKWIDTH, mimic.facing));
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
        if(level.Background){
            if(level.Background[0] === 3){
                this.game.addEntity(new Background3());
                this.game.addEntity(new Background2());
                this.game.addEntity(new Background1());
            }
            if(level.Background[0] === 1){
                this.game.addEntity(new Background1());
            }
            if(level.Background[0] === 4){
                this.game.addEntity(new Background4());
            }
            if(level.Background[0] === 5) {
                this.game.addEntity(new Background5());
            }
        }
    };

    updateAudio() {
        let mute = document.getElementById("mute").checked;
        let volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        if (this.title) {
            ASSET_MANAGER.pauseBackgroundMusic();
            // "Start" button
            if (this.game.mouse && this.game.mouse.y > 6 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 8 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 4.5 * PARAMS.BLOCKWIDTH && this.game.mouse.x < 12 * PARAMS.BLOCKWIDTH) {
                    this.selection.start = true;
                    if (this.selection.start && this.game.click){
                    this.title = false;
                    this.levelSelection = true;
                }
            // "Controls" button
            } else if (this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 11 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 4.5 * PARAMS.BLOCKWIDTH && this.game.mouse.x < 12 * PARAMS.BLOCKWIDTH) {
                    this.selection.controls = true;
                    if (this.selection.controls && this.game.click) {
                        this.title = false;
                        this.controlMenu = true;
                    }
            // mouse is not over "Start" and "Controls" button
            } else {
                this.selection.start = false;
                this.selection.controls = false;
                if (this.game.click != null) {
                    this.game.click = null;
                }
            }
        // level selection screen
        } else if (this.levelSelection) {
            // "levelOne" button
            if (!this.levelComplete.one && this.game.mouse && this.game.mouse.y > 1 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 2.8 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 4.5 * PARAMS.BLOCKWIDTH && this.game.mouse.x < 11.5 * PARAMS.BLOCKWIDTH) {
                this.selection.levelOne = true;
                if (this.selection.levelOne && this.game.click) {
                    this.levelSelection = false;
                    this.loadLevel(levelOne, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
                    if (this.game.click != null) this.game.click = null;
                }
            // "levelTwo" button
            } else if (!this.levelComplete.two && this.game.mouse && this.game.mouse.y > 9 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 10.8 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 4.5 * PARAMS.BLOCKWIDTH && this.game.mouse.x < 11.5 * PARAMS.BLOCKWIDTH) {
                this.selection.levelTwo = true;
                if (this.selection.levelTwo && this.game.click) {
                    this.levelSelection = false;
                    this.loadLevel(levelTwo, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
                    //this.loadLevel(levelThree, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
                    if (this.game.click != null) this.game.click = null;
                }
            // "back" button
            } else if (this.game.mouse && this.game.mouse.y > 0 && this.game.mouse.y < 1 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 0 && this.game.mouse.x < 3.6 * PARAMS.BLOCKWIDTH) {
                this.selection.back = true;
                if (this.selection.back && this.game.click) {
                    this.title = true;
                    this.levelSelection = false;
                }
            // "boss" button
            } else {
                this.selection.levelOne = false;
                this.selection.levelTwo = false;
                this.selection.boss = false;
                this.selection.back = false;
                if (this.game.click != null) {
                    this.game.click = null;
                }
            }
            
            // when the player defeat level one and level two, boss will appear
            if (this.levelComplete.one && this.levelComplete.two) {
                if (this.game.mouse && this.game.mouse.y > 5 * PARAMS.BLOCKWIDTH && this.game.mouse.y < 6.8 * PARAMS.BLOCKWIDTH
                    && this.game.mouse.x > 6 * PARAMS.BLOCKWIDTH && this.game.mouse.x < 9.8 * PARAMS.BLOCKWIDTH) {
                    this.selection.boss = true;
                    if (this.selection.boss && this.game.click) {
                        this.levelSelection = false;
                    }
                }
            }
        // controls screen
        } else if (this.controlMenu) {
            // TODO: CONTROLS
            // hovers over "back" button
            if (this.game.mouse && this.game.mouse.y > 0 && this.game.mouse.y < 1 * PARAMS.BLOCKWIDTH
                && this.game.mouse.x > 0 && this.game.mouse.x < 3.6 * PARAMS.BLOCKWIDTH) {
                this.selection.back = true;
                if (this.selection.back && this.game.click) {
                    this.title = true;
                    this.controlMenu = false;
                }
            } else {
                this.selection.back = false;
                if (this.game.click != null) {
                    this.game.click = null;
                }
            }
        }

        // when player dies
        if(!this.title && this.knight.dead === true){
            this.over = true;
            // this.loadLevel(GameOver, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, false);
        }

        if(!this.title && this.levelclear === true){
            this.clearEnemyEntities();
            this.tbc = true;
        }

        // player beat the level
        if (this.levelclear && this.game.click) {
            this.tbc = false;
            this.levelclear = false;
            this.levelSelection = true;
            this.levelComplete.one = true;
            this.knight = new Knight(this.game);
            if (this.game.click != null) this.game.click = null;
        }

        // game over screen
        if(this.over && this.game.click) {
            this.over = false;
            this.title = true;
            this.knight = new Knight(this.game);
            if (this.game.click != null) this.game.click = null;
            this.loadLevel(Title, 6 * PARAMS.BLOCKWIDTH, 8.25 * PARAMS.BLOCKWIDTH, false, true);
        }

        // summons the Lich after crossing a specific x-coordinate
        if (this.knight.position.x >= 25+(25*4) * PARAMS.BLOCKWIDTH && !this.lichTrigger) {
            console.log(this.x);
            if (levelOne.Lich) {
                let lich = levelOne.Lich[0];
                this.game.addEntitySpecific(new Lich(this.game, lich.x * PARAMS.BLOCKWIDTH, lich.y * PARAMS.BLOCKWIDTH), 1);
                this.lichTrigger = true;
            }
        }
        this.updateAudio();

        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;
        this.x = this.knight.position.x - midpoint;
        this.y = this.knight.position.y - midpoint + PARAMS.BLOCKWIDTH * 1;; 
    };

    draw(ctx) {
        // Title
        if(this.title){
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/title_950_164.png") , 0.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 950, 164);

            if (this.selection.start) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/startSelected.png"), 4.5 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 455, 127);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/start_455_127.png") , 4.5 * PARAMS.BLOCKWIDTH, 6 * PARAMS.BLOCKWIDTH, 455, 127);
            }

            if (this.selection.controls) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/controlsSelected.png"), 4.5 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 455, 127);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/controls.png"), 4.5 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 455, 127);        
            }
        }

        // After selecting "Start", display the levels
        if (!this.title && this.levelSelection) {
            if (this.selection.back) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/backSelected.png"), 0 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 255, 64);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/back.png"), 0 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 255, 64);
            }

            if (this.selection.levelOne) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/levelOneSelected.png"), 4.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 455, 127);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/levelOne.png"), 4.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 455, 127);
            }

            if (this.selection.levelTwo) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/levelTwoSelected.png"), 4.5 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 455, 127);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/levelTwo.png"), 4.5 * PARAMS.BLOCKWIDTH, 9 * PARAMS.BLOCKWIDTH, 455, 127);
            }

            if (this.levelComplete.one && this.levelComplete.two) {
                if (this.selection.boss) {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/bossSelected.png"), 6 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH, 255, 127);
                } else {
                    ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/level_select/boss.png"), 6 * PARAMS.BLOCKWIDTH, 5 * PARAMS.BLOCKWIDTH, 255, 127);
                }
            }
        }

        // After selecting "controls", display the controls
        if (!this.title && this.controlMenu) {
            if (this.selection.back) {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/backSelected.png"), 0 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 255, 64);
            } else {
                ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/back.png"), 0 * PARAMS.BLOCKWIDTH, 0 * PARAMS.BLOCKWIDTH, 255, 64);
            }
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/controls/controls.png"), 1.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH, 865, 725);
        }

        if(this.over){
            //ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/gameover_883_201.png") , 1.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 883, 201);
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/gameover_865_183.png"), 1 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 865, 183);
            this.bomb = 0;
            this.potion = 0;
            this.knife = 0;
        }
        if(this.tbc){
            //ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/tbc_1024_127.png") , 1.5 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 883, 201);
            ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/title/tbc_856_109.png") , 1 * PARAMS.BLOCKWIDTH, 2 * PARAMS.BLOCKWIDTH, 865, 183);
        }
        if(!this.title && !this.over && !this.levelSelection && !this.controlMenu) {
            var ratio = this.knight.health / this.knight.maxhealth;
            ctx.strokeStyle = "Black";
            ctx.fillStyle = ratio < 0.2 ? "Red" : ratio < 0.5 ? "Yellow" : "Green";
            if(this.knight.health>0){
                ctx.fillRect(0.5*PARAMS.BLOCKWIDTH, 0.5*PARAMS.BLOCKWIDTH, 5.5 * PARAMS.BLOCKWIDTH * ratio, 0.5 *PARAMS.BLOCKWIDTH);
            }
            ctx.strokeRect(0.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH, 5.5 * PARAMS.BLOCKWIDTH, 0.5 * PARAMS.BLOCKWIDTH);

            ctx.fillStyle = "White";
            ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/Items/throwing_knife.png"), 14 * PARAMS.BLOCKWIDTH, 35, 60, 40);
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/Items/medium_potion.png"), 10 * PARAMS.BLOCKWIDTH, - 22);
            ctx.drawImage(ASSET_MANAGER.getAsset("./sprites/Items/medium_bomb.png"), 12 * PARAMS.BLOCKWIDTH, .15 * PARAMS.BLOCKWIDTH);
            ctx.fillText("x" + this.potion, 11 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
            ctx.fillText("x" + this.knife, 15 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
            ctx.fillText("x" + this.bomb, 13 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        }
    }

};