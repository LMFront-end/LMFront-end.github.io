import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {

    return (
    <div>

      {/* Component bootstrap */}

        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">

            <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">
                SoyRickPepinillo
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/curiosities"}>Curiosities</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/gifs"}>Gifs</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/characters"}>Characters</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/Episodes"}>Episodes</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/Location"}>Location</Link>
                    </li>

                </ul>

                    <div className="buttons">

                        <Link to={"/fav"} className="btn btn-outline-dark  ms-2">
                            <i className="fa-solid fa-heart"></i> Fav (0)
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
};

export {NavBar};
