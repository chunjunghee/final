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
      rotate(frameCount / 200.0);
      image(img,0,0);
      pop();
    

    }