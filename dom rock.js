let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || { wins: 0, loses: 0, ties: 0 };

updateScore();

function myFunc1(playerMove) {
    const randomValue = Math.random();
    let computerMove = '';

    if (randomValue < 1 / 3) {
        computerMove = "rock";
    } else if (randomValue < 2 / 3) {
        computerMove = "paper";
    } else {
        computerMove = "scissor";
    }

    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'It\'s a tie!';
        } else if (computerMove === 'paper') {
            result = 'You lose!';
        } else {
            result = 'You win!';
        }
    } else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'You lose!';
        } else if (computerMove === 'paper') {
            result = 'You win!';
        } else {
            result = 'It\'s a tie!';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        } else if (computerMove === 'paper') {
            result = 'It\'s a tie!';
        } else {
            result = 'You lose!';
        }
    }

    if (result === 'You win!') {
        scoreCard.wins += 1;
    } else if (result === 'You lose!') {
        scoreCard.loses += 1;
    } else {
        scoreCard.ties += 1;
    }

    localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
    updateScore();
    displayResult(result, playerMove, computerMove);
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${scoreCard.wins}, Loses: ${scoreCard.loses}, Ties: ${scoreCard.ties}`;
}

function displayResult(result, playerMove, computerMove) {
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You picked ${playerMove}, computer picked ${computerMove}`;
}

function resetScore() {
    scoreCard = { wins: 0, loses: 0, ties: 0 };
    localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
    updateScore();
}





































// let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || { wins: 0, loses: 0, ties: 0 };


// updateScore();

//         function myFunc1(playGame) {
//             const ranMove = Math.random();
//             let comMove = '';
//             if (ranMove >= 0 && ranMove < 1/3) {
//                 comMove = "rock";
//             } else if (ranMove >= 1/3 && ranMove < 2/3) {
//                 comMove = "paper";
//             } else {
//                 comMove = "scissor";
//             }

//             let result = '';
//             if (playGame === 'rock') {
//                 if (comMove === 'rock') {
//                     result = 'you tie!';
//                 } else if (comMove === 'paper') {
//                     result = 'you lose!';
//                 } else {
//                     result = 'you win!';
//                 }
//             } else if (playGame === 'scissor') {
//                 if (comMove === 'rock') {
//                     result = 'you lose!';
//                 } else if (comMove === 'paper') {
//                     result = 'you win!';
//                 } else {
//                     result = 'you tie!';
//                 }
//             } else if (playGame === 'paper') {
//                 if (comMove === 'rock') {
//                     result = 'you win!';
//                 } else if (comMove === 'paper') {
//                     result = 'you tie!';
//                 } else {
//                     result = 'you lose!';
//                 }
//             }

//             if (result === 'you win!') {
//                 scoreCard.wins += 1;
//             } else if (result === 'you lose!') {
//                 scoreCard.loses += 1;
//             } else {
//                 scoreCard.ties += 1;
//             }

//             localStorage.setItem('scoreCard', JSON.stringify(scoreCard));

// updateScore();
        
// document.querySelector('.js-result').innerHTML = result;
// document.querySelector('.js-move').innerHTML = `you pick ${playGame} computer pick ${comMove}`;

//             alert(`You picked ${playGame}, computer picked ${comMove}, and ${result}. 
// Wins: ${scoreCard.wins}, Loses: ${scoreCard.loses}, Ties: ${scoreCard.ties}`);
//          }
// function updateScore(){
//     document.querySelector('.js-score').innerHTML = `Wins: ${scoreCard.wins}, Loses: ${scoreCard.loses}, Ties: ${scoreCard.ties}`;
// }
//         function resetScore() {
//             scoreCard = { wins: 0, loses: 0, ties: 0 };
//             localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
//             alert('Scores have been reset! Wins: 0, Loses: 0, Ties: 0');
//             updateScore();
//         };
