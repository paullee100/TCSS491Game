var Title={
    // Tree: [{x:(55/64),y:4}],
    // Bush: [{x:(655/64),y:4}],
    // Ground:[
    
    //     //test side collision sprites    
    //     {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:10,size:4},
        
    //     // standard 0-20 block grass 0
    //     {sprite:"./tileset/forest/forest_tiles00.png",x:14,y:10,size:1},
    //     {sprite:"./tileset/forest/forest_tiles01.png",x:15,y:10,size:3},
    //     {sprite:"./tileset/forest/forest_tiles02.png",x:18,y:10,size:1},
    //     {sprite:"./tileset/forest/forest_tiles03.png",x:14,y:11,size:1},
    //     {sprite:"./tileset/forest/forest_tiles05.png",x:15,y:11,size:1},
    //     {sprite:"./tileset/forest/forest_tiles06.png",x:16,y:11,size:2},
    //     {sprite:"./tileset/forest/forest_tiles04.png",x:18,y:11,size:1},
    //     {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
    //     {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:14},
    //     {sprite:"./tileset/forest/forest_tiles01.png",x:19,y:11,size:7},
    //     {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1},
    //     {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
    //     {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:18,c:true},
    //     {sprite:"./tileset/forest/forest_tiles06.png",x:22,y:12,size:4,c:true},
    //     {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1},
    //     {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:25,c:true}
    // ],
    Background:[5]
};

