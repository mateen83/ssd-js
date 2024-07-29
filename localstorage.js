let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || { wins: 0, loses: 0, ties: 0 };

        function myFunc1(playGame) {
            const ranMove = Math.random();
            let comMove = '';
            if (ranMove >= 0 && ranMove < 1/3) {
                comMove = "rock";
            } else if (ranMove >= 1/3 && ranMove < 2/3) {
                comMove = "paper";
            } else {
                comMove = "scissor";
            }

            let result = '';
            if (playGame === 'rock') {
                if (comMove === 'rock') {
                    result = 'you tie!';
                } else if (comMove === 'paper') {
                    result = 'you lose!';
                } else {
                    result = 'you win!';
                }
            } else if (playGame === 'scissor') {
                if (comMove === 'rock') {
                    result = 'you lose!';
                } else if (comMove === 'paper') {
                    result = 'you win!';
                } else {
                    result = 'you tie!';
                }
            } else if (playGame === 'paper') {
                if (comMove === 'rock') {
                    result = 'you win!';
                } else if (comMove === 'paper') {
                    result = 'you tie!';
                } else {
                    result = 'you lose!';
                }
            }

            if (result === 'you win!') {
                scoreCard.wins += 1;
            } else if (result === 'you lose!') {
                scoreCard.loses += 1;
            } else {
                scoreCard.ties += 1;
            }

            localStorage.setItem('scoreCard', JSON.stringify(scoreCard));

            alert(`You picked ${playGame}, computer picked ${comMove}, and ${result}. 
Wins: ${scoreCard.wins}, Loses: ${scoreCard.loses}, Ties: ${scoreCard.ties}`);
        }

        function resetScore() {
            scoreCard = { wins: 0, loses: 0, ties: 0 };
            localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
            alert('Scores have been reset! Wins: 0, Loses: 0, Ties: 0');
        }
