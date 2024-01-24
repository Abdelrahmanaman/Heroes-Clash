let coin = parseInt(localStorage.getItem("coin")) || 500;
document.getElementById("coin").innerHTML = coin;
const betInput = document.getElementById("input-bet");
const coinValue = document.getElementById("coin");
const bet = document.getElementById("btnBet")

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

    if (!input) {
        console.log("Vous n'avez pas misé");
    } else if (input > coin || coin === 0) {
        console.log("Vous n'avez pas assez d'argent !");
    } else {
        coin -= input;
        coinValue.textContent = coin;

        localStorage.getItem("coin", coin);

        window.location.href = "game.html";
    }
});

function afficherMessage(){
    const resultMessage = document.getElementById("resultMessage")
    if (declarerWinner) {
        resultMessage.textContent = "Congratulations! You are the winner!";
    } else {
        resultMessage.textContent = "Looooooooser!";
    }
}



