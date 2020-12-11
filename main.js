canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

car1_width = 100;
car1_height = 90;

car2_width = 100;
car2_height = 90;

background_image = "RacinTrack.jpg";
car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 20;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground();
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1();
    car1_imageTag.src = car1_image;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2();
    car2_imageTag.src = car2_image;
}

function uploadBackground() {

    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

} 
function uploadcar1() { 

    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height); 

}

function uploadcar2() { 

    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height); 

}

window.addEventListener("keydown", my_keydown );
function my_keydown(e) {
    keypressed = e.keycode;
    console.log(keypressed);
    if (keypressed == '38'){
        upCar1();
        console.log("up arrow key");
    }

    if (keypressed == '40'){
        downCar1();
        console.log("down arrow key");
    }

    if (keypressed == '37'){
        leftCar1();
        console.log("left arrow key");
    }

    if (keypressed == '39'){
        rightCar1();
        console.log("right arrow key");
    }

    if (keypressed == '87'){
        upCar2();
        console.log("w key ");
    }

    if (keypressed == '83'){
        downCar2();
        console.log("s key");
    }

    if (keypressed == '65'){
        leftCar2();
        console.log("a key");
    }

    if (keypressed == '68'){
        rightCar2();
        console.log("d key ");
    }
}

