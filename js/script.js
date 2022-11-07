//Primera Entrega
//CONDICIONAL

console.log('Primer entrega - Proyecto JavaScript - Simulador');

alert("Bienvenido a |PARAFIESTAS|");
alert("Para continuar es necesario ingresar algunos datos");
let nombre, edad;
    nombre = prompt("Introduce tu nombre").toLowerCase();
        console.log("Nombre: " + nombre);
    edad = parseInt(prompt("introduce tu edad \n debes tener al menos 18 años para continuar"));
        console.log("Edad: " + edad);
let anio = 2022 - edad
        console.log("Año Nacimiento: "+ anio);
let correo = prompt("introduce tu correo");
    console.log("Correo: " + correo);
    
document.write(nombre +" "+ edad);
if(edad > 17)
{
    //let opciones;
    let precio;
    let valor;
    //let acepta;
let dinero = prompt("introduce el dinero que tienes disponible para realizar la compra"); 
    console.log("Dinero Disponbinle : " + dinero)
do {
     valor = prompt('Selecciona un servicio \n 1- Básico  $5500 \n2- Standar   $7500\n3- Full   $10000\n4- Full HD   $15000');
     switch (valor) {
         case '1':
             alert("Opción 1 - Básico $5.500 \n Audio + Iluminación LED + DJ - 1 atril con 2 tachos LED, 1 efecto Revo, 1 Flash y 2 Cajas acústicas activas.");
             console.log("Servicio Básico");
             precio = 5500;
             break;
         case '2':
             alert("Opción 2 - Standar $7.500 \n Audio + Iluminación LED + DJ - 1 atril con 2 cabezas móviles wash, 1 efecto LED, Máquina de humo de 900w, 1 Flash y 2 Cajas acústicas FBT 12 pulgadas + atriles.");
             console.log("Servicio Standar");
             precio = 7500;
             break;
         case '3':
             alert('Opción 3 - Full $10.000 \n Audio Digital + Iluminación + DJ - 2 Bola de espejos, 2 Pies elevadores + cercha de 3 mts + 2 atriles para cajas, 2 cabezas móviles wash, 2 Barras LED Octobeam, Máquina de humo de 1500w, 2 Lasers (verde y azul, Pantalla Gigante HD de 100".');
             console.log("Servicio Full");
             precio = 10000;
             break;
         case '4':
             alert("Opción 4 - Full HD $15.000 \n Audio Digital + Iluminación Profesional + AUDIO  DJProfesional - 4 Bolas de espejos, 2 pies elevadores + 5 mts cercha, 4 cabezas móviles Beam 230w, 4 cabezas móviles LS10, 4 cabezas móviles LM70, 2 Spiders, 4 Lasers, 2 Máquinas de humo, Pantalla Gigante HD 200 pulgadas. Toda la Iluminación es controlada a traves de un Software, el cual permite el control absoluto de las mimas, movimiento, colores, strobo, etc. 2 cajas JBL 2x15 pulgadas, refuerzo de graves con sub de 18 pulgadas. Éste sistema se ajusta a el local a traves de un procesador digital de la marca dbx, utilzando un microfono de medición que se utiliza en shows profesionales, se logra una excelente calidad de sonido sin importar la acústica del recinto. ");
             console.log("Servicio Full HD");
             precio = 15000;
             break;
         
         default:
             alert('Debe seleccionar una opción para poder comprar');
     }
 } while (valor == null);
    if(dinero >= precio)
    {
        alert('Usted contrató el servicio ' + valor + " " + ' con un costo de $' + precio );
            console.log('Has contratado el servicio: ' + valor + ' con un costo de $' + precio + " , te sobró $ " + (dinero - precio));
        alert("Gracias por confiar en nosotros \n en breve nos comunicaremos contigo...");
        let confirmaCorreo = prompt("Confirma tu correo");
        console.log("Verificar Correo: " + confirmaCorreo);
        do {
            if (correo = confirmaCorreo) {
                alert("Correo confirmado")
                console.log("Correo COnfirmado");
                break;
            }
        } while (correo != confirmaCorreo);
        console.log("Muchas gracias " + nombre + " por elegir nuestro servicio. \nA continuación te mostraremos más detalles del mismo...");
    }else{
        alert("No le alcanza");
    }
     
}else{
    alert("Debe ser mayor para poder comprar.");
}


//Segunda entrega

