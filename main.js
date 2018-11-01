
import { films } from '/assets/films.js'
import { people } from '/assets/people.js'
import { planets } from '/assets/planets.js'
import { starships } from '/assets/starships.js'
import { species } from '/assets/species.js'
import { vehicles } from '/assets/vehicles.js'



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

// const senators = senatorData.results[0].members

// const republicans = senators.filter(senator => senator.party === 'R')
// const democrats = senators.filter(senator => senator.party === 'D')

// const maleSenators = senators.filter(senator => senator.gender === 'M')
// const femaleSenators = senators.filter(senator => senator.gender === 'F')

// const mostLoyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)
// const mostLoyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

// const senWithPics = senators.map(senator => {
//     senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
//     return senator
// })

// console.log(senWithPics)

// // console.log(`There are ${maleSenators.length} male senators and ${femaleSenators.length} female senators in the Senate.`)
// let pictureDiv = document.querySelector('container')

// senWithPics.forEach(senator => {
//     let senatorPic = document.createElement('img')
//     senatorPic.src = senator.imgURL
//     pictureDiv.appendChild(senatorPic)
// })

