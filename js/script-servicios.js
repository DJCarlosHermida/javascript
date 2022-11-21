// Variables

// Selectores
const h2Servicios = document.getElementById('h2Servicios')
const cardContainer = document.querySelector('#cardContainer')
const buttons = document.querySelectorAll('.btnConsultar')

// Funciones
 

// Listeners

console.log('Tercera entrega - Proyecto JavaScript - DOM + Eventos + Storage & JSON + Workshop');
console.log("DOM + Eventos + Storage + Workshop")
console.log(h2Servicios);

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        console.log(e.target);
    })
})

// DOM

 
    h2Servicios.innerHTML = '<h2> Opciones Discoteca </h2>'



// Ejecuciones

productos.forEach((producto) => {
    const newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.innerHTML = `
                        <h3 class="cardTitle"> ${producto.nombre} </h3>
                        <img src="${producto.img}" class="cardImg">
                        <p class="cardDesc">${producto.titulo}</p>
                        <span class="cardPrice"> $${producto.precio}</span>
                        <button id="btnConsultar" class="button"> Consultar </button>
                        `
                        cardContainer.append(newCard);
})
console.log(productos)

// EVENTOS




 








//STORAGE & JSON
/*
const loginButton = document.querySelector('#login');
const logoutButton = document.querySelector('#logout');

const logUser = () => {
    const nombreUsuarioStorage = localStorage.getItem('nombreUsuario')
    //null = false
    //valor = true
    if(nombreUsuarioStorage){
        console.log(`Bienvenido ${nombreUsuarioStorage}`);
    }else{
        const nombreUsuario = prompt('Ingrese Su Nombre');
        localStorage.setItem('nombreUsuario', nombreUsuario);
        console.log(`Bienvenido ${nombreUsuario}`);
    }
}
const logoutUser = () => {
    console.log('Saludos');
    localStorage.removeItem('nombreUsuario');
}
loginButton.addEventListener('click', logUser);
logoutButton.addEventListener('click', logoutUser);
*/