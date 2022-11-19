import { Link } from 'react-router-dom';
import "../../../bootstrap.min.css"
export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="fondo" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                </ul>
            </div>
        </nav>
    )
}