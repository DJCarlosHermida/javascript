const cardContainer = document.querySelector('#cardContainer')

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

renderizarProductos()

/* STORAGE  */

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
        inputLabel: 'la consulta se enviará al email ingresado',
        inputPlaceholder: 'ingresar email'
      }).then((result) => {
        if (result.value) {
            console.log("Result: " + result.value);
            localStorage.setItem('emailUsuario', result.value)
 
        }
     });
      
}

if (nombreUsuarioEnStorage && emailUsuarioEnStorage) {
    setTimeout(() => {
        Swal.fire(`Hola de nuevo ${nombreUsuarioEnStorage}`);
    }, 1500)
} else {
      alertUser();

}

/* JSON */
console.log('Desde Javascript: ', servicios);

const serviciosEnJSON = JSON.stringify(servicios)




