const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
//background forest
ASSET_MANAGER.queueDownload("./tileset/forest/BG1.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG2.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG3.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles00.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles01.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles02.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles26.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles27.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles28.png")
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
ASSET_MANAGER.queueDownload("./sprites/Knight_Fall.png");

// enemies
ASSET_MANAGER.queueDownload("./sprites/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonwalking.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonattack.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletondeath.png");

ASSET_MANAGER.queueDownload("./sprites/Green_Slime_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Green_Slime_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Green_Slime_Jump2.png"); 

// boss
ASSET_MANAGER.queueDownload("./sprites/Lich_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Death.png");

// sound effects
ASSET_MANAGER.queueDownload("./sounds/knight_attack1.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack2.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack_hit.mp3");

ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
	ctx.imageSmoothingEnabled = false;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
