import React from "react";
import '../style/style.css'
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="navbar-nav ml-auto">
                    <li
                        className={`nav-item  ${
                            props.location.pathname === "/" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    <li
                        className={`nav-item  ${
                            props.location.pathname === "/profile" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li>

                    <li
                        className={`nav-item  ${
                            props.location.pathname === "/game" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/game">
                            Game
                        </Link>
                    </li>


                    <li
                        className={`nav-item  ${
                            props.location.pathname === "/highscore" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/highscore">
                            Highscore
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);