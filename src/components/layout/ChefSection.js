import React from "react";

const chefSection = () => {
  return (
    <div className="container p-3 mt-5" id="chef">
      <div className="menu row d-flex justify-content-center align-items-center">
        <div className="col-12 menu-description">
          <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <h3>Our Expert Chefs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="col-12 menu-gallery d-flex justify-content-center align-items-center">
          <div className="menu-option d-flex p-4 chef-option">
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4 chef-card">
              <div className="chef-img-section">
                <img
                  src="./images/chef1.jpg"
                  alt="Someone Famous"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="mt-3 p-2 d-flex flex-column justify-content-center align-items-center description">
                <p className="chef-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus qui adipisci corporis ipsum ipsam facilis libero,
                  laboriosam officiis eveniet, quis porro nisi tempore totam
                  laudantium explicabo mollitia. Fuga, repellendus laudantium!
                </p>
                <h5 className="mt-2">SomeOne Famous</h5>
                <ul className="mt-2 d-flex justify-content-between align-items-center">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram-square h3"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4 chef-card">
              <div className="chef-img-section">
                <img
                  src="./images/chef2.jpg"
                  alt="Someone Famous"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="mt-3 p-2 d-flex flex-column justify-content-center align-items-center description">
                <p className="chef-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus qui adipisci corporis ipsum ipsam facilis libero,
                  laboriosam officiis eveniet, quis porro nisi tempore totam
                  laudantium explicabo mollitia. Fuga, repellendus laudantium!
                </p>
                <h5 className="mt-2">SomeOne Famous</h5>
                <ul className="mt-2 d-flex justify-content-between align-items-center">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram-square h3"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4 chef-card">
              <div className="chef-img-section">
                <img
                  src="./images/chef3.jpg"
                  alt="Someone Famous"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="mt-3 p-2 d-flex flex-column justify-content-center align-items-center description">
                <p className="chef-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus qui adipisci corporis ipsum ipsam facilis libero,
                  laboriosam officiis eveniet, quis porro nisi tempore totam
                  laudantium explicabo mollitia. Fuga, repellendus laudantium!
                </p>
                <h5 className="mt-2">SomeOne Famous</h5>
                <ul className="mt-2 d-flex justify-content-between align-items-center">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram-square h3"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-type d-flex justify-content-center align-items-center flex-column p-4 chef-card">
              <div className="chef-img-section">
                <img
                  src="./images/chef4.jpg"
                  alt="Someone Famous"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="mt-3 p-2 d-flex flex-column justify-content-center align-items-center description">
                <p className="chef-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus qui adipisci corporis ipsum ipsam facilis libero,
                  laboriosam officiis eveniet, quis porro nisi tempore totam
                  laudantium explicabo mollitia. Fuga, repellendus laudantium!
                </p>
                <h5 className="mt-2">SomeOne Famous</h5>
                <ul className="mt-2 d-flex justify-content-between align-items-center">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter-square h3"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram-square h3"></i>
                    </a>
                  </li>
                </ul>
              </div>
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

export default chefSection;
