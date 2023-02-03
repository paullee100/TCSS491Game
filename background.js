class Background1{
    constructor(){
        // Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./tileset/forest/BG1.png")
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0 ,1024, 768,);
    };
}

class Background2{
    constructor(){
        // Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./tileset/forest/BG2.png")
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0 ,1024, 768,);
    };
}

class Background3{
    constructor(){
        // Object.assign(this, {game});
        this.spritesheet = ASSET_MANAGER.getAsset("./tileset/forest/BG3.png")
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, 0, 0 ,1024, 768,);
    };
}

class Tree{
    constructor(game, x,y){
        Object.assign(this, {game,x,y});
        this.spritesheet = ASSET_MANAGER.getAsset("./tileset/forest/foreground0.png")
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, this.x- this.game.camera.x, this.y - this.game.camera.y ,448, 448,);
    };
}

class Bush{
    constructor(game,x,y){
        Object.assign(this, {game,x,y});
        this.spritesheet = ASSET_MANAGER.getAsset("./tileset/forest/sprite_0.png")
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(this.spritesheet, this.x- this.game.camera.x, this.y  - this.game.camera.y,224, 448,);
    };
}
