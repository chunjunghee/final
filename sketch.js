var bg;
var img;
var img2;
var img3;
var img4;

function setup()
{

    createCanvas(1111,1111);
    bg = loadImage("bg.png");
    img = loadImage("earth.png");
    img3 = loadImage("cloud1.png");
    img4 = loadImage("cloud2.png");
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

    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 400.0);
    image(img3,2-img3.width/2,2-img3.height/2);
    pop();

    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 450.0);
    image(img4,2-img4.width/2,2-img4.height/2);
    pop();
    

    }