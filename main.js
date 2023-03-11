const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
//main screen
ASSET_MANAGER.queueDownload("./tileset/title/title_950_164.png")
ASSET_MANAGER.queueDownload("./tileset/title/start_455_127.png")
ASSET_MANAGER.queueDownload("./tileset/title/startSelected.png");
ASSET_MANAGER.queueDownload("./tileset/title/controls.png");
ASSET_MANAGER.queueDownload("./tileset/title/controlsSelected.png");

// level select
ASSET_MANAGER.queueDownload("./tileset/level_select/levelOne.png");
ASSET_MANAGER.queueDownload("./tileset/level_select/levelOneSelected.png");
ASSET_MANAGER.queueDownload("./tileset/level_select/levelTwo.png");
ASSET_MANAGER.queueDownload("./tileset/level_select/levelTwoSelected.png");
ASSET_MANAGER.queueDownload("./tileset/level_select/boss.png");
ASSET_MANAGER.queueDownload("./tileset/level_select/bossSelected.png");
ASSET_MANAGER.queueDownload("./tileset/title/back.png");
ASSET_MANAGER.queueDownload("./tileset/title/backSelected.png");

// controls
ASSET_MANAGER.queueDownload("./tileset/controls/controls.png");

//gameover
ASSET_MANAGER.queueDownload("./tileset/title/gameover_865_183.png");
ASSET_MANAGER.queueDownload("./tileset/title/play_again.png");

// beat level
ASSET_MANAGER.queueDownload("./tileset/title/continue.png");
ASSET_MANAGER.queueDownload("./tileset/title/beat_game.png");
ASSET_MANAGER.queueDownload("./tileset/title/win.png");
//tbc
ASSET_MANAGER.queueDownload("./tileset/title/tbc_856_109.png")
ASSET_MANAGER.queueDownload("./tileset/title/tbc_1024_127.png")
//tiles forest
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
//tiles throne
ASSET_MANAGER.queueDownload("./tileset/throne/throne_00.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_01.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_02.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_03.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_04.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_05.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_06.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_07.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_08.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_09.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_10.png")
ASSET_MANAGER.queueDownload("./tileset/throne/throne_11.png")
//tiles swamp
ASSET_MANAGER.queueDownload("./tileset/swamp/Background.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_00.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_01.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_02.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_06.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_07.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_08.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_10.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_11.png")
ASSET_MANAGER.queueDownload("./tileset/swamp/sprite_12.png")
//tiles castle
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle00.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle01.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle02.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle03.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle04.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle05.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle06.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle07.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle08.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle09.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle10.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle11.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle12.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle13.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle14.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle15.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle28.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle29.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle34.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle35.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle36.png")
ASSET_MANAGER.queueDownload("./tileset/castle/sprite_castle40.png")
ASSET_MANAGER.queueDownload("./tileset/castle/castle_background.png")
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
ASSET_MANAGER.queueDownload("./sprites/Chest/chest_opened.png");
ASSET_MANAGER.queueDownload("./sprites/Chest/mimic_idle.png");
ASSET_MANAGER.queueDownload("./sprites/Chest/mimic_attack.png");

// enemy
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonhurt.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeleton.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonwalking.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletonattack.png");
ASSET_MANAGER.queueDownload("./sprites/Skeleton/Skeletondeath.png");

ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Cyclops/Cyclops_Death.png");

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

ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Damage.png");
ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Shoot.png");
ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Attack.png");
ASSET_MANAGER.queueDownload("./sprites/Elf/Elf_Arrow.png");
// boss
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Attack1.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Attack2.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Attack3.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Pellet.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Explosion.png");
ASSET_MANAGER.queueDownload("./sprites/Lich/Lich_Fire.png");

ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Walking.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee1.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee2.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Melee3.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range1.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range2.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Range3.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Death.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_Lightning.png");
ASSET_MANAGER.queueDownload("./sprites/Titan/Titan_BigLightning.png");

ASSET_MANAGER.queueDownload("./sprites/Dragon/Dragon_Idle.png");
ASSET_MANAGER.queueDownload("./sprites/Dragon/Dragon_Flight.png");
ASSET_MANAGER.queueDownload("./sprites/Dragon/Dragon_PreAttack.png");
ASSET_MANAGER.queueDownload("./sprites/Dragon/Dragon_Attack.png");
ASSET_MANAGER.queueDownload("./sprites/Dragon/Dragon_Death.png");

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
ASSET_MANAGER.queueDownload("./sounds/chest_open.mp3");
ASSET_MANAGER.queueDownload("./sounds/mimic_attack.mp3");
ASSET_MANAGER.queueDownload("./sounds/dragon_fire.mp3");
ASSET_MANAGER.queueDownload("./sounds/dragon_flight.mp3");

// music
ASSET_MANAGER.queueDownload("./music/forsaken_forest.mp3"); //greenpath from hollow knight
ASSET_MANAGER.queueDownload("./music/ancient_ruins.mp3"); //crystal peak from hollow knight
ASSET_MANAGER.queueDownload("./music/dragontheme.mp3"); // flamelurker from demon's souls (2009)

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
