// Select
const searchInput = document.querySelector('#searchInput')
const searchButton = document.querySelector('#searchButton')
const cardContainer = document.querySelector('#cardContainer')
const cardRock = document.querySelector('#cardRock')
let bandasFilter = bandasRock;

// Funciones
// servicios
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


// bandas rock

const renderizarBanda = () => {
    cardRock.innerHTML = "";
    bandasFilter.forEach((banda) => {
        const newBand = document.createElement('div')
        newBand.className = 'cardRock'
        newBand.innerHTML = `
            <h4 class="cardTitle">${banda.nombre} </h4>
            <img src="${banda.img}" class="bandaImg">
            <p class="bandaDesc"> ${banda.anio}</p>
        `
        cardRock.append(newBand)
    })
    
    // const buttonBand = document.querySelectorAll('buttonBand')
    //       buttonBand.addEventListener('click', (e) => {
    //         console.log(e.target)
    //       })
}

// Listeners
searchButton.addEventListener('click', () => {
    if(searchInput.value != ""){
        bandasFilter = bandasRock.filter((item, index, arr) => {
            if(item.anio === searchInput.value){
                return item.anio
            }
            if(item.nombre === searchInput.value){
                return item.nombre
            }
            
          })
      
        if(bandasFilter.length){
            bandasFilter.forEach(item => console.log(item));
    
            renderizarBanda();
        }else{
            alert(searchInput.value + " " + "no está en la lista");
        }
    }else{
        bandasFilter = bandasRock;
        renderizarBanda();
    }
  
})

// Ejecuciones
renderizarProductos()
renderizarBanda()


/* STORAGE */

const nombreUsuarioEnStorage = localStorage.getItem('nombreUsuario')

if (nombreUsuarioEnStorage ) {
    console.log(`Bienvenido ${nombreUsuarioEnStorage}`);
} else {
    const nombreUsuario = prompt('Ingrese su nombre')
    localStorage.setItem('nombreUsuario', nombreUsuario)
    console.log(`Bienvenido ${nombreUsuario}`);
}

/* BANDAS ROCK */

