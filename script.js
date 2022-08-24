const game1 = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let rando = game1[Math.floor(Math.random()*game1.length)];
    return rando;
}

function playRound () {
    if (playerSelection == "rock" && computerSelection == "Paper") {
    return(console.log("You lose! Paper beats rock"))
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
    return(console.log("You win! Rock beats Scissors"))
    } else if (playerSelection == "raper" && computerSelection == "Rock") {
    return(console.log("You win! Paper beats Rock"))
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
    return(console.log("You lose! Scissors beats Paper"))
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
    return(console.log("You win! Scissors beats Paper"))    
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
    return(console.log("You lose! Rock beats Scissors"))
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
    return(console.log("It's a tie"))
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
    return(console.log("It's a tie"))
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
    return(console.log("It's a tie"))
    }
    else {
        return("error")
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            playerSelection = prompt("Rock, Paper, Scissors? ").toLowerCase();
            computerSelection = getComputerChoice();
            console.log(playRound());
        } 
    }

    return "The Game is Over"
}

console.log(game())