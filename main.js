canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    widht_of_line = document.getElementById("widht_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = eclientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidht.widht_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
}