// let coin = parseInt(localStorage.getItem("coin")) || 100;
// document.getElementById("coin").innerHTML = coin;
// const betInput = document.getElementById("input-bet");
// const coinValue = document.getElementById("coin");
// // const bet = document.getElementById("btnBet")
const betInput = document.getElementById("input-bet");
const btnBet = document.getElementById("btnBet");
const coinValue = document.getElementById("coin");


if (parseInt(localStorage.getItem("coin")))
{
coin = parseInt(localStorage.getItem("coin")) 
coinValue.textContent = coin;
}
else
{
coinValue.textContent = coin;
}



bet.addEventListener("click", function () {
    const input = parseInt(betInput.value);
    if (!input)
    {
      console.log("Vous n'avez pas misé !");
    }
    else 
    {
    localStorage.setItem("bet", input);

    if (input > coin || coin === 0) {
        console.log("Vous n'avez pas assez d'argent !");
    } else {
        coin -= input;
        coinValue.textContent = coin;

        localStorage.setItem("coin", coin);

        window.location.href = "game.html";
    }
  }
});

function afficherMessage(){
    const resultMessage = document.getElementById("resultMessage")
    
}


