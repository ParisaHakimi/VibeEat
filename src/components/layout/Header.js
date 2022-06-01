import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a
            className="navbar-brand text-light fw-bold fst-italic fs-1"
            href="/"
          >
            Vibe Eat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-light fw-bold fs-5"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-bold fs-5" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-bold fs-5" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light fw-bold fs-5"
                  href="#reservation"
                >
                  Reservation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light fw-bold fs-5" href="/">
                  Order now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="cmt">
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          dolore iure vitae nemo cum nobis et, ex quis quos repellendus amet
          cumque commodi sapiente, voluptate officiis, laborum quae tempore
          deserunt.
        </p>
        <a href="/" className="text-light bg-info orderLink">
          Order now
        </a>
      </div>
    </header>
  );
};

export default Header;
