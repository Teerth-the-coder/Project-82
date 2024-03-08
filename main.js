canvas = document.getElementById("myCanvas");

mouseEvent = "empty";
ctx = canvas.getContext("2d");
lastMX = 0;
lastMY = 0;
currentMX = 0;
currentMY = 0;

radius = 50;
color = "red";
width = 5;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentMX = e.clientX - canvas.offsetLeft;
    currentMY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(lastMX, lastMY, radius * 2, 0, 2 * Math.PI)
        ctx.moveTo(lastMX, lastMY);
        ctx.stroke()
    }
    lastMX = currentMX;
    lastMY = currentMY;
}


function saveChanges() {
    radius = document.getElementById("radiusInput").value;
    color = document.getElementById("lineInput").value;
    width = document.getElementById("widthInput").value;
}

function clearspace() {
    ctx.clearRect(0,0,canvas.width,canvas.height); 
}