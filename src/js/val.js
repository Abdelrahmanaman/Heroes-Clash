coin = parseInt(localStorage.getItem("coin")) || 500
document.getElementById("coin").innerHTML = coin
const betInput = document.getElementById("input-bet")
const coinValue = document.getElementById("coin")


if (parseInt(localStorage.getItem("coin")))
{
coin = parseInt(localStorage.getItem("coin")) 
coinValue.textContent = coin
}
else
{
coinValue.textContent = coin
}

if (bet) {
bet.addEventListener("click", function () {
    const input = parseInt(betInput.value);

    if (!localStorage.getItem("playerImg"))
    {
        console.log("Vous n'avez pas sélectionner de joueur")
        alert("Vous n'avez pas sélectionner de joueur")
    }
    else 
    {
        if (!input)
        {
            console.log("Vous n'avez pas misé");
            alert("Vous n'avez pas misé")
        } 
        else if (input > coin || coin === 0) 
        {
            console.log("Vous n'avez pas assez d'argent !")
            alert("Vous n'avez pas assez d'argent !")
        } 
        else 
        {
            coin -= input;
            coinValue.textContent = coin
            localStorage.setItem("bet", input)
            localStorage.setItem("coin", coin)
        
            window.location.href = "game.html"
        }
    }
})
}