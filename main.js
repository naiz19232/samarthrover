can1 = document.getElementById("can1");
ctx = can1.getContext("2d");
rover_image= "rover.png";
mars_image= "mars.jpg";
rover_X= 10;
rover_Y= 10;
rover_width= 100;
rover_height= 100;
function add(){
    rover_tag= new Image(); 
    rover_tag.onload= uploadrover;
    rover_tag.src = rover_image;
    mars_tag= new Image(); 
    mars_tag.onload= uploadmars;
    mars_tag.src = mars_image;
}
function uploadrover(){
    ctx.drawImage(rover_tag,rover_X,rover_Y,rover_width,rover_height);
}
function uploadmars(){
    ctx.drawImage(mars_tag, 0, 0,can1.width,can1.height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if (keypress=="38"){
        up();

    }
    if (keypress=="40"){
        down();
        
    }    if (keypress=="37"){
        left();
        
    }    if (keypress=="39"){
        right();
        
    }

}
function up() {
    if (rover_Y>=0){
        rover_Y-= 10;
        uploadmars();
        uploadrover();
    }
}
function down() {
    if (rover_Y=< 500){
        rover_Y+= 10;
        uploadmars();
        uploadrover();
    }
}
function left() {
    if (rover_X>=0){
        rover_X-= 10;
        uploadmars();
        uploadrover();
    }
}
function right() {
    if (rover_X<=700){
        rover_X+= 10;
        uploadmars();
        uploadrover();
    }
}
