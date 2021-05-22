canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var past_position_of_x, past_position_of_y;
var mouseEvent = "empty";
color = "black";
var width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    console.log(color);
    width = document.getElementById("width").value;
    console.log(width);
   
    //console.log(mouseEvent);
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    mouseEvent = "mouseUP";
    //console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {

    mouseEvent = "mouseleave";
    //console.log(mouseEvent);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    mouseEvent = "mousemove";
    //console.log(mouseEvent);
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Past Coordinates of X and Y are:");
        console.log("x = " + past_position_of_x + "y = " + past_position_of_y);
        ctx.moveTo(past_position_of_x, past_position_of_y);
        console.log("Current Coordinates of X and Y are:");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.arcTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    past_position_of_x = current_position_of_x;
    past_position_of_y = current_position_of_y;
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}