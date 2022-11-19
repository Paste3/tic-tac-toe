import React from 'react';
import '../App.css';
import Board from '../components/tic-tac-toe/Board/Board';
import ScoreBoard from '../components/tic-tac-toe/ScoreBoard/ScoreBoard';

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function Tateti() {

    const [turn, setTurn] = React.useState("X")
    const [squares, setSquare] = React.useState(Array(9).fill(null))
    const [winningSquares, setWinningSquares] = React.useState([])
    const [score, setScore] = React.useState({
        X: 0,
        O: 0
    })

    const reset = () => {
        setTurn("X")
        setSquare(Array(9).fill(null))
        setWinningSquares([])
    }

    const checkForWinner = newSquares => {
        for (let i = 0; i < winningPositions.length; i++) {
            const [a, b, c] = winningPositions[i]
            if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
                endGame(newSquares[a], winningPositions[i]);
                return
            }
        }

        if (!newSquares.includes(null)) {
            endGame(null, Array.from(Array(10).keys()))
            return
        }
        setTurn(turn === "X" ? "O" : "X")
    }

    const handleClick = square => {
        let newSquare = [...squares]
        newSquare.splice(square, 1, turn)
        setSquare(newSquare)
        checkForWinner(newSquare);
    }

    const endGame = (result, winningPositions) => {
        setTurn(null);
        if (result !== null) {
            setScore({
                ...score,
                [result]: score[result] + 1
            })
        }
        setWinningSquares(winningPositions)
        setTimeout(() => {
            reset()
        }, 2000
        )
    }

    return (
        <div className="bodyTateti">
            <h2 style={{ color: "white" }}>TURNO : {turn}</h2>
            <Board winningSquares={winningSquares} squares={squares} onClick={handleClick} turn={turn} />
            <ScoreBoard scoreO={score.O} scoreX={score.X} ></ScoreBoard>
        </div>
    );
}

export default Tateti;