var GameOver={
    Tree: [{x:(55/64),y:4}],
    Bush: [{x:(655/64),y:4}],
    Ground:[
    
        //test side collision sprites    
        {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:10,size:4},
        
        // standard 0-20 block grass 0
        {sprite:"./tileset/forest/forest_tiles00.png",x:14,y:10,size:1},
        {sprite:"./tileset/forest/forest_tiles01.png",x:15,y:10,size:3},
        {sprite:"./tileset/forest/forest_tiles02.png",x:18,y:10,size:1},
        {sprite:"./tileset/forest/forest_tiles03.png",x:14,y:11,size:1},
        {sprite:"./tileset/forest/forest_tiles05.png",x:15,y:11,size:1},
        {sprite:"./tileset/forest/forest_tiles06.png",x:16,y:11,size:2},
        {sprite:"./tileset/forest/forest_tiles04.png",x:18,y:11,size:1},
        {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
        {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:14},
        {sprite:"./tileset/forest/forest_tiles01.png",x:19,y:11,size:7},
        {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1},
        {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:18,c:true},
        {sprite:"./tileset/forest/forest_tiles06.png",x:22,y:12,size:4,c:true},
        {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1},
        {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:25,c:true}
    ],
    Background:[3]
};

var levelOne = {
    Music:["./music/forsaken_forest.mp3"],
    Chest:[
    {x:106.5,y:-1,facing:-1,item: "bomb"},
    {x:64.5,y:18,facing:-1,item: "potion"},
    {x:86.5,y:-1,facing:1,item: "potion"}],
    Mimic:[{x:67,y:18,facing:-1}],
    Lich: [{x:37+(25*4),y:(390/64)}],
    Skeleton: [
    { x: 23.5, y: (540 / 64) },
    { x: 40, y: (540 / 64) }, 
    { x: 8 + (25 * 2), y: (540 / 64)},
    { x: 79, y: (284 / 64) },
        { x: 99, y: (92 / 64) },],
    //Elf: [{ x: 23.5, y: (540 / 64) }],
    Slime: [
    { x: 8, y: 17.5 , color: "green"},
    { x: 25, y: 17.5 , color: "yellow"},
    { x: 40, y: 17.5 , color: "red"},
    { x: 65, y: 17.5 , color: "green"}],
    Tree: [{x:(55/64),y:4},{x:15+(25*2),y:3},{x:14+(25*1),y:4},{x:20,y:4}],
    Bush: [{x:(655/64),y:4},{x:15+(25*2),y:3},{x:5+(25*2),y:4},{x:12.5+(25*1),y:4}],
    Rock:[{x:14.25+(25*1),y:4}],
    Ground:[
    
    //test side collision sprites    
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:10,size:4},
    
    // standard 0-20 block grass 0
    {sprite:"./tileset/forest/forest_tiles00.png",x:14,y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:15,y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:18,y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles03.png",x:14,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:15,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:16,y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:18,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:14},
    {sprite:"./tileset/forest/forest_tiles01.png",x:19,y:11,size:7},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:18,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:22,y:12,size:4,c:true},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:25,c:true},
    // standard 0-20 block grass 1
        //tower
        {sprite:"./tileset/forest/forest_tiles26.png",x:12+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles27.png",x:13+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles28.png",x:14+(25*1),y:7,size:1},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:8,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:9,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:12+(25*1),y:10,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:13+(25*1),y:10,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:14+(25*1),y:10,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles00.png",x:4+(25*1),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:5+(25*1),y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:8+(25*1),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*1),y:11,size:3},
    {sprite:"./tileset/forest/forest_tiles03.png",x:4+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:5+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:6+(25*1),y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:8+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:9+(25*1),y:11,size:11},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*1),y:12,size:13,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*1),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*1),y:13,size:19,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*1),y:13,size:1,c:true},
    // standard 0-20 block grass 2
    {sprite:"./tileset/forest/forest_tiles00.png",x:15+(25*2),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:16+(25*2),y:10,size:3},
    {sprite:"./tileset/forest/forest_tiles02.png",x:19+(25*2),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles00.png",x:0+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*2),y:11,size:14},
    {sprite:"./tileset/forest/forest_tiles03.png",x:15+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:16+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*2),y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:19+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:20+(25*2),y:11,size:6},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*2),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*2),y:12,size:21,c:true},  
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:13,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*2),y:13,size:24,c:true},
    //cave
    {sprite:"./tileset/forest/forest_tiles41.png",x:-3,y:14,size:73,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-3,y:15,size:73,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-2,y:16,size:72,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:-1,y:17,size:71,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:0,y:18,size:70,c:true},
    {sprite:"./tileset/forest/forest_tiles41.png",x:1,y:19,size:69,c:true},    
    {sprite:"./tileset/forest/forest_tiles06.png",x:-5,y:20,size:75},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:21,size:75,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:22,size:75,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:-5,y:23,size:75,c:true},
    //platform up
    {sprite:"./tileset/forest/forest_tiles01.png",x:-4,y:14,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-4,y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-3,y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-2,y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:-1,y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:0,y:19,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:20,size:1},
        //empty dirt
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:16,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:17,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:18,size:3,c:true},
        {sprite:"./tileset/forest/forest_tiles07.png",x:-4,y:19,size:4,c:true},
        //end of cave-left
    {sprite:"./tileset/forest/forest_tiles00.png",x:-5,y:14,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:-5,y:19,size:1},
        //end of cave-right
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:14,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:15,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:16,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:17,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:18,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:19,size:1},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:20,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:21,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:22,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:23,size:1,c:true}, 
    // standard 0-20 block grass 3
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*3),y:11,size:25},
    {sprite:"./tileset/forest/forest_tiles07.png",x:0+(25*3),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*3),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:20+(25*3),y:12,size:6},
    {sprite:"./tileset/forest/forest_tiles07.png",x:0+(25*3),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*3),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles07.png",x:20+(25*3),y:13,size:6},
    // standard 0-20 block grass 4 
    {sprite:"./tileset/forest/forest_tiles27.png",x:118,y:11,size:8},
    {sprite:"./tileset/forest/forest_tiles34.png",x:118,y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:118,y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:119,y:12,size:34},
    {sprite:"./tileset/forest/forest_tiles35.png",x:119,y:13,size:34},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*4),y:11,size:19},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*4),y:11,size:1}, 
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*4),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*4),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:13,size:1},
    
    //castle
        //tower left
        {sprite:"./tileset/forest/forest_tiles26.png",x:85,y:1,size:1},
        {sprite:"./tileset/forest/forest_tiles27.png",x:86,y:1,size:2},
        {sprite:"./tileset/forest/forest_tiles28.png",x:88,y:1,size:1},
        {sprite:"./tileset/forest/forest_tiles34.png",x:85,y:2,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:86,y:2,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:88,y:2,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:85,y:3,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:86,y:3,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:88,y:3,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:85,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:86,y:4,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:88,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:85,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:86,y:5,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:88,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:85,y:6,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:86,y:6,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:88,y:6,size:1,c:true},
        //tower middle
        {sprite:"./tileset/forest/forest_tiles26.png",x:90,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles27.png",x:91,y:4,size:12},
        {sprite:"./tileset/forest/forest_tiles28.png",x:103,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:90,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:91,y:5,size:12,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:103,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:90,y:6,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:91,y:6,size:12,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:103,y:6,size:1,c:true},
        //tower right
        {sprite:"./tileset/forest/forest_tiles26.png",x:105,y:1,size:1},
        {sprite:"./tileset/forest/forest_tiles27.png",x:106,y:1,size:2},
        {sprite:"./tileset/forest/forest_tiles28.png",x:108,y:1,size:1},
        {sprite:"./tileset/forest/forest_tiles34.png",x:105,y:2,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:106,y:2,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:108,y:2,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:105,y:3,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:106,y:3,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:108,y:3,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:105,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:106,y:4,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:108,y:4,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:105,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:106,y:5,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:108,y:5,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles34.png",x:105,y:6,size:1,c:true},
        {sprite:"./tileset/forest/forest_tiles35.png",x:106,y:6,size:2,c:true},
        {sprite:"./tileset/forest/forest_tiles36.png",x:108,y:6,size:1,c:true},

    {sprite:"./tileset/forest/forest_tiles26.png",x:73,y:7,size:1},
    {sprite:"./tileset/forest/forest_tiles27.png",x:74,y:7,size:40},
    {sprite:"./tileset/forest/forest_tiles28.png",x:114,y:7,size:1},
    {sprite:"./tileset/forest/forest_tiles26.png",x:72,y:8,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:73,y:8,size:42},
    {sprite:"./tileset/forest/forest_tiles27.png",x:115,y:8,size:1},
    {sprite:"./tileset/forest/forest_tiles26.png",x:71,y:9,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:72,y:9,size:44},
    {sprite:"./tileset/forest/forest_tiles27.png",x:116,y:9,size:1},
    {sprite:"./tileset/forest/forest_tiles26.png",x:70,y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:71,y:10,size:46},
    {sprite:"./tileset/forest/forest_tiles27.png",x:117,y:10,size:1},

   
    
    //boss area

    {sprite:"./tileset/castle/sprite_castle01.png",x:125,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle02.png",x:126,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle03.png",x:125,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle04.png",x:126,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle05.png",x:125,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle06.png",x:126,y:10,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:7,size:1},
        //interior
    {sprite:"./tileset/castle/sprite_castle07.png",x:28+(25*4),y:6,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:35+(25*4),y:6,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:42+(25*4),y:6,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:49+(25*4),y:6,size:1,c:true},

    {sprite:"./tileset/throne/throne_00.png",x:49+(25*4),y:8,size:1},
    {sprite:"./tileset/throne/throne_01.png",x:50+(25*4),y:8,size:1},
    {sprite:"./tileset/throne/throne_02.png",x:51+(25*4),y:8,size:1},
    {sprite:"./tileset/throne/throne_03.png",x:52+(25*4),y:8,size:1},
    {sprite:"./tileset/throne/throne_04.png",x:49+(25*4),y:9,size:1},
    {sprite:"./tileset/throne/throne_05.png",x:50+(25*4),y:9,size:1},
    {sprite:"./tileset/throne/throne_06.png",x:51+(25*4),y:9,size:1},
    {sprite:"./tileset/throne/throne_07.png",x:52+(25*4),y:9,size:1},
    {sprite:"./tileset/throne/throne_08.png",x:49+(25*4),y:10,size:1},
    {sprite:"./tileset/throne/throne_09.png",x:50+(25*4),y:10,size:1},
    {sprite:"./tileset/throne/throne_10.png",x:51+(25*4),y:10,size:1},
    {sprite:"./tileset/throne/throne_11.png",x:52+(25*4),y:10,size:1},

    {sprite:"./tileset/forest/forest_tiles26.png",x:25+(25*4),y:1,size:1},
    {sprite:"./tileset/forest/forest_tiles27.png",x:26+(25*4),y:1,size:28},
    {sprite:"./tileset/forest/forest_tiles28.png",x:54+(25*4),y:1,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:2,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:2,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:2,size:1},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:3,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:3,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:3,size:1},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:4,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:4,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:4,size:1},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:5,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:5,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:5,size:1},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:6,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:6,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:6,size:1},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:7,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:7,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:8,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:8,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:9,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:9,size:28,c:true},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:10,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:10,size:28,c:true},

    //boss platform
    {sprite:"./tileset/forest/forest_tiles26.png",x:25+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles27.png",x:26+(25*4),y:11,size:28},
    {sprite:"./tileset/forest/forest_tiles28.png",x:54+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:12,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:13,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:13,size:1},
],

