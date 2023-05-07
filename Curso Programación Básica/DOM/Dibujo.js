var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
var d = document.getElementById("Dibujito");
var Lienzo = d.getContext("2d");
var ancho = d.width;

boton.addEventListener("click",dibujoPorClick);

function Dibujalineas (color,x1,y1,x2,y2)
        {
            Lienzo.beginPath();
            Lienzo.strokeStyle = color;
            Lienzo.moveTo(x1, y1);
            Lienzo.lineTo(x2, y2);
            Lienzo.stroke();
            Lienzo.closePath();
        }

function dibujoPorClick()
{
    var Lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf
    var espacio = ancho/Lineas
    for (l=0;l<Lineas;l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        Dibujalineas ("red", 0, yi, xf, 300);
    }
    Dibujalineas("red",1,1,1,299);
    Dibujalineas("red",1,299,299,299);

}