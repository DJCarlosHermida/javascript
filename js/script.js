console.log('Primer entrega - Proyecto JavaScript - Simulador');
alert("Bienvenido a PARAFIESTAS!");
alert("Para continuar es necesario ingresar algunos datos");
let nombre, edad;
    nombre = prompt("Introduce tu nombre");
        console.log("Nombre: " + nombre);
    edad = prompt("introduce tu edad \n debes tener al menos 18 años para continuar");
        console.log("Edad: " + edad);
document.write(nombre +" "+ edad);
if(edad > 17)
{
    let opciones;
    let precio;
    let valor;
    let acepta;
let dinero = prompt("introduce el dinero que tienes disponible para realizar la compra");
do {
     valor = prompt('Selecciona un servicio \n 1- Básico  $5500 \n2- Standar   $7500\n3- Full   $10000\n4- Full HD   $15000');
     switch (valor) {
         case '1':
             alert("Opción 1 - Básico $5.500 \n Audio + Iluminación LED + DJ - 1 atril con 2 tachos LED, 1 efecto Revo, 1 Flash y 2 Cajas acústicas activas.");
             //acepta = prompt('¿Deseas contratar el servicio?');
             console.log("Servicio Básico");
             precio = 5500;
             break;
         case '2':
             alert("Opción 2 - Standar $7.500 \n Audio + Iluminación LED + DJ - 1 atril con 2 cabezas móviles wash, 1 efecto LED, Máquina de humo de 900w, 1 Flash y 2 Cajas acústicas FBT 12 pulgadas + atriles.");
             //acepta = prompt('¿Deseas contratar el servicio? \n Introduzca Y o N');
             console.log("Servicio Standar");
             precio = 7500;
             break;
         case '3':
             alert('Opción 3 - Full $10.000 \n Audio Digital + Iluminación + DJ - 2 Bola de espejos, 2 Pies elevadores + cercha de 3 mts + 2 atriles para cajas, 2 cabezas móviles wash, 2 Barras LED Octobeam, Máquina de humo de 1500w, 2 Lasers (verde y azul, Pantalla Gigante HD de 100".');
             //acepta = prompt('¿Deseas contratar el servicio? \n Introduzca Y o N');
             console.log("Servicio Full");
             precio = 10000;
             break;
         case '4':
             alert("Opción 4 - Full HD $15.000 \n Audio Digital + Iluminación Profesional + AUDIO  DJProfesional - 4 Bolas de espejos, 2 pies elevadores + 5 mts cercha, 4 cabezas móviles Beam 230w, 4 cabezas móviles LS10, 4 cabezas móviles LM70, 2 Spiders, 4 Lasers, 2 Máquinas de humo, Pantalla Gigante HD 200 pulgadas. Toda la Iluminación es controlada a traves de un Software, el cual permite el control absoluto de las mimas, movimiento, colores, strobo, etc. 2 cajas JBL 2x15 pulgadas, refuerzo de graves con sub de 18 pulgadas. Éste sistema se ajusta a el local a traves de un procesador digital de la marca dbx, utilzando un microfono de medición que se utiliza en shows profesionales, se logra una excelente calidad de sonido sin importar la acústica del recinto. ");
             //acepta = prompt('¿Deseas contratar el servicio? \n Introduzca Y o N');
             console.log("Servicio Full HD");
             precio = 15000;
             break;
         
         default:
             alert('Debe seleccionar una opción para continuar');
             break;
     }
 } while (valor == null);
    if(dinero >= precio)
    {
        alert('Usted contrató el servicio ' + valor + '  ' + " " + ' con un costo de $' + precio);
        console.log(precio);
        alert("Gracias por contratar nuestro servicio \n en breve nos comunicaremos contigo...");
    }else{
        alert("No le alcanza");
    }
     
}else{
    alert("Debe ser mayor para poder comprar");
}