console.log('Segunda entrega - Proyecto JavaScript - Simulador + Funciones + Objetos + Arrays');

let usuario = nombre + anio;
    alert("Usuario: " + usuario);

function Usuario(nombre, anio) {
    console.log("se generó el usuario");
    console.log("Usuario: "+ usuario);
}
Usuario("Tu usuario es: " + nombre + anio);

const perfil = {
    nombrePerfil: nombre,
    edadPerfil: edad,
    anioPerfil: anio
};
console.log(perfil);

perfil.email= correo;
console.log("Agregamos el correo al perfil");
console.log(perfil);
alert("Agregamos " + correo + " al perfil");

const listaBandas = [
    {anio: 1960, nombre: "Los Beatles"},
    {anio: 1961, nombre: "The Beach Boys"},
    {anio: 1962, nombre: "The Rolling Stones"},
    {anio: 1963, nombre: "Los Shakers"},
    {anio: 1964, nombre: "Pink Floyd"},
    {anio: 1965, nombre: "The Who"},
    {anio: 1966, nombre: "The Bar-Kays"},
    {anio: 1967, nombre: "Creedence"},
    {anio: 1968, nombre: "Led Zeppellin"},
    {anio: 1969, nombre: "Mountain"},
    {anio: 1970, nombre: "Quenn"},
    {anio: 1971, nombre: "Eagles"},
    {anio: 1972, nombre: "Abba"},
    {anio: 1973, nombre: "ACDC"},
    {anio: 1974, nombre: "Ramones"},
    {anio: 1975, nombre: "Air Supply"},
    {anio: 1976, nombre: "U2"},
    {anio: 1977, nombre: "Village People"},
    {anio: 1978, nombre: "Whitesnake"},
    {anio: 1979, nombre: "Europe"},
    {anio: 1980, nombre: "Depeche Mode"},
    {anio: 1981, nombre: "Pet Shop Boys"},
    {anio: 1982, nombre: "Soda Stereo"},
    {anio: 1983, nombre: "Bon Jovi"},
    {anio: 1984, nombre: "The Connells"},
    {anio: 1985, nombre: "Guns N Roses"},
    {anio: 1986, nombre: "Mana"},
    {anio: 1987, nombre: "Nirvana"},
    {anio: 1988, nombre: "Divididos"},
    {anio: 1989, nombre: "The Cranberries"},
    {anio: 1990, nombre: "Pearl Jam"},
    {anio: 1991, nombre: "Oasis"},
    {anio: 1992, nombre: "Hanson"},
    {anio: 1993, nombre: "Korn"},
    {anio: 1994, nombre: "Foo Fighters"},
    {anio: 1995, nombre: "La Vela Puerca"},
    {anio: 1996, nombre: "Nightwish"},
    {anio: 1997, nombre: "Five"},
    {anio: 1998, nombre: "Gorillaz"},
    {anio: 1999, nombre: "The Sounds"},
    {anio: 2000, nombre: "Linkin Park"},
    {anio: 2001, nombre: "Fall Out Boy"},
    {anio: 2002, nombre: "RED"},
    {anio: 2003, nombre: "Red Hot Chilli Peppers"},
    {anio: 2004, nombre: "The Rasmus"}];

for (const item of listaBandas) {
    
    if (item.anio == anio) {
        console.log(nombre.toUpperCase() + " te recordamos que en el año " + anio + " se creó la banda "+ item.nombre);
        alert(nombre.toUpperCase() + " te recordamos que en el año " + anio + " se creó la banda "+ item.nombre);
    }
};
console.log(listaBandas.length + " bandas");

console.log("Aquí hay una lista de bandas de Rock, desde 1960 hasta 2004");
alert("Aquí hay una lista de bandas de Rock, desde 1960 hasta 2004");
for (let i = 0; i < listaBandas.length; i++){
    console.log(listaBandas[i]);
}
alert("Qué banda de rock agregarías?")
let agregarBanda = prompt("Nombre banda a agregar");
console.log(listaBandas.length + " bandas en lista");
listaBandas.push(agregarBanda);
console.log("se agregó " + agregarBanda + " a la lista");
console.log("Lista actualizada " + listaBandas.length + " bandas");

alert("La lista está completa, no se pudo agregar");
console.log("La lista está completa, no se pudo agregar");
listaBandas.pop();
console.log(listaBandas.length + " bandas");

