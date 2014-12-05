var bg;
var img;
var img2;

function setup()
{

    createCanvas(1111,1111);
    bg = loadImage("bg.png");
    bg = loadImage("bg.png");
    img = loadImage("earth.png");
    img2 = loadImage("plane.png");

    }


function draw()
{
    background(bg);

    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 200.0);
    image(img,2-img.width/2,2-img.height/2);
    pop();

    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 50.0);
    image(img2,2-img2.width/2,2-img2.height/2);
    pop();
    

    }