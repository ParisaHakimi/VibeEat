import React from "react";

const HomePageFooter = () => {
  return (
    <footer
      className="HomePageFooter d-flex align-items-center justify-content-center"
      id="reservation"
    >
      <div className="HomePageFooterOverlay"></div>
      <div className="cmt">
        <p>Make a reservation</p>
        <a href="/" className="bg-light text-dark book-now">
          Book Now
        </a>
      </div>
    </footer>
  );
};

export default HomePageFooter;
