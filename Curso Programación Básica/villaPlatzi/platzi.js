var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

document.addEventListener("keyup", moverCerdo);
var teclas = {UP:38,DOWN:40,LEFT:37,RIGHT:39};
var fondo = {
    url: "tile.png",
    cargaOK:false,
    x:0,
    y:0
};
var vaca = {
    url: "vaca.png",
    cargaOK:false,
    x:0,
    y:10
};
var cerdo = {
    url: "cerdo.png",
    cargaOK:false,
    x: 420, 
    y: 420
};
var pollo = {
    url: "pollo.png",
    cargaOK:false,
    x:300,
    y:300
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}


function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,fondo.x,fondo.y);
    }
    
    if(vaca.cargaOK)
    {
        papel.drawImage(vaca.imagen,vaca.x,vaca.y);
    }
    if(pollo.cargaOK)
    {
        papel.drawImage(pollo.imagen,pollo.x,pollo.y);
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen,cerdo.x,cerdo.y);
    }
}

function moverCerdo(evento)
{
  var movimiento = 10
    switch(evento.keyCode)
    {
        case teclas.UP:
            cerdo.y = cerdo.y -movimiento 
            dibujar()
        break;
        case teclas.DOWN:
            cerdo.y = cerdo.y +movimiento 
            dibujar()
        break;
        case teclas.LEFT:
            cerdo.x = cerdo.x -movimiento 
            dibujar()
        break;
        case teclas.RIGHT:
            cerdo.x = cerdo.x +movimiento 
            dibujar()
        break;
    }
}

function aleatorio (min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max -min + 1)) + min;
    return resultado;
}