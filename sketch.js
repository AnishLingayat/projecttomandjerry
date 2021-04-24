var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here

    bgImg = loadImage("garden.png");
    catimg1 =  loadAnimation("images/cat1.png");
    mouseimg1 =  loadAnimation("images/mouse1.png");
    catimg2 =  loadAnimation("images/cat2.png");
    mouseimg2 =  loadAnimation("images/mouse2.png");





}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse =  createSprite (300,700,50,50);
    mouse.addAnimation(mouseimg2);

    cat =  createSprite (800,400,50,50);
    cat.addAnimation(catimg1);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

     if(cat.x - mouse.x < (cat.width -  mouse.width)/2) {

        mouse.changeAnimation(mouseimg1);
        cat.velocityX = 0;

     }



     keyPressed();


    drawSprites();
}


function keyPressed() {

    if(keyCode === LEFT_ARROW) {

        mouse.addAnimation("mouseTeasing" , mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

    }






}
