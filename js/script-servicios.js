// Select
const searchInput = document.querySelector('#searchInput')
const searchButton = document.querySelector('#searchButton')
const cardContainer = document.querySelector('#cardContainer')

// Funciones
const renderizarProductos = () => {
    servicios.forEach((producto) => {
        const newCard = document.createElement('div') 
        newCard.className = 'card'
        newCard.innerHTML = `
            <h3 class="cardTitle"> Servicio ${producto.nombre} </h3>
            <img src="${producto.img}" class="cardImg">
            <p class="cardDesc"> ${producto.titulo}</p>
            <span class="cardPrice"> $${producto.precio} </span>
            <button class="button" data-id="${producto.nombre}"> Agregar al Carrito </button>
        `
        cardContainer.append(newCard)
    })
    const buttons = document.querySelectorAll('.button')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target);
        })
    })
}


// Listeners
searchButton.addEventListener('click', () => {
    console.log(searchInput.value);
})

// Ejecuciones
renderizarProductos()


/* STORAGE */

const nombreUsuarioEnStorage = localStorage.getItem('nombreUsuario')

if (nombreUsuarioEnStorage ) {
    console.log(`Bienvenido ${nombreUsuarioEnStorage}`);
} else {
    const nombreUsuario = prompt('Ingrese su nombre')
    localStorage.setItem('nombreUsuario', nombreUsuario)
    console.log(`Bienvenido ${nombreUsuario}`);
}