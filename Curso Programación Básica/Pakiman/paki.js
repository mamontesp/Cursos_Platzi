var imagenes =[];
imagenes["Cauchin"] = "vaca.png"
imagenes["Pocacho"] = "pollo.png"
imagenes["Tocinauro"] = "cerdo.png"

//habiendo definido la clase defino los elementos (objetos) que pertenecen a esa clase.

/*var cauchin = new Pakiman ("Cauchin", 100, 30);
var pocacho = new Pakiman ("Pocacho", 80, 50);
var tocinauro = new Pakiman ("Tocinauro", 120, 40);
pocacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
*/
//En lugar de hacerlo asi puedo ponerlos todos dentro de un array
var coleccion =[];
coleccion.push (new Pakiman ("Cauchin", 100, 30));
coleccion.push (new Pakiman ("Pocacho", 80, 50));
coleccion.push (new Pakiman ("Tocinauro", 120, 40));

for (var p of coleccion)//defino un ciclo for que ejecute la funcion mostrar con cada uno de los objetos del array
{                      //se usa of cuando quiero que lo recorra y se usa in cuando quiero que me diga el numero en el que el valor esta ubicado o el nombre de la posicion 
    p.mostrar();
}

for (var x in coleccion[0]) //aca en la variable x estoy metiendo los atributos del objeto que esta en la posicion [0]
{
    console.log(x);
}