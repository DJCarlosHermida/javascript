const searchInput = document.querySelector('#searchInput')
const bandasForm = document.querySelector('#bandasForm')
const results = document.querySelector('#bandasResults')
const chips = document.querySelector('#bandasChips')

const aniosDisponibles = bandasRock.map((banda) => Number(banda.anio))
const ANIO_MIN = Math.min(...aniosDisponibles)
const ANIO_MAX = Math.max(...aniosDisponibles)

const iniciales = (nombre) =>
    nombre
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((palabra) => palabra[0].toUpperCase())
        .join('')

const esAnio = (valor) => /^\d{4}$/.test(String(valor).trim())

const anioEnRango = (valor) => {
    const anio = Number(valor)
    return esAnio(valor) && anio >= ANIO_MIN && anio <= ANIO_MAX
}

const buscarPorAnio = (anio) => bandasRock.filter((banda) => banda.anio === String(anio).trim())

const crearCard = (banda) => {
    const card = document.createElement('article')
    card.className = 'bandas-card'
    card.innerHTML = `
        <div class="bandas-card__media">
            <img src="${banda.img}" alt="${banda.nombre}" class="bandas-card__img">
            <div class="bandas-card__fallback" hidden>${iniciales(banda.nombre)}</div>
        </div>
        <div class="bandas-card__body">
            <p class="bandas-card__year">${banda.anio}</p>
            <h2 class="bandas-card__name">${banda.nombre}</h2>
            <p class="bandas-card__copy">Si naciste en ${banda.anio}, ese mismo año se formó ${banda.nombre}.</p>
        </div>
    `

    const img = card.querySelector('.bandas-card__img')
    const fallback = card.querySelector('.bandas-card__fallback')
    img.addEventListener('error', () => {
        img.hidden = true
        fallback.hidden = false
    })

    return card
}

const mostrarMensaje = (html) => {
    results.innerHTML = html
}

const renderizar = (lista, anio) => {
    results.innerHTML = ''

    if (!lista.length) {
        mostrarMensaje(`
            <div class="bandas-empty bandas-empty--error">
                <p>No hay una banda para el año ${anio}.</p>
                <p>Probá con un año entre ${ANIO_MIN} y ${ANIO_MAX}.</p>
            </div>
        `)
        return
    }

    const intro = document.createElement('p')
    intro.className = 'bandas-results__intro'
    intro.textContent = 'Banda formada el año en que naciste'
    results.append(intro)

    const grid = document.createElement('div')
    grid.className = 'bandas-grid'
    lista.forEach((banda) => grid.append(crearCard(banda)))
    results.append(grid)
}

const ejecutarBusqueda = (consulta) => {
    const valor = String(consulta ?? searchInput.value).replace(/\D/g, '').slice(0, 4)
    searchInput.value = valor

    if (!valor) {
        results.innerHTML = ''
        return
    }

    if (!esAnio(valor) || !anioEnRango(valor)) {
        mostrarMensaje(`
            <div class="bandas-empty bandas-empty--error">
                <p>PAJERO</p>
                <p>poné un año válido</p>
            </div>
        `)
        return
    }

    renderizar(buscarPorAnio(valor), valor)
}

const enfocarPrompt = () => {
    searchInput.focus()
    searchInput.select()
}

searchInput.addEventListener('input', () => {
    searchInput.value = searchInput.value.replace(/\D/g, '').slice(0, 4)
})

bandasForm.addEventListener('submit', (event) => {
    event.preventDefault()
    ejecutarBusqueda()
    enfocarPrompt()
})

chips.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-query]')
    if (!chip) return
    ejecutarBusqueda(chip.dataset.query)
    enfocarPrompt()
})
