import {  } from "react-bootstrap";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky-top shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a
                className="nav-link mx-2 active btn btn-primary text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}