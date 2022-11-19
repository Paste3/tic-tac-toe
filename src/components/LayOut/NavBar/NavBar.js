import { Link } from 'react-router-dom';
import "../../../bootstrap.min.css"
export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Paste's Mini Games</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/home" style={{ textDecoration: 'none', fontSize: "20px", margin: "30px", color: "black" }}>Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}