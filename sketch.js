var bg;
var img;

function setup()
{

    createCanvas(1000,1000);
    bg = loadImage("bg.png");
    bg = loadImage("bg.png");
    img = loadImage("earth.png");

    }


function draw()
{
    background(bg);
    image(img,24,51);

    }