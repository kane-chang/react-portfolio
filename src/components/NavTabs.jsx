import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
        <nav className="nav nav-tabs navbar navbar-expand-lg fixed-top main-bg border-0">
            <div className="px-4 col-lg-10 container-fluid ">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-brand text-white active"
                                : " navbar-brand text-accent-orange"
                        }
                    >
                        .kane-chang
                    </NavLink>
                </li>
                <a className="nav-link text-accent-orange me-auto" href="#">
                    .CV
                </a>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars text-accent-orange"></i>
                </button>
                <div
                    className="collapse navbar-collapse ms-auto "
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto text-end">
                        <li className="nav-item">
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link text-accent-orange active"
                                        : "nav-link text-accent-orange"
                                }
                            >
                                about()
                            </NavLink>
                        </li>
                        {/* <a className="nav-link text-accent-orange" href="#">about()</a> */}
                        <a
                            className="nav-link text-accent-orange"
                            href="https://www.linkedin.com/in/kane-chang/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            className="nav-link text-accent-orange"
                            href="https://github.com/kane-chang"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                {/* <a className="navbar-brand text-accent-orange" href="#">.kane-chang</a> */}
                {/* <a className="nav-link text-accent-orange me-auto" href="#">.CV</a> */}
            </div>
        </nav>
    );
}

export default NavTabs;
