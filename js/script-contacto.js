

const sendForm = document.querySelector('#sendForm')
    sendForm.addEventListener('click', () => {
        let timerInterval
Swal.fire({
  title: 'Enviando Formulario',
  html: 'Ésta ventana se cerrará automaticamente <b></b>.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    Swal.fire('Formulario Enviado a la barra de dirección')
  }
})
    })
