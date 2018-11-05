import { senatorData } from '/assets/senators.js'

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === 'R')
const democrats = senators.filter(senator => senator.party === 'D')

const maleSenators = senators.filter(senator => senator.gender === 'M')
const femaleSenators = senators.filter(senator => senator.gender === 'F')

const mostLoyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)
const mostLoyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    // Need to download photo of senator to replace invalid picture in the API
    // if(senator.govtrack_id === '412743') {
    //     senator.imgURL = `https://localhost:5500/assets/cindy.jpeg`
    // }
    return senator
})

// console.log(senWithPics)

// console.log(`There are ${maleSenators.length} male senators and ${femaleSenators.length} female senators in the Senate.`)
let pictureDiv = document.querySelector('.container')

senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
})