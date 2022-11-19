import "./Card.css"
import {Link} from "react-router-dom"
export default function Card() {
    return (
        <>
        <div className="col-md-6">
            <div class="card">
                <img src="http://dlprivateserver.com/wp-content/uploads/2022/08/Como-ganar-siempre-en-Tic-Tac-Toe-La-mejor.jpg" />
                <div class="card__content">
                    <h2>Tic Tac Toe</h2>
                    <p>
                        A fantastic and classic Tic Tac Toe!!
                    </p>
                    <div className="but_a">
                        <Link to="/tic-tac-toe" style={{}}>Play</Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div class="card">
                <img src="https://az779572.vo.msecnd.net/screens-400/b6388bc9c63d4691986e5565e2ac61c1" />
                <div class="card__content">
                    <h2>MemoTest</h2>
                    <p>
                        Test your memory!!
                    </p>
                    <div className="but_a">
                        <Link to="/memotest" style={{}}>Play</Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}