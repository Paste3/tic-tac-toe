import Square from "../Square/Square";
import React from "react";
import './Board.css';
export default function Board({ squares, onClick, turn, winningSquares }) {

    const createSquares = values => (

        values.map(value => (
            <Square
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))

    );

    return (
        <div className="board1">
            <div className="row">
                {createSquares([0, 1, 2])}
            </div>
            <div className="row">
                {createSquares([3, 4, 5])}
            </div>
            <div className="row">
                {createSquares([6, 7, 8])}
            </div>
        </div>
    );
}