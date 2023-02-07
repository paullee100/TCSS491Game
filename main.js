const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
//background forest
ASSET_MANAGER.queueDownload("./tileset/forest/BG1.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG2.png")
ASSET_MANAGER.queueDownload("./tileset/forest/BG3.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles00.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles01.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles02.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles03.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles04.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles05.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles06.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles07.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles08.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles10.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles26.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles27.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles28.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles34.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles35.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles36.png")
ASSET_MANAGER.queueDownload("./tileset/forest/forest_tiles41.png")
ASSET_MANAGER.queueDownload("./tileset/forest/foreground0.png")
ASSET_MANAGER.queueDownload("./tileset/forest/sprite_0.png")
ASSET_MANAGER.queueDownload("./tileset/forest/sprite_1.png")
// knight spritesheet
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Run.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Roll.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Fall.png");

// enemy
ASSET_MANAGER.queueDownload("./sprites/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonwalking.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletonattack.png");
ASSET_MANAGER.queueDownload("./sprites/Skeletondeath.png");

ASSET_MANAGER.queueDownload("./sprites/Cyclops_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Death.png");

// boss
ASSET_MANAGER.queueDownload("./sprites/Lich_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Pellet.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Explosion.png");
ASSET_MANAGER.queueDownload("./sprites/Lich_Fire.png");

// sound effects
ASSET_MANAGER.queueDownload("./sounds/knight_attack1.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack2.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack_hit.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_blocked_attack.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_parry.mp3");

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