Background:[3]


};

var levelTwo = {
    Music:["./music/ancient_ruins.mp3"],
    //temp comment them out
    Chest:[
        {x:1,y:9,facing:1,item: "bomb"},
        {x:37,y:8,facing:-1,item: "potion"},
        {x:74.5,y:4,facing:-1,item: "potion"},
        {x:98,y:-7,facing:-1,item: "potion"},
    ],
    Cyclops: [// y-3.5 from ground
        {x: 15, y: 7.5},
        {x: 115, y: -8.5},
        {x: 125, y: -8.5},
    ],
    Titan: [ // y-6 from ground
        {x: 110, y: -11},
    ],
    Mimic:[{x:48,y:6,facing:-1}],
    // Lich: [{x:37+(25*4),y:(390/64)}],
    Skeleton: [
        { x: 33, y: (476/ 64) },
        { x: 62, y: (284 / 64) },
        { x: 66, y: (284 / 64) },
        { x: 82, y: 1.3 },
    ],
    Slime: [
        { x: 60, y: 4.5 , color: "red"},
        { x: 68, y: 4.5 , color: "yellow"},
    ],
    Bush:[{x:-2,y:4}],
    //Rock:[{x:17.25,y:4}],
    Ground:[
    // standard  block grass 0
    {sprite:"./tileset/swamp/sprite_00.png",x:4,y:10,size:1},
    {sprite:"./tileset/swamp/sprite_00.png",x:-3,y:11,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:-2,y:11,size:30},
    {sprite:"./tileset/swamp/sprite_11.png",x:28,y:11,size:63},

    {sprite:"./tileset/swamp/sprite_10.png",x:-3,y:12,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:-2,y:12,size:93,c:true},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:12,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:28,y:12,size:1},
    {sprite:"./tileset/swamp/sprite_10.png",x:-3,y:13,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:-2,y:13,size:93,c:true},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:13,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:28,y:13,size:1},
    {sprite:"./tileset/swamp/sprite_10.png",x:-3,y:14,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:-2,y:14,size:93,c:true},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:14,size:1},
    //stairs
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:11,size:1},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:10,size:1},
    {sprite:"./tileset/swamp/sprite_00.png",x:28,y:10,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:29,y:10,size:10},
    {sprite:"./tileset/swamp/sprite_11.png",x:39,y:10,size:52,c:true},
    {sprite:"./tileset/swamp/sprite_00.png",x:39,y:9,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:40,y:9,size:10},
    {sprite:"./tileset/swamp/sprite_11.png",x:50,y:9,size:41,c:true},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:9,size:1},
    {sprite:"./tileset/swamp/sprite_10.png",x:50,y:8,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:51,y:8,size:40,c:true},
    {sprite:"./tileset/swamp/sprite_12.png",x:91,y:8,size:1},
    {sprite:"./tileset/swamp/sprite_00.png",x:50,y:7,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:51,y:7,size:40},
    {sprite:"./tileset/swamp/sprite_02.png",x:91,y:7,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:53,y:6,size:4},
    {sprite:"./tileset/swamp/sprite_01.png",x:73,y:6,size:4},
    {sprite:"./tileset/swamp/sprite_11.png",x:77,y:6,size:12,c:true},
    {sprite:"./tileset/swamp/sprite_11.png",x:77,y:5,size:12,c:true},
    {sprite:"./tileset/swamp/sprite_01.png",x:77,y:4,size:12},
    //platforms up
    {sprite:"./tileset/swamp/sprite_06.png",x:82,y:1,size:1},
    {sprite:"./tileset/swamp/sprite_07.png",x:83,y:1,size:1},
    {sprite:"./tileset/swamp/sprite_08.png",x:84,y:1,size:1},

    {sprite:"./tileset/swamp/sprite_06.png",x:87,y:-2,size:1},
    {sprite:"./tileset/swamp/sprite_07.png",x:88,y:-2,size:1},
    {sprite:"./tileset/swamp/sprite_08.png",x:89,y:-2,size:1},
    //boss area
    {sprite:"./tileset/swamp/sprite_00.png",x:92,y:-5,size:1},
    {sprite:"./tileset/swamp/sprite_01.png",x:93,y:-5,size:40},
    {sprite:"./tileset/swamp/sprite_02.png",x:133,y:-5,size:1},
    {sprite:"./tileset/swamp/sprite_11.png",x:92,y:-4,size:42},
    {sprite:"./tileset/swamp/sprite_11.png",x:92,y:-3,size:42},
    ],
    
    Background:[4]
};

