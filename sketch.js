var bg;
var img;
var img2;
var img3;
var img4;
var img5;

var c;

function setup()
{

    c = 0;

    createCanvas(1111,1111);
    bg = loadImage("bg.png");
    img = loadImage("earth.png");
    img2 = loadImage("plane.png");
    img3 = loadImage("cloud1.png");
    img4 = loadImage("cloud2.png");
    img5 = loadImage("balloon.png");

    }


function draw()
{
    background(bg);



    //cloud1
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 400.0);
    image(img3,2-img3.width/2,2-img3.height/2);
    pop();


    //cloud2
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 400.0);
    image(img4,2-img4.width/2,2-img4.height/2);
    pop();


    //earth
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 200.0);
    image(img,2-img.width/2,2-img.height/2);
    pop();
    

    //plane
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 50.0);
    image(img2,2-img2.width/2,2-img2.height/2);
    pop();


    //balloon
    if(f){
    if(c < -17){
        c=0;
        f=false;
    }else{
        image(img5,647,500+c*5);
        c= c-1;
        }
    }


}

var f = false;
    function mouseClicked(){
        if (!f){
            f=true;
        }

    }