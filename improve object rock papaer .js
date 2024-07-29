
const scoreCard = {
    wins: 0,
    loses: 0,
    ties: 0
};

let lastGame = {
    playGame: '',
    comMove: '',
    result: ''
};

function myFunc1(playGame) {
    const ranMove = Math.random();
    let comMove = '';
    if (ranMove >= 0 && ranMove < 1 / 3) {
        comMove = "rock";
    } else if (ranMove >= 1 / 3 && ranMove < 2 / 3) {
        comMove = "paper";
    } else if (ranMove >= 2 / 3 && ranMove < 1) {
        comMove = "scissor";
    }

    let result = '';
    if (playGame === 'rock') {
        if (comMove === 'rock') {
            result = 'you tie!';
        } else if (comMove === 'paper') {
            result = 'you loss!';
        } else if (comMove === 'scissor') {
            result = 'you win!';
        }
    } else if (playGame === 'scissor') {
        if (comMove === 'rock') {
            result = 'you loss!';
        } else if (comMove === 'paper') {
            result = 'you win!';
        } else if (comMove === 'scissor') {
            result = 'you tie!';
        }
    } else if (playGame === 'paper') {
        if (comMove === 'rock') {
            result = 'you win!';
        } else if (comMove === 'paper') {
            result = 'you tie!';
        } else if (comMove === 'scissor') {
            result = 'you loss!';
        }
    }

    if (result === 'you win!') {
        scoreCard.wins += 1;
    } else if (result === 'you loss!') {
        scoreCard.loses += 1;
    } else if (result === 'you tie!') {
        scoreCard.ties += 1;
    }

    lastGame.playGame = playGame;
    lastGame.comMove = comMove;
    lastGame.result = result;

    alert(`You pick ${playGame}, computer pick ${comMove}, and ${result}
Wins=${scoreCard.wins}, Loses=${scoreCard.loses}, Ties=${scoreCard.ties}`);
}

function resetScore() {
    scoreCard.wins = 0;
    scoreCard.loses = 0;
    scoreCard.ties = 0;

    alert(`Scores have been reset!
Last game: You pick ${lastGame.playGame}, computer pick ${lastGame.comMove}, and ${lastGame.result}
Wins=${scoreCard.wins}, Loses=${scoreCard.loses}, Ties=${scoreCard.ties}`);
}













// const scoreCard = {
//     wins: 0,
//     loses: 0,
//     ties: 0
// };

// function myFunc1(playGame) {
//     const ranMove = Math.random();
//     let comMove = '';
//     if (ranMove >= 0 && ranMove < 1/3) {
//         comMove = "rock";
//     } else if (ranMove >= 1/3 && ranMove < 2/3) {
//         comMove = "paper";
//     } else if (ranMove >= 2/3 && ranMove < 1) {
//         comMove = "scissor";
//     }

//     let result = '';
//     if (playGame === 'rock') {
//         if (comMove === 'rock') {
//             result = 'you tie!';
//         } else if (comMove === 'paper') {
//             result = 'you lose!';
//         } else if (comMove === 'scissor') {
//             result = 'you win!';
//         }
//     } else if (playGame === 'scissor') {
//         if (comMove === 'rock') {
//             result = 'you lose!';
//         } else if (comMove === 'paper') {
//             result = 'you win!';
//         } else if (comMove === 'scissor') {
//             result = 'you tie!';
//         }
//     } else if (playGame === 'paper') {
//         if (comMove === 'rock') {
//             result = 'you win!';
//         } else if (comMove === 'paper') {
//             result = 'you tie!';
//         } else if (comMove === 'scissor') {
//             result = 'you lose!';
//         }
//     }

//     if (result === 'you win!') {
//         scoreCard.wins += 1;
//     } else if (result === 'you lose!') {
//         scoreCard.loses += 1;
//     } else if (result === 'you tie!') {
//         scoreCard.ties += 1;
//     }

//     alert(`You pick ${playGame}, computer picks ${comMove}, and ${result}. 
// Wins = ${scoreCard.wins}, Loses = ${scoreCard.loses}, Ties = ${scoreCard.ties}`);
// }

// function resetScore() {
//     scoreCard.wins = 0;
//     scoreCard.loses = 0;
//     scoreCard.ties = 0;
//     alert('Scores have been reset!');
// }