var levelThree = {
    Music:["./music/dragontheme.mp3"],
    //temp comment them out
    // Chest:[{x:106.5,y:-1,facing:-1,item: "bomb"},
    // {x:65,y:18,facing:-1,item: "potion"},
    // {x:86.5,y:-1,facing:1,item: "potion"}],
    // Mimic:[{x:67,y:18,facing:-1}],
    // Lich: [{x:37+(25*4),y:(390/64)}],
    // Skeleton: [
    // { x: 23.5, y: (540 / 64) },
    // { x: 40, y: (540 / 64) }, 
    // { x: 8 + (25 * 2), y: (540 / 64)},
    // { x: 79, y: (284 / 64) },
    // { x: 99, y: (92 / 64) },],
    // Slime: [
    // { x: 8, y: 17.5 , color: "green"},
    // { x: 25, y: 17.5 , color: "yellow"},
    // { x: 40, y: 17.5 , color: "red"},
    // { x: 65, y: 17.5 , color: "green"}],
    // Tree: [{x:(55/64),y:4},{x:15+(25*2),y:3},{x:14+(25*1),y:4},{x:20,y:4}],
    // Bush: [{x:(655/64),y:4},{x:15+(25*2),y:3},{x:5+(25*2),y:4},{x:12.5+(25*1),y:4}],
    // Rock:[{x:14.25+(25*1),y:4}],

    Dragon: [{x:32,y:4.5}],
    Chest:[
        {x:1,y:9.5,facing:1,item: "bomb"},
        {x:8,y:9.5,facing:-1,item: "potion"},
        {x:15,y:9.5,facing:-1,item: "throwingknife"}],

    Mimic:[
        {x:7,y:-1,facing:-1},],

    Ground:[
    
    // //test side collision sprites    
    // {sprite:"./tileset/swamp/sprite_01.png",x:1,y:10,size:4},
    
    // standard  block grass 0
    
    //background
    //door
    {sprite:"./tileset/castle/sprite_castle01.png",x:-3,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle02.png",x:-2,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle03.png",x:-3,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle04.png",x:-2,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle05.png",x:-3,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle06.png",x:-2,y:10,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle08.png",x:6,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle08.png",x:7,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle10.png",x:6,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle11.png",x:7,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle12.png",x:6,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle13.png",x:7,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle14.png",x:6,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle15.png",x:7,y:8,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle07.png",x:0,y:5,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:5,y:5,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:10,y:5,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle07.png",x:15,y:5,size:1,c:true},

    //walls

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:11,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:11,size:1},
    //{sprite:"./tileset/castle/sprite_castle36.png",x:18,y:11,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:10,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:10,size:1},
    //{sprite:"./tileset/castle/sprite_castle36.png",x:18,y:10,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:9,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:9,size:1},
    //{sprite:"./tileset/castle/sprite_castle36.png",x:18,y:9,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:8,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:8,size:1},
    //{sprite:"./tileset/castle/sprite_castle36.png",x:18,y:8,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:7,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:7,size:1},
    //{sprite:"./tileset/castle/sprite_castle36.png",x:18,y:7,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:6,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:6,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:6,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:5,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:5,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:5,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:4,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:4,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:4,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:3,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:3,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:3,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:2,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:2,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:2,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:1,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:1,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:1,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:1,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:1,size:20},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:1,size:1},

    //background interior
    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:10,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:10,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:10,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:10,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:10,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:9,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:9,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:9,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:8,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:8,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:8,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:7,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:7,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:7,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:6,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:6,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:6,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:5,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:5,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:5,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:4,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:4,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:4,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:3,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:3,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:3,size:1,c:true},
    
    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:2,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:2,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:2,size:1,c:true},

    {sprite:"./tileset/castle/sprite_castle35.png",x:-3,y:1,size:1,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:-2,y:1,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle35.png",x:18,y:1,size:1,c:true},

    //floor
    {sprite:"./tileset/castle/sprite_castle00.png",x:-3,y:11,size:1},
    {sprite:"./tileset/castle/sprite_castle00.png",x:-2,y:11,size:20},
    {sprite:"./tileset/castle/sprite_castle00.png",x:18,y:11,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:12,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:12,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:12,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:13,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:13,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:13,size:1},

    {sprite:"./tileset/castle/sprite_castle36.png",x:-3,y:14,size:1},
    {sprite:"./tileset/castle/sprite_castle36.png",x:-2,y:14,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle36.png",x:18,y:14,size:1},
    
    //bossroom floor
    {sprite:"./tileset/castle/sprite_castle28.png",x:19,y:11,size:1},
    {sprite:"./tileset/castle/sprite_castle28.png",x:18,y:11,size:20},
    {sprite:"./tileset/castle/sprite_castle28.png",x:38,y:11,size:1},
    
    {sprite:"./tileset/castle/sprite_castle40.png",x:19,y:12,size:1},
    {sprite:"./tileset/castle/sprite_castle40.png",x:18,y:12,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle40.png",x:38,y:12,size:1},

    {sprite:"./tileset/castle/sprite_castle40.png",x:19,y:13,size:1},
    {sprite:"./tileset/castle/sprite_castle40.png",x:18,y:13,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle40.png",x:38,y:13,size:1},

    {sprite:"./tileset/castle/sprite_castle40.png",x:19,y:14,size:1},
    {sprite:"./tileset/castle/sprite_castle40.png",x:18,y:14,size:20,c:true},
    {sprite:"./tileset/castle/sprite_castle40.png",x:38,y:14,size:1},

    // {sprite:"./tileset/forest/forest_tiles03.png",x:14,y:11,size:1},
    // {sprite:"./tileset/forest/forest_tiles05.png",x:15,y:11,size:1},
    // {sprite:"./tileset/forest/forest_tiles06.png",x:16,y:11,size:2},
    // {sprite:"./tileset/forest/forest_tiles04.png",x:18,y:11,size:1},
    // {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
    // {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:14},
    // {sprite:"./tileset/forest/forest_tiles01.png",x:19,y:11,size:7},
    // {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1},
    // {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
    // {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:18,c:true},
    // {sprite:"./tileset/forest/forest_tiles06.png",x:22,y:12,size:4,c:true},
    // {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1},
    // {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:25,c:true},
    ],
    Background:[5]
};
