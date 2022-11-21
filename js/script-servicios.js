console.log('Tercera entrega - Proyecto JavaScript - DOM + Eventos + Storage & JSON + Workshop');
console.log("DOM + Eventos + Storage + Workshop")

// SERVICIOS

const h2Servicios = document.getElementById('h2Servicios')
    h2Servicios.innerHTML = '<h2> Opciones Discoteca </h2>'
console.log(h2Servicios);

const cardContainer = document.querySelector('#cardContainer')

productos.forEach((producto) => {
    const newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.innerHTML = `
                        <h3 class="cardTitle"> ${producto.nombre} </h3>
                        <img src="${producto.img}" class="cardImg">
                        <p class="cardDesc">${producto.titulo}</p>
                        <span class="cardPrice"> $${producto.precio}</span>
                        <button class="buttonCTA"> Consultar </button>
                        `
                        cardContainer.append(newCard);
})
console.log(productos)













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