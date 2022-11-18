import './Square.css'
import classNames from "classnames";
export default function Square({ value, onClick, turn, winner }){
    
    const handleClick = () => {
        turn !== null && value === null && onClick()
        console.log("llegue" + value)
    }

    let squareClass = classNames({
        square: true,
        [`square--${value}`] : value !== null,
        winner : winner
    })

    return(
        <div className={squareClass} onClick={handleClick}>

        </div>
    )
}