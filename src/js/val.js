let coin = parseInt(localStorage.getItem("coin")) || 100;
document.getElementById("coin").innerHTML = coin;
const betInput = document.getElementById("input-bet");
const coinValue = document.getElementById("coin");
const bet = document.getElementById("btnBet")
bet.addEventListener("click", function () {
    const input = parseInt(betInput.value);

    if (input > coin || coin === 0) {
        console.log("Vous n'avez pas assez d'argent !");
    } else {
        coin -= input;
        coinValue.textContent = coin;

        localStorage.setItem("coin", coin);

        window.location.href = "game.html";
    }
});

function afficherMessage(){
    const resultMessage = document.getElementById("resultMessage")
    
}


