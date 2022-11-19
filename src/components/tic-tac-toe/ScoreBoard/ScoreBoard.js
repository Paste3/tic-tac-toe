import "./ScoreBoard.css"

export default function ScoreBoard({ scoreX, scoreO }) {

    return (
        <div className="scoreboard">
            <div>{scoreX}</div>
            <div>{scoreO}</div>
        </div>
    )
}