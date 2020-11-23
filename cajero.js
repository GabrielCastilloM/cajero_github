class Billete {  //creacion de la clase
    constructor(v, c) {//Molde del objeto billete
        this.imagen = new Image();       
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor];

    }
    mostrar(){        
        var p = document.createElement('p');
        resultado.appendChild(p);
        p.innerHTML += this.cantidad + ' Billete de: ' + this.valor+ '<br>';
        p.appendChild(this.imagen);
    }
}

//Arreglos
var imagenes = [];
imagenes['50000'] = 'cincuenta.png'
imagenes['20000'] = 'veinte.png'
imagenes['10000'] = 'diez.png'

var caja = [];
caja.push( new Billete(50000, 13));
caja.push( new Billete(20000, 10));
caja.push( new Billete(10000, 10));

var entregado = [];

//variables
var dinero = 0;
var div = 0;
var papeles = 0;

var disponible = document.getElementById('disponible');
disponible.innerHTML = "Saldo Disponible en cajero es " + saldoDisponible() + ' Mil pesos';

var retirado = document.getElementById('retirado');

var resultado = document.getElementById('resultado');
var boton = document.getElementById('extraer');
boton.addEventListener('click', entregarDinero );

saldoDisponible(caja);

function entregarDinero(){
    t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja){
        if (dinero > 0) {
            div = Math.floor(dinero/bi.valor)
            if (div > bi.cantidad) {
                papeles = bi.cantidad
                bi.cantidad = bi.cantidad - papeles;//aqui restamos los billetes del arreglo entregado[] a los billetes del array caja[]                
            }
            else{
                papeles = div;
                bi.cantidad = bi.cantidad - papeles;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles)
        }
    }
    if (saldoDisponible() === 0 && dinero != 0) {        
        resultado.innerHTML = 'soy un cajero pobre y no tengo todo ese dinero';
    }else{
        for (var e of entregado) {
            if (e.cantidad > 0) {        
            e.mostrar();                
            }
            disponible.innerHTML = "Nuevo saldo disponible en cajero " + saldoDisponible() + ' Mil pesos';  
            entregado = []; // vaciamos el arreglo para evitar que se acomulen cifras retiradas         
        }
      valorRetirado('<strong>El valor retirado fue </strong> ' + t.value + ' Mil Pesos' );
    }     
}

function saldoDisponible(){
    var total = 0;    
    for (var c of caja) {
        total = total + (c.valor*c.cantidad);        
    }
    return total;
}

 function valorRetirado(texto){
     var p = document.createElement('p');
     retirado.appendChild(p);
     p.innerHTML = texto;
 }

 var contador = 2;
 var na = "na";
 while(contador)
{
    na += na;   
    contador -= 1;
    //contador = contador -1;  
    
}
//document.write(na + '</br>');
console.log(na + " Freddy ")

/*variable;
   
if (variable) {
    console.log('funciona');
}else{
    console.log('No funciona');
}*/

var a =10;
var b = '12';
console.log(a);
console.log(b);
var c = a+b;
console.log(c);
var d = c*2;


function declarar () {
    variablee = 12;
}

declarar();


var billetes = [ 
                    [ 1 , 2 , 3 ] ,
                    [ 4 , 5 , 6 ] ,
                    [ 7 , 8 , 9 ] 
                ];
console.log(billetes[1][2])

var variable = 'si'; 
if(variable) { 
    console.log("funciona"); 
} 
else{ 
    console.log("no funcionajjj"); 
}
  console.log(variable);  
/*Cualquier valor que no sea false, undefined, null, 0, NaN, o 
una cadena vacía string ('') realmente retorna el valor true */
 
console.log('Comienzo del programa');

var contador=2;
var na = 'na';

var contador = 2;
var na = "na"
while(contador )
{
na += na;
contador -= 1;
}
console.log(na + " freddy")
