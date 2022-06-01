import React from "react";

const About = () => {
  return (
    <div className="container p-5" id="about">
      <div className="about row d-flex justify-content-center align-items-center">
        <div className="col-4 about-img-container">
          <a href="/">
            <img src="./images/aboutt.jpg" alt="" className="img-fluid" />
          </a>
        </div>
        <div className="col-8 about-description">
          <div className="p-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              eligendi porro nisi, quidem non numquam hic delectus voluptates
              reiciendis accusamus. Harum reprehenderit similique est eius
              facilis repellat commodi praesentium voluptatibus
            </p>
            <a href="/" className="text-light learnMore-aboutUs">
              Learn more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
