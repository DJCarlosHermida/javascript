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
            <button class="button" data-id="${producto.nombre}" title="Enviar Consulta"> Consultar </button>
        `
        cardContainer.append(newCard)
    })
    const buttons = document.querySelectorAll('.button')
    buttons.forEach((button) => {
        button.addEventListener('click', (btn) => {
            Swal.fire(
                'Consulta enviada',
                'En breve nos comunicaremos contigo',
                'success'
                );
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
            if(item.nombre.toLowerCase() === searchInput.value.toLowerCase()){
                return item.nombre
            }
            
          })
      
        if(bandasFilter.length){
            bandasFilter.forEach(item => console.log(item));
    
            renderizarBanda();
        }else{
            Swal.fire(searchInput.value + " " + "no está en la lista")
        }
    }else{
        bandasFilter = bandasRock;
        //renderizarBanda();
    }
  
})

// Ejecuciones
renderizarProductos()
//renderizarBanda()

/* STORAGE  OK*/

let nombreUsuarioEnStorage = localStorage.getItem('nombreUsuario')
let emailUsuarioEnStorage = localStorage.getItem('emailUsuario')

function alertUser(){
    Swal.fire({
        title: 'Para continuar es necesario ingresar algunos datos:',
        input: 'text',
        inputLabel: 'Nombre',
        inputPlaceholder: 'Se ingresa por únca vez'
      }).then((result) => {
        if (result.value) {
            //console.log("Result usuario: " + result.value);
            localStorage.setItem('nombreUsuario', result.value)
            alertEmail()
        }
     });
}

function alertEmail(){
    Swal.fire({
        title: 'Ingrese su email',
        input: 'email',
        inputLabel: 'se enviará la consulta que realice al email ingresado',
        inputPlaceholder: 'ingresar email'
      }).then((result) => {
        if (result.value) {
            console.log("Result: " + result.value);
            localStorage.setItem('emailUsuario', result.value)
 
        }
     });
      
}

if (nombreUsuarioEnStorage && emailUsuarioEnStorage) {
    Swal.fire(`Hola de nuevo ${nombreUsuarioEnStorage}`);
} else {
      alertUser();

}
