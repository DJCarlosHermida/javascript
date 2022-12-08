const sendForm = document.querySelector('#sendForm')
    sendForm.addEventListener('click', () => {
        let timerInterval
Swal.fire({
  title: 'Enviando Formulario',
  html: 'Ésta ventana se cerrará automaticamente <b></b>.',
  timer: 1500,
  timerProgressBar: true,
  didOpen: () => {
    setTimeout (() => {
      Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)

    })
    
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    /* SetTimeOut */
    
    setTimeout(() => {
      Swal.fire('Formulario Enviado a la barra de dirección')

    },1000)
    
  }
})
    })



