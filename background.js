class Background{
    constructor(){

    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG1.png"), 0, 0 ,1024, 768);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG2.png"), 0, 0 ,1024, 768);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/BG3.png"), 0, 0 ,1024, 768);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles00.png"), -5, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 59, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 123, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 187, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 251, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 315, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 379, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 443, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 507, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 571, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 635, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 699, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 763, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 827, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles01.png"), 891, 715 ,64,64);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/forest_tiles02.png"), 955, 715 ,64,64);
        //decor
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/foreground0.png"), 55, 270 ,448,448);
        ctx.drawImage(ASSET_MANAGER.getAsset("./tileset/forest/sprite_0.png"), 655, 270 ,224,448);
    }
}