//Obtenemos área de dibujo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

//Definimos punto inicial y lo dibujamos 
var x = 150;
var y = 150;
dibujaLineas("red", x-1, y-1, x+1, y+1, papel);

//Adicionamos event listener para teclas
document.addEventListener("keyup", dibujarTeclado);


//funcion que dibuja las lineas
function dibujaLineas (color,x1,y1,x2,y2,Lienzo)
        {
            Lienzo.beginPath();
            Lienzo.strokeStyle = color;
            Lienzo.lineWidth = 3;
            Lienzo.moveTo(x1, y1);
            Lienzo.lineTo(x2, y2);
            Lienzo.stroke();
            Lienzo.closePath();
        }
//definimos las teclas como variables 
var teclas = {UP:38,DOWN:40,LEFT:37,RIGHT:39};

//Definimos la funcion que identifica la tecla pulsada y responde dibujando de acuerdo a eso
function dibujarTeclado(evento)
{
    var colorcito = "red";
    var movimiento = 10;

   switch(evento.keyCode)
    {
        case teclas.UP:
            dibujaLineas(colorcito,x,y,x,y-movimiento,papel);
            y=y-movimiento;
            console.log("x= "+ x)
            console.log("y= "+ y)
        break;
        case teclas.DOWN:
            dibujaLineas(colorcito,x,y,x,y+movimiento,papel);
            y=y+movimiento;
            console.log("x= "+ x)
            console.log("y= "+ y)
        break;
        case teclas.LEFT:
            dibujaLineas(colorcito,x,y,x-movimiento,y,papel);
            x=x-movimiento;
            console.log("x= "+ x)
            console.log("y= "+ y)
        break;
        case teclas.RIGHT:
            dibujaLineas(colorcito,x,y,x+movimiento,y,papel);
            x=x+movimiento;
            console.log("x= "+ x)
            console.log("y= "+ y)
        break;
    }
}