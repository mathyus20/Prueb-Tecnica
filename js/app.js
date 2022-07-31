function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152)
    fetchData(ramdom)
})

const fetchData = async (id) => {
    try {
        console.log(id)
        
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        
        console.log(data)

        const Aleartorio = {
            img: `https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg`,
            especie: data.especies,
            creacion: data.created,
            nombre: data.name,
            años: data.id,
            locacion: data.location,
            estado: data.status,
            episodio: data.episode,
        }

        pintarCard(Aleartorio)
    
    } catch (error) {
        console.log(error)
    }
} 

const pintarCard = Aleartorio => {
    const flex = document.querySelector('.flex')
    const template = document.getElementById('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', Aleartorio.image)
    // clone.querySelector('.card-body-img').setAttribute('src', Aleartorio.imgJuego)
    clone.querySelector('.card-body-title').innerHTML = `${Aleartorio.nombre} <span>${Aleartorio.especie}especie</span>`
    clone.querySelector('.card-body-text').textContent = Aleartorio.años + ' años'
    clone.querySelectorAll('.card-footer-info h3')[0].textContent = Aleartorio.locacion + 'K'
    clone.querySelectorAll('.card-footer-info h3')[1].textContent = Aleartorio.estado + 'K'
    clone.querySelectorAll('.card-footer-info h3')[2].textContent = Aleartorio.episodio + 'K'

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}

