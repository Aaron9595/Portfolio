
import { films } from '/assets/films.js'
import { people } from '/assets/people.js'
import { planets } from '/assets/planets.js'
import { starships } from '/assets/starships.js'
import { species } from '/assets/species.js'
import { vehicles } from '/assets/vehicles.js'
import { senatorData } from '/assets/senators.js'


let speciesList = document.querySelector('#species-list')

species.forEach((species) => {
    let listItem = document.createElement('li')
    listItem.textContent = species.name
    speciesList.appendChild(listItem)
})

let openingCrawl = document.querySelector('#opening-crawl')

let listItem = document.createElement('li')
listItem.textContent = films[0].opening_crawl
openingCrawl.appendChild(listItem)


let movieTitle = document.querySelector('#movie-title')

let movie = document.createElement('li')
movie.textContent = films[0].title
movieTitle.appendChild(movie)

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === 'R')

const democrats = senators.filter(senator => senator.party === 'D')

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)