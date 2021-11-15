function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}


function chooseWinner(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return "Tie Game";
    }
    else if (playerChoice === "rock") {
        
        return (computerChoice === "scissors") ? "You Won, Rock beats Scissors" : "You Lose, Paper beats Rock";
    }
    else if (playerChoice === "scissors") {
        return (computerChoice === "rock") ? "You Lose, Rock beats Scissors" : "You Won, Scissors beat Paper";
    }
    else if (playerChoice === "paper") {
        return (computerChoice === "scissors") ? "You Lose, Scissors beat Paper" : "You Won, Paper beats Rock";
    }
    else {
        alert("Invalid Input, Try Again");
        return chooseWinner(prompt("Rock, Paper, Scissors: "), computerChoice);
    }
}


function game() {
    let userPoint = 0;
    let computerPoint = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt(`Round ${i+1} of 5. \nRock, Paper or Scissors:`);
        let roundWinner = chooseWinner(playerChoice, computerPlay());
        console.log(roundWinner);
        decision = roundWinner.split(",")[0];
        console.log("      ");
        if (decision === "You Won") {
            userPoint++;
        }
        else if (decision ===  "You Lose") {
            computerPoint++;
        }

        alert(`${roundWinner} \n User: ${userPoint} \n Com: ${computerPoint}`);
    }


    let winner = (userPoint > computerPoint) ? "You won the game" 
                :(computerPoint > userPoint) ? "You lost the game" 
                :"Tie Game";

    alert(`User: ${userPoint} \n Com: ${computerPoint} \n ${winner}`);
    console.log(`%cYour Total Points: ${userPoint}`, "font-size: 15px;");
    console.log(`%cCom's Total Points: ${computerPoint}`, "font-size: 15px;");
    console.log(`%c${winner}`, "font-size: 20px;");
}

let round = 1;
let userScore = 0;
let comScore = 0;


let buttons = Array.from(document.querySelectorAll(".choice"));
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        round++;
        document.querySelector(".final").textContent = "";
        const mainDiv = document.querySelector(".info"); 
        const scoreInfo = document.querySelector(".score-info");
        const roundInfo = document.querySelector(".round-info");

        let userChoice = button.getAttribute("data-option");
        let comChoice = computerPlay();
        let winningMsg = chooseWinner(userChoice, comChoice);
        let winner = winningMsg.split(",")[0];

        

        if (winner === "You Won") {
            userScore++;
        }
        else if (winner ===  "You Lose") {
            comScore++;
        }

        if (round >= 6) {
            let gameWinner = (userScore > comScore) ? "You Won The Game"
                            :(comScore > userScore) ? "You Lost The Game"
                            : "Tie Game";
            const announcement = document.querySelector(".final");
            announcement.textContent = gameWinner;
            scoreInfo.textContent = `Your Score: ${userScore} | Com Score: ${comScore}`;
            const finalResult = document.createElement("p");
            finalResult.textContent += winningMsg;
            mainDiv.textContent = '';
            mainDiv.appendChild(finalResult);
            round = 1;
            userScore = 0;
            comScore = 0;
            return;

        }

        scoreInfo.textContent = `Your Score: ${userScore} | Com Score: ${comScore}`;
        roundInfo.textContent = `Round: ${round}`;

        const finalResult = document.createElement("p");
        finalResult.textContent += winningMsg;

        mainDiv.textContent = '';
        mainDiv.appendChild(finalResult);
        
        

        return;
    });
});