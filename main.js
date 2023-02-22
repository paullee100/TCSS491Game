const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
//main screen
ASSET_MANAGER.queueDownload("./tileset/title/title_950_164.png")
ASSET_MANAGER.queueDownload("./tileset/title/start_455_127.png")
//gameover
ASSET_MANAGER.queueDownload("./tileset/title/gameover_865_183.png")
//tbc
ASSET_MANAGER.queueDownload("./tileset/title/tbc_856_109.png")
ASSET_MANAGER.queueDownload("./tileset/title/tbc_1024_127.png")
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
ASSET_MANAGER.queueDownload("./sprites/Knight_Hit.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Block.png");
ASSET_MANAGER.queueDownload("./sprites/Knight_Parry.png");
// items
ASSET_MANAGER.queueDownload("./sprites/Items/medium_potion.png");
ASSET_MANAGER.queueDownload("./sprites/Items/medium_bomb.png");
ASSET_MANAGER.queueDownload("./sprites/Items/medium_bomb_detonation.png");
ASSET_MANAGER.queueDownload("./sprites/Items/medium_bomb_explosion.png");
ASSET_MANAGER.queueDownload("./sprites/Items/throwing_knife.png");

//chest
ASSET_MANAGER.queueDownload("./sprites/Chest/chest_closed.png");
ASSET_MANAGER.queueDownload("./sprites/Items/chest_opened.png");
ASSET_MANAGER.queueDownload("./sprites/Items/mimic_idle.png");
ASSET_MANAGER.queueDownload("./sprites/Items/mimic_attack.png");

// enemy
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonhurt.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonwalking.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonattack.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletondeath.png");

ASSET_MANAGER.queueDownload("./sprites/Cyclops_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops_Death.png");

ASSET_MANAGER.queueDownload("./sprites/Green/Green_Slime_Damage.png");
ASSET_MANAGER.queueDownload("./sprites/Green/Green_Slime_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Green/Green_Slime_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Green/Green_Slime_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Green/Green_Slime_Jump2.png");

ASSET_MANAGER.queueDownload("./sprites/Red/Red_Slime_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Red/Red_Slime_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Red/Red_Slime_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Red/Red_Slime_Damage.png");

ASSET_MANAGER.queueDownload("./sprites/Yellow/Yellow_Slime_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Yellow/Yellow_Slime_Jump.png");
ASSET_MANAGER.queueDownload("./sprites/Yellow/Yellow_Slime_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Yellow/Yellow_Slime_Damage.png");

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

ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee1.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee2.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee3.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range1.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range2.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range3.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Death.png");

// sound effects
ASSET_MANAGER.queueDownload("./sounds/knight_attack1.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack2.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_attack_hit.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_blocked_attack.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_parry.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_roll.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_step.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_jump.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_block.mp3");
ASSET_MANAGER.queueDownload("./sounds/knight_takehit.mp3");
ASSET_MANAGER.queueDownload("./sounds/heal.mp3");
ASSET_MANAGER.queueDownload("./sounds/bomb_explosion.mp3");
ASSET_MANAGER.queueDownload("./sounds/throwing_knife.mp3");

// music
ASSET_MANAGER.queueDownload("./music/forsaken_forest.mp3"); //greenpath from hollow knight

ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();

	ASSET_MANAGER.autoRepeat("./music/forsaken_forest.mp3");

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
