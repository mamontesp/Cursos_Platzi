alert("hola");
var cliente = 1;
var destino = 1;
var saldo = 1100000
var costotransaccion =100000
var hora = 10
var bancocliente = "Bancolombia"
var bacodestino = "Bancosocial"
if (cliente)
{
   console.log("Cliente verificado");

    if (destino)
    {
        console.log("transacción verificada");

        if (((hora>9)&&(hora<12)) || ((hora>15)&&(hora<20)))
        {
            console.log("el horario esta entre 9 y 12")

            if (bancocliente==bacodestino)
            {
                console.log("no me cobren")
            }
            else
            {
                console.log("deben cobrar")
            }
           
            if (saldo >= (costotransaccion+1000000))
            {
                console.log("saldo bien");
            }
        }

       
    }
}

if (cliente && destino && (((hora>9)&&(hora<12)) || ((hora>15)&&(hora<20))))
{
    console.log("Cliente verificado y transacción verificada en horario"); 
}