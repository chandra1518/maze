scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 2 2 2 2 2 . . . . . . 
    . . . . 3 2 2 2 2 2 3 . . . . . 
    . . . 3 3 2 6 6 6 2 3 . . . . . 
    . . . 3 3 2 6 6 6 2 . . . . . . 
    . . . . 3 2 2 2 2 2 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(50)
