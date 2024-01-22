const pRoundOne = document.getElementById("p-round1")
const pRoundTwo = document.getElementById("p-round2")
const pRoundThree = document.getElementById("p-round3")
const cRoundOne = document.getElementById("c-round1")
const cRoundTwo = document.getElementById("c-round2")
const CRoundThree = document.getElementById("c-round3")

//* Function to trigger the rounds color results

pRoundOne.addEventListener("click", function(){
    pRoundTwo.style.backgroundColor = "Green"
})

function roundOne(winner){
    winner === player ? (pRoundOne.style.backgroundColor = "green", cRoundOne.style.backgroundColor = "red")
    :  (pRoundOne.style.backgroundColor = "red", cRoundOne.style.backgroundColor = "green");
}
function roundTwo(winner){
    winner === player ? (pRoundTwo.style.backgroundColor = "green", cRoundTwo.style.backgroundColor = "red")
    :  (pRoundTwo.style.backgroundColor = "red", cRoundTwo.style.backgroundColor = "green");
}

function roundThree(winner){
    winner === player ? (pRoundThree.style.backgroundColor = "green", CRoundThree.style.backgroundColor = "red")
    :  (pRoundThree.style.backgroundColor = "red", CRoundThree.style.backgroundColor = "green");
}