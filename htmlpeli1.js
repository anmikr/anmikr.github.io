const cvs = document.getElementById("HTML5GAME");
const ctx = cvs.getContext("2d");

//Kuvien lataaminen
var horseW = new Image();
horseW.src ="Horse.png";

var moon = new Image();
moon.src = "Moon.png";

//Tarkistetaan halutaanko liikkua
var rightPressed = false;
var leftPressed = false;

//Taustakuvan asettaminen
function drawRect(x, y, w, h, color) {
    ctx.drawImage(moon, x, y, w, h);
}

//Sprite objektin luominen
var horse = sprite({
    context: ctx,
    width:768,
    height:166,
    x: ctx.width - 300,
    y: ctx.height - 300,
    image: horseW,
    loop: true
});

//Kun halutaan liikkua
document.body.onkeydown = function HandleKey(event){
    var x = event.keyCode;
    switch(x){
    //vasemmalle
    case 37:
    leftPressed = true;
    break;

    //oikealle
    case 39:
    rightPressed = true;
    break;
    }
    event.preventDefault();	
};

//Kun ei enaa haluta liikkua
document.body.onkeyup = function HandleKey(event){
    var x = event.keyCode;
    switch(x){
    //vasemmalle
    case 37:
    leftPressed = false;
    break;
		
    //oikealle
    case 39:
    rightPressed = false;
    break;
    }
};

//Sprite objektien määrittäminen
function sprite (options) {

    var that = {},
    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame, numberOfFrames = 6;
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.x = 230;
    that.y = 220;

    that.loop = options.loop;

    that.update = function () {
    tickCount += 1;
    ticksPerFrame = 4;
    if (tickCount > ticksPerFrame) {
        tickCount = 0;

    if (frameIndex < numberOfFrames - 1) {
       frameIndex += 1;
    }
    else if (that.loop) {
        frameIndex = 0;
    }
}

    //Tarkistetaan liikutetaanko hevosta oikealle tai vasemmalle
    if(leftPressed ){
        that.x -= 2;
    }

    if(rightPressed){
        that.x += 2;
    }
};

//Animaation luominen
that.render = function() {
    that.context.drawImage(
    that.image,
    frameIndex * that.width / numberOfFrames,
    0,
    that.width / numberOfFrames,
    that.height,
    that.x,
    that.y,
    that.width / numberOfFrames,
    that.height);
};

return that;
}

//Paivittaminen
function update(){
    drawRect(0, 0, cvs.width, cvs.height, "PINK");
    horse.update();
    horse.render();
}

//Pelin init
function game() {
    update();
}

//Loopin luominen
const framePerSecond = 50;
setInterval(game,1000/framePerSecond);

//-----//

let rectX = 0;













