var bg;
var img;

function setup()
{

    createCanvas(1111,1111);
    bg = loadImage("bg.png");
    bg = loadImage("bg.png");
    img = loadImage("earth.png");

    }


function draw()
{
    background(bg);

    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 200.0);
    image(img,3-img.width/2,3-img.height/2);
    pop();
    

    }