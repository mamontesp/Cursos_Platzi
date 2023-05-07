//Defino la clase Pakiman cada "pakiman" tendra tres atributos nombre, vida y ataque
class Pakiman
{
    constructor (n,v,a)//en el contructor pongo los atributos de la clase 
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a; 

        this.imagen.src = imagenes[this.nombre];
    }
    hablar() //acá defino una funcionalidad de esa clase 
    {
        alert(this.nombre);
        console.Log("entre aca")
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: "+ this.vida +"<br/>");
        document.write("Ataque: "+ this.ataque +"<hr/>");
    }
}