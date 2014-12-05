var bg;
var img;

function setup()
{

    createCanvas(1140,1140);
    bg = loadImage("bg.png");
    bg = loadImage("bg.png");
    img = loadImage("earth.png");

    }


function draw()
{
    background(bg);
    image(img,24,51);

    }