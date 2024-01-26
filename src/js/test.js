
async function recuperateAPI_ByName() {
let nameHero = document.getElementById("inputSearch").value
console.log(nameHero)
const apiKey = 1069157230869552
const url = `https://superheroapi.com/api/${apiKey}/search/${nameHero}`

const result = await fetch(url)
const resp = await result.json()
console.log(resp)

let divSup = document.querySelector(".selectedHeroSup")
    
while (divSup)
{
    divSup.remove()
    divSup = document.querySelector(".selectedHeroSup")
}

for (i=0; i< resp.results.length; i++)
{
    let selectedHero = document.querySelector(".selectedHero-search")
    let selectedHeroSup = document.createElement("div")
    selectedHeroSup.classList.add("selectedHeroSup")
    
    selectedHeroSup.innerHTML = 
    `
        <div class="selectedHero-player">
            <img id="displayed-hero${i}" class="selectedHero-player-img selectedHero-player1-img" src="../assets/img/unknown.png"
            alt="Image Hero" />
            <p id="nameHero${i}" style="-webkit-text-stroke: 1px #252D42; font-size: 2em; color: white"></p>
            <button id="detailsSuperHero" title="Accéder aux détails des SuperHeros">+</button>
            <div class="selectedHero-player-powerStats selectedHero-player1-powerStats">
                
                <ul class="selectedHero-player-powerStats-list selectedHero-player-powerStats-liste1">
                    <li id="intelligence${i}">Intelligence : </li>
                    <li id="strength${i}">Strength : </li>
                    <li id="speed${i}">Speed : </li>
                </ul>
                <ul class="selectedHero-player-powerStats-list selectedHero-player-powerStats-liste2">
                    <li id="durability${i}">Durability : </li>
                    <li id="power${i}">Power : </li>
                    <li id="combat${i}">Combat : </li>
                </ul>
            </div>
            <button id="addSuperHero" title="Ajouter à ma liste de SuperHeros">>></button>
        </div>
    `
    
    selectedHero.appendChild(selectedHeroSup)

    let nameSuperHero = document.getElementById(`nameHero${i}`)
    let intelligence = document.getElementById(`intelligence${i}`)
    let power = document.getElementById(`power${i}`)
    let durability = document.getElementById(`durability${i}`)
    let speed = document.getElementById(`speed${i}`)
    let combat = document.getElementById(`combat${i}`)
    let strength = document.getElementById(`strength${i}`)
    let img = document.getElementById(`displayed-hero${i}`)

    img.src = resp.results[i].image.url
    nameSuperHero.textContent = `${resp.results[i].name}`
    intelligence.textContent = `Intelligence: ${resp.results[i].powerstats.intelligence}`
    strength.textContent = `Strength: ${resp.results[i].powerstats.strength}`
    speed.textContent = `Speed: ${resp.results[i].powerstats.speed}`
    durability.textContent = `Durability: ${resp.results[i].powerstats.durability}`
    power.textContent = `Power: ${resp.results[i].powerstats.power}`
    combat.textContent = `Combat: ${resp.results[i].powerstats.combat}`
    }
}


async function recuperateAPI() {
    const apiKey = 1069157230869552
    const url = `https://superheroapi.com/api/${apiKey}/`

const result = await fetch(url)
const resp = await result.json()
console.log(resp)
}




