function createComputerMove() {
    let randomRPS = 3
    let randomNum = Math.floor(Math.random() * randomRPS);
    if (randomNum == 0) {
        return 'rock'
    } else if (randomNum == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
function startGame() {
    function playRound(playerMove, computerMove) {
        if (playerMove == computerMove) {
            return `Tie! You both chose ${playerMove}.`
        } else if (playerMove == 'rock') {
            if (computerMove == 'paper') {
                ++computerScore
                return 'You lose! Paper beats rock.'
            } else {
                ++playerScore
                return 'You win! Rock beats scissors.'
            }
        } else if (playerMove == 'paper') {
            if (computerMove == 'scissors') {
                ++computerScore
                return 'You lose! Scissors beats paper.'
            } else {
                ++playerScore
                return "You win! Paper beats rock."
            }
        } else if (playerMove == 'scissors') {
            if (computerMove == "rock") {
                ++computerScore
                return "You lose! Rock beats scissors."
            } else {
                ++playerScore
                return "You win! Scissors beats paper"
            }
        } else {
            return "Please choose rock, paper, or scissors."
        }
    }

        let playerScore = 0
        let computerScore = 0 

    function playGame() {  

        console.log(playRound(prompt('Rock, Paper, or Scissors').trim().toLowerCase(), createComputerMove()));
        console.log(playRound(prompt('Rock, Paper, or Scissors').trim().toLowerCase(), createComputerMove()));
        console.log(playRound(prompt('Rock, Paper, or Scissors').trim().toLowerCase(), createComputerMove()));
        console.log(playRound(prompt('Rock, Paper, or Scissors').trim().toLowerCase(), createComputerMove()));
        console.log(playRound(prompt('Rock, Paper, or Scissors').trim().toLowerCase(), createComputerMove()));

        function getWinner() {
                if (playerScore > computerScore) {
                    return "You win the game!"
                } else if (playerScore == computerScore) {
                    return "You tied with the computer!"
                } else if (playerScore < computerScore) {
                    return "You lose the game!"
                } else {
                    return "Error"
                }    
        }
        let results = `Your score: ${playerScore}\nComputer Score: ${computerScore}`;
        console.log(getWinner())
        console.log(results);

    }    
    playGame();
}

startGame();