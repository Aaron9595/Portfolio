import { pokemon } from './pokemon.js'

// console.log(pokemon)

const pokeContainer = document.querySelector('#container')

    // console.log(mon.ename)
const frontDiv = (mon) => {
    let fig = document.createElement('figure')
    fig.className = "card__face  card__face--front"
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    img.src = `img/${mon.id}${mon.ename}.png`
    cap.textContent = mon.ename
    fig.appendChild(img)
    fig.appendChild(cap)
    return fig
}

const backDiv = (mon) => {
    let backContainer = document.createElement('div')
    backContainer.className = "card__face card__face--back"
    let backName = document.createElement('p')
    let attack = document.createElement('p')
    let defense = document.createElement('p')
    let hp = document.createElement('p')
    let speed = document.createElement('p')
    attack.textContent = `Attack: ${mon.base.Attack}`
    defense.textContent = `Defense: ${mon.base.Defense}`
    hp.textContent = `HP: ${mon.base.HP}`
    speed.textContent = `Speed: ${mon.base.Speed}`
    backContainer.appendChild(backName)
    backContainer.appendChild(attack)
    backContainer.appendChild(defense)
    backContainer.appendChild(hp)
    backContainer.appendChild(speed)
    return backContainer
}

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(frontDiv(poke))
    card.appendChild(backDiv(poke))
    pokeContainer.appendChild(card)
    card.addEventListener( 'click', function() {
        console.log(poke.ename)
        card.classList.toggle('is-flipped');
    });
})