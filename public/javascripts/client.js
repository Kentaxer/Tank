var stage = new PIXI.Stage(0x66FF99);
var renderer = PIXI.autoDetectRenderer(400, 300);
var bunny;

function init() {
    document.body.appendChild(renderer.view);

    requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/bunny.png");
    // create a new Sprite using the texture

    bunny = new PIXI.Sprite(texture);
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);
}

function animate() {

    requestAnimFrame(animate);

    // just for fun, lets rotate mr rabbit a little
    //bunny.rotation += 0.1;

    // render the stage   
    renderer.render(stage);
}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37:
            moveLeft();
            break
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
});

function moveLeft() {
    bunny.position.x -= 10;
}

function moveRight() {
    bunny.position.x += 10;
}

function moveUp() {
    bunny.position.y -= 10;
}

function moveDown() {
    bunny.position.y += 10;
}

init();