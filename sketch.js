var bg;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;


var dir1=1;
var dir2=1000;
var dir3=2000;
var dir4=3000;


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
    img6 = loadImage("bus.png");

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


    //bus
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 200.0);
    image(img6,270-img6.width/2,270-img6.height/2);
    pop();


    //balloon
    if(f){
    if(c < -17){
        c=0;
        f=false;
    }else{
        image(img5,800,500+c*5);
        c= c-1;
        }
    }


}



function drawSnow(){
    var r=Math.random();
    stroke(255,255,255,128);
    strokeWeight(20);

    fill(255);
    ellipse(700,dir1,50,50);
    ellipse(100,dir1+500,20,20);
    ellipse(200,dir1+r,30,30);
    ellipse(300,dir1+800,25,25);
    ellipse(400,dir1+100,20,20);
    ellipse(500,dir1+350,34,34);
    ellipse(600,dir1+270,47,47);
    ellipse(800,dir1+900,25,25);
    ellipse(900,dir1+670,34,34);
    ellipse(1000,dir1+230,17,17);
    ellipse(1100,dir1+590,28,28);
    ellipse(1200,dir1+312,33,33);
    ellipse(1300,dir1+100,50,50);
    ellipse(1400,dir1+400,27,27);
    ellipse(1500,dir1+777,35,35);
    dir1=dir1+3;     
    if(dir1>1700){
     dir1=-1700;
 }


 fill(255);
 ellipse(700,dir2,50,50);
 ellipse(100,dir2+500,20,20);
 ellipse(200,dir2+r,30,30);
 ellipse(300,dir2+800,25,25);
 ellipse(400,dir2+100,20,20);
 ellipse(500,dir2+350,34,34);
 ellipse(600,dir2+270,47,47);
 ellipse(800,dir2+900,25,25);
 ellipse(900,dir2+670,34,34);
 ellipse(1000,dir2+230,17,17);
 ellipse(1100,dir2+590,28,28);
 ellipse(1200,dir2+312,33,33);
 ellipse(1300,dir2+100,50,50);
 ellipse(1400,dir2+400,27,27);
 ellipse(1500,dir2+777,35,35);
 dir2=dir2+3;     
 if(dir2>1700){
  dir2=-1700;
}
fill(255);
ellipse(700,dir3,50,50);
ellipse(100,dir3+500,20,20);
ellipse(200,dir3+r,30,30);
ellipse(300,dir3+800,25,25);
ellipse(400,dir3+100,20,20);
ellipse(500,dir3+350,34,34);
ellipse(600,dir3+270,47,47);
ellipse(800,dir3+900,25,25);
ellipse(900,dir3+670,34,34);
ellipse(1000,dir3+230,17,17);
ellipse(1100,dir3+590,28,28);
ellipse(1200,dir3+312,33,33);
ellipse(1300,dir3+100,50,50);
ellipse(1400,dir3+400,27,27);
ellipse(1500,dir3+777,35,35);
dir3=dir3+3;     
if(dir3>1700){
  dir3=-1700;
}
fill(255);
ellipse(700,dir4,50,50);
ellipse(100,dir4+500,20,20);
ellipse(200,dir4+r,30,30);
ellipse(300,dir4+800,25,25);
ellipse(400,dir4+100,20,20);
ellipse(500,dir4+350,34,34);
ellipse(600,dir4+270,47,47);
ellipse(800,dir4+900,25,25);
ellipse(900,dir4+670,34,34);
ellipse(1000,dir4+230,17,17);
ellipse(1100,dir4+590,28,28);
ellipse(1200,dir4+312,33,33);
ellipse(1300,dir4+100,50,50);
ellipse(1400,dir4+400,27,27);
ellipse(1500,dir4+777,35,35);
dir4=dir4+3;     
if(dir4>1700){
  dir4=-1700;
}

}
var f = false;
    function mouseClicked(){
        if (!f){
            f=true;
        }

    }