var imagenes =[];
imagenes["10"] = "billete10.png"
imagenes["20"] = "billete20.png"
imagenes["50"] = "billete50.png"

class Billete
{
    constructor(v,c)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad =c;
        this.imagen.src = imagenes[this.valor];
    }
}

var entregado = [];
var caja =[];
caja.push( new Billete (50, 30));
caja.push( new Billete (20, 20));
caja.push( new Billete (10, 30));

var dinero ;
var saldo = 0;
var div = 0;
var papeles = 0;

for (bill of caja)
{
    saldo = saldo + (bill.cantidad * bill.valor);
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (dinero <= saldo)
    {
        saldo = saldo - dinero;
        for (var bill of caja)
        {
            if (dinero > 0)
            {
                div = Math.floor(dinero/bill.valor);
                
                if(div > bill.cantidad)
                {
                    papeles = bill.cantidad
                }
                else
                {
                    papeles = div;
                }

                             
                entregado.push (new Billete (bill.valor, papeles));
                dinero = dinero - (bill.valor * papeles);
                
            }
                     
        }
        
        for (var e of entregado)
        {
            if (e.cantidad > 0)
            {
            r.innerHTML = r.innerHTML + e.cantidad + "Billetes de $ " + e.valor + "<br/>";
            r.innerHTML = r.innerHTML + "<img src=" + '"' + e.imagen.src + '"' + "/>" + "<br><hr>";
            }
        }
        
    }
    else
    {
        r.innerHTML= "saldo insuficiente";
    }
   
    return saldo;
    
    
}

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
var r = document.getElementById("resultado");