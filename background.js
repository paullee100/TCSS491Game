class Background{
    constructor(){

    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG1.png"), 0, 0 ,1024, 768);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG2.png"), 0, 0 ,1024, 768);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG3.png"), 0, 0 ,1024, 768);
    }
}