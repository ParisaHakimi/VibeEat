import React from "react";

const Menu = () => {
  return (
    <div className="container p-3" id="menu">
      <div className="menu row d-flex justify-content-center align-items-center">
        <div className="col-12 menu-description">
          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <h3>Our Menu</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 menu-gallery d-flex justify-content-center align-items-center">
          <div className="menu-option d-flex p-4">
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4">
              <div className="menu-img-section">
                <span className="overlay"></span>
                <img
                  src="./images/brunch.jpg"
                  alt="Brunch"
                  className="img-fluid"
                />
              </div>
              <a href="/" className="mt-3 p-2">
                <h5>Brunch</h5>
              </a>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4">
              <div className="menu-img-section">
                <span className="overlay"></span>
                <img
                  src="./images/dinner.jpg"
                  alt="Dinner"
                  className="img-fluid"
                />
              </div>
              <a href="/" className="mt-3 p-2">
                <h5>Dinner</h5>
              </a>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4">
              <div className="menu-img-section">
                <span className="overlay"></span>
                <img
                  src="./images/dessert.jpg"
                  alt="Dessert"
                  className="img-fluid"
                />
              </div>
              <a href="/" className="mt-3 p-2">
                <h5>Dessert</h5>
              </a>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4">
              <div className="menu-img-section">
                <span className="overlay"></span>
                <img src="./images/wine.jpg" alt="Wine" className="img-fluid" />
              </div>
              <a href="/" className="mt-3 p-2">
                <h5>Wine</h5>
              </a>
            </div>
            <a href="/" className="text-light bg-dark orderLink">
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
