import { propiedades_alquiler } from "./data/propiedades_alquiler.js";

const dasboard = document.querySelector("#propiedades_alquiler")

const pintarAlquiler = () => {
    const cards = propiedades_alquiler.map((propiedades) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedades.src}" class="card-img-top" alt="${propiedades.nombre}"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedades.nombre}</h5>
                        <p class="card-text">${propiedades.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${propiedades.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedades.baños} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedades.costo}</p>
                        ${propiedades.smoke === true
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                        }
                        ${propiedades.pets === true
                            ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`
                        }
                    </div>
                </div>
            </div>
        `
    })
     dasboard.innerHTML = cards.join ("")
}

pintarAlquiler()

