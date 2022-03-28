import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const NavBar = () => {

    const state = useSelector((state) => state.handleFav);

    return (
    <div>

      {/* Component bootstrap */}

        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">

            <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">
                SoyRickPepinillo
            </Link>

            <style jsx>{`
            button[aria-expanded="false"] > .close {
            display: none;
            }
            button[aria-expanded="true"] > .open {
                display: none;
            }
            `}
            </style>
            <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="fas fa-bars open text-dark"></span>
            <span className="fas fa-times close text-dark"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

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
                        <Link className="nav-link" to={"/characters"}>Characters  <i className="fa-solid fa-magnifying-glass"></i></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/Episodes"}>Episodes</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/Location"}>Location</Link>
                    </li>

                </ul>

                </div>
            </div>
            </div>
        </nav>
    </div>
    );
};

export {NavBar};
