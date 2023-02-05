var levelOne = {
    Lich: [{x:37+(25*4),y:(390/64)}],
    Skeleton: [{x:15,y:(540/64)},{x:8+(25*2),y:(540/64)}],
    Tree: [{x:(55/64),y:4},{x:15+(25*2),y:3},{x:14+(25*1),y:4}],
    Bush: [{x:(655/64),y:4},{x:15+(25*2),y:3},{x:5+(25*2),y:4},{x:12.5+(25*1),y:4}],
    Rock:[{x:14.25+(25*1),y:4}],
    Ground:[
    
    //test side collision sprites    
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:10,size:4},
    
    // standard 0-20 block grass 0
    {sprite:"./tileset/forest/forest_tiles00.png",x:0,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1,y:11,size:19},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20,y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1,y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4,y:12,size:13,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17,y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20,y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0,y:13,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1,y:13,size:19,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20,y:13,size:1,c:true},
    
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
    {sprite:"./tileset/forest/forest_tiles00.png",x:0+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*1),y:11,size:3},
    {sprite:"./tileset/forest/forest_tiles03.png",x:4+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles05.png",x:5+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:6+(25*1),y:11,size:2},
    {sprite:"./tileset/forest/forest_tiles04.png",x:8+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:9+(25*1),y:11,size:11},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*1),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*1),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*1),y:12,size:13,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*1),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*1),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*1),y:13,size:1,c:true},
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
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*2),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*2),y:12,size:3,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*2),y:12,size:16,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:12,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*2),y:13,size:1,c:true},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*2),y:13,size:19,c:true},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*2),y:13,size:1,c:true},
    
    // standard 0-20 block grass 3
    {sprite:"./tileset/forest/forest_tiles00.png",x:0+(25*3),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*3),y:11,size:19},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*3),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*3),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*3),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*3),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*3),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*3),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*3),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*3),y:13,size:1},
    
    // standard 0-20 block grass 4
    {sprite:"./tileset/forest/forest_tiles00.png",x:0+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles01.png",x:1+(25*4),y:11,size:19},
    {sprite:"./tileset/forest/forest_tiles02.png",x:20+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles06.png",x:1+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles07.png",x:4+(25*4),y:12,size:13},
    {sprite:"./tileset/forest/forest_tiles06.png",x:17+(25*4),y:12,size:3},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles08.png",x:0+(25*4),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles07.png",x:1+(25*4),y:13,size:19},
    {sprite:"./tileset/forest/forest_tiles10.png",x:20+(25*4),y:13,size:1},
    
    
    //boss area
    {sprite:"./tileset/forest/forest_tiles26.png",x:25+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles27.png",x:26+(25*4),y:11,size:28},
    {sprite:"./tileset/forest/forest_tiles28.png",x:54+(25*4),y:11,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:12,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:12,size:1},
    {sprite:"./tileset/forest/forest_tiles34.png",x:25+(25*4),y:13,size:1},
    {sprite:"./tileset/forest/forest_tiles35.png",x:26+(25*4),y:13,size:28},
    {sprite:"./tileset/forest/forest_tiles36.png",x:54+(25*4),y:13,size:1}
]

};

