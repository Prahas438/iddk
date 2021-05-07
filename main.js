canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1="car1.png";
car2_width=120;
car2_height=70;
car2_x=10;
car2_y=10;
car2="car2.png";
bg_image="racing.jpeg";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbg;
    background_imgTag.src=bg_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='left'){
        left();
        console.log("left");
    }
    if(keypressed=='up'){
        up();
        console.log("up");
    }if(keypressed=='right'){
        right();
        console.log("right");
    }if(keypressed=='down'){
        down();
        console.log("down");
    }
}
if(keypressed=='a'){
    left();
    console.log("left");
}
if(keypressed=='w'){
    up();
    console.log("up");
}if(keypressed=='d'){
    right();
    console.log("right");
}if(keypressed=='s'){
    down();
    console.log("down");
}
}