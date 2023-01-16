const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// spritesheet
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Run.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Idle.png");

ASSET_MANAGER.queueDownload("./sprites/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonwalking.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	gameEngine.addEntity(new Skeleton(gameEngine));
	gameEngine.addEntity(new Knight(gameEngine));

	gameEngine.start();
});
