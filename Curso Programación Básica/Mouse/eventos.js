//Obtenemos área de dibujo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

//Definimos variables
var estado = 0;
var x = 0;
var y;


//Adicionamos event listener 
document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mousemove", dibujaMouse);
document.addEventListener("mouseup", pulsarMouse);

//dibujo cuadrito
dibujaLineas("green",1,1,299,1,papel);
dibujaLineas("green",299,1,299,299,papel);
dibujaLineas("green",299,299,1,299,papel);
dibujaLineas("green",1,299,1,1,papel);

//Defino funcion que ocurre cuendo se pulsa el mouse
function pulsarMouse (evento)
{
    if(evento.type == "mousedown")
    {
        estado = 1;
        x = evento.offsetX;
        y = evento.offsetY;
    } 
    else 
    {
        estado = 0;
    }
}

function dibujaMouse (evento)
{
    if (estado == 1)
    {
        dibujaLineas("green", x, y,evento.offsetX,evento.offsetY,papel);
        x = evento.offsetX;
        y = evento.offsetY;
    }
}

//funcion que dibuja las lineas
function dibujaLineas (color,x1,y1,x2,y2,Lienzo)
{
    Lienzo.beginPath();
    Lienzo.strokeStyle = color;
    Lienzo.lineWidth = 1;
    Lienzo.moveTo(x1, y1);
    Lienzo.lineTo(x2, y2);
    Lienzo.stroke();
    Lienzo.closePath();
 }

