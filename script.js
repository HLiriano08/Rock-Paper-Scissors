const game1 = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let rando = game1[Math.floor(Math.random()*game1.length)];
    return rando;
}

function playRound () {
    if (playerSelection == "rock" && computerSelection == "Paper") {
    return("You lose! Paper beats rock")
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return("You win! Rock beats Scissors")
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
    return("You win! Paper beats Rock")
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return("You lose! Scissors beats Paper")
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return("You win! Scissors beats Paper")    
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return("You lose! Rock beats Scissors")
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
    return("It's a tie")
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
    return("It's a tie")
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    return("It's a tie")
    }
    else {
        return("error")
    }
}

function twoRoundWin () {
    x = 0
    y = 0
    for (let i1 = 0; i1 < 3; i1++) {
        if (i1 < 3) {
            playerSelection = prompt("Rock, Paper, Scissors? ").toLowerCase();
            computerSelection = getComputerChoice();
            console.log(playRound());
            if (playerSelection == "rock" && computerSelection == "Scissors") {
                x++
            } if (playerSelection == "paper" && computerSelection == "Rock") {
                x++
            } if (playerSelection == "scissors" && computerSelection == "Paper") {
                x++
            } if (playerSelection == "rock" && computerSelection == "Paper") {
                y++
            } if (playerSelection == "paper" && computerSelection == "Scissors") {
                y++
            } if (playerSelection == "scissors" && computerSelection == "Rock") {
                y++
            } if (playerSelection == "rock" && computerSelection == "Rock") {
                i1--
            } if (playerSelection == "paper" && computerSelection == "Paper") {
                i1--
            } if (playerSelection == "scissors" && computerSelection == "Scissors") {
                i1--
            } if (x == 2) {
                return("You Won the Game!")
            } if (y == 2) {
                return("Computer wins, You lost!") 
            }
        } 
    };
    
}

console.log(twoRoundWin())

/* function game () {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playerSelection = prompt("Rock, Paper, Scissors? ").toLowerCase();
            computerSelection = getComputerChoice();
            console.log(playRound());
        } 
    }
    return "The Game is Over" 
} */

// console.log(game())