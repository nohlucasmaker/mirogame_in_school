// 자동 생성된 코드입니다. 편집하지 마십시오.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "수준1":
            case "수준1":return tiles.createTilemap(hex`200010000202020202020202020202020202020206070707070707070707070707070708020501020101010101030301020201020d0e0e0e0e0e0e0f0f0e0e100f101009020101020101010101010101160101020d120e100e0e0e0e0e0e0e100f101009020101020102020201010101160102020d0f0f0f0f0f0f0e0e0f0f0f0f0e0e09020101020102010201010201160102020d0e0e0f0e0e0f0e0e0f0e0e0e0e0e09020101020202010201010203010102020d0e0e0f0f0f0f0e0e0f0e0e0e0e0e09020101010101010201010201010102020d0e0e0e0e0e0e0e0e0f0e100f0e0e09020101010101010201010201010101020d100e0e0e100e0e100f0e100f0e1109020103021515151515150202010101020d100e0f0f0f0f0f0f0f0e0e0f0f0f09020101020301010101010102010103020d100e0f0e0e0e141414141414141009020101020202021313010102010103020d100e0f0e0f0f0f0e0e0e0e0e0e1009020102020101020301010302010101020d100e0f0e0e100f0e0e0f0f0f0e1009020202010101020202010302010101020d0e0e0f0f0f0f0f0e0e0f0e0e0e1009020101010101010102010102030101020d0e0e0e0e0e141414140f0e0f0f0f09020101030303010101010102010104020d1010100e0e0e0e0e100f0e0e0e0e09020202020202020202020202020202020c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a`, img`
22222222222222222222222222222222
2..2........22.22......22...2..2
2..2...........22...........2..2
2..2.222......222222222..2222..2
2..2.2.2..2...222..2..2..2.....2
2..222.2..2...222..2222..2.....2
2......2..2...222........2..2..2
2......2..2....22........2..2..2
2..2......22...22..2222222..2222
2..2.......2...22..2...........2
2..222222..2...22..2.222.......2
2.22..2....2...22..2...2..222..2
222...222..2...22..22222..2....2
2.......2..2...22.........2.2222
2..........2...22.........2....2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles8,sprites.swamp.swampTile13,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.hazardLava0,myTiles.tile4,myTiles.tile5,sprites.builtin.forestTiles12,sprites.vehicle.roadHorizontal,sprites.castle.rock2,sprites.castle.shrub], TileScale.Sixteen);
            case "수준2":
            case "수준2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// 자동 생성된 코드입니다. 편집하지 마십시오.
