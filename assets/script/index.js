import {propiedades_venta} from './data/propiedades_venta.js' /* data importada */

const dashboardVenta = document.querySelector('#propiedades_venta')
const pintarVenta = () => {
  const cards = propiedades_venta.slice(0,3).map((propiedades) => {
    return `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedades.src}" class="card-img-top" alt="${propiedades.titulo}"/>
              <div class="card-body">
                <h5 class="card-title">${propiedades.titulo}</h5>
                <p class="card-text">${propiedades.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion} </p>
                <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedades.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                ${propiedades.smoke === true
                  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar </p>'}
                ${propiedades.pets === true
                ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}</p>
              </div>
            </div>
          </div>`
  })

dashboardVenta.innerHTML = cards.join('')
}


pintarVenta()


import {propiedades_alquiler} from './data/propiedades_alquiler.js' /* data importada */

const dashboard = document.querySelector('#propiedades_alquiler')

const pintarAlquiler = () => {
  const cards = propiedades_alquiler.slice(0,3).map((propiedades) => {
    return `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedades.src}" class="card-img-top" alt="${propiedades.titulo}"/>
              <div class="card-body">
                <h5 class="card-title">${propiedades.titulo}</h5>
                <p class="card-text">${propiedades.descripcion}</p>
                <p> <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion} </p>
                <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedades.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                ${propiedades.smoke === true
                  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar </p>'}
                ${propiedades.pets === true
                ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}</p>
              </div>
            </div>
          </div>`
  })

dashboard.innerHTML = cards.join('')
}

pintarAlquiler()
