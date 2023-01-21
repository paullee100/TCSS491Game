const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
//background forest
ASSET_MANAGER.queueDownload("./tileset/forest/BG1.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG2.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG3.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles00.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles01.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles02.png")
ASSET_MANAGER.queueDownload("./tileset/forest/foreground0.png")
ASSET_MANAGER.queueDownload("./tileset/forest/sprite_0.png")
// spritesheet
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Run.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Roll.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Death.png");

ASSET_MANAGER.queueDownload("./sprites/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonwalking.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);
	gameEngine.addEntity(new Skeleton(gameEngine));
	gameEngine.addEntity(new Knight(gameEngine));
	gameEngine.addEntity(new Background());

	gameEngine.start();
});
