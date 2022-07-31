/*

Codewars challenge, 8k: 

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'scissors') {
        if (p2 === 'paper') {
            return 'Player 1 won!';
        } else if (p2 === 'rock') {
            return 'Player 2 won!';
        }
    } else if (p1 === 'rock') {
        if (p2 === 'scissors') {
            return 'Player 1 won!';
        } else if (p2 === 'paper') {
            return 'Player 2 won!';
        }
    } else if (p1 === 'paper') {
        if (p2 === 'rock') {
            return 'Player 1 won!';
        } else {
            return 'Player 2 won!';
        }
    }
};

console.log(rps('paper', 'scissors'));