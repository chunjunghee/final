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
      translate(width*55, height*55);
      rotate(frameCount / 200.0);
      image(img,36,72);
      pop();
    

    }