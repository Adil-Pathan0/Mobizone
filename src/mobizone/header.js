import React from 'react'
import { Link } from 'react-router'


const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-danger fs-3" to="/">MOBI <span>ZONE</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white fw-medium active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white fw-medium active" aria-current="page" to="/collection">Collection</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white fw-medium" to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white fw-medium" to="/AboutUs">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
