controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . f f f . . . . 
        . . . . . 4 4 4 4 f . . . . . . 
        . . . . 9 9 . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpaceShip, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let SpaceShip: Sprite = null
SpaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 . . . . . . . . . . . . . 
    9 8 . 8 . . . . . . . . . . . . 
    . . . 4 8 6 6 6 6 8 6 6 6 6 8 . 
    . 4 4 8 9 9 9 9 8 9 9 9 9 8 9 8 
    . . . 4 8 6 6 6 6 8 6 6 6 6 8 . 
    9 8 . 8 . . . . . . . . . . . . 
    . . 9 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
SpaceShip.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(4)
controller.moveSprite(SpaceShip, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . 9 9 . . . 2 2 2 . . . . 
        . . . 9 9 9 9 . . 2 8 8 8 . . . 
        . 6 6 6 9 9 6 6 6 6 6 6 8 . . . 
        2 6 6 6 6 6 6 6 6 6 6 6 8 . . . 
        . 6 6 6 8 9 6 6 6 8 6 8 8 . . . 
        . . . 8 9 9 9 . . 8 8 8 8 . . . 
        . . . . 8 9 9 9 . . . . . . . . 
        . . . . . 8 9 9 . . . . . . . . 
        . . . . . . 8 9 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
})
