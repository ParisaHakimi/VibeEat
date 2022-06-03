import React from "react";
import AboutUsPageHeader from "./AboutUsPageHeader";
import OurKitchen from "./OurKitchen";

const AboutUs = () => {
  return (
    <div>
      <AboutUsPageHeader />
      <div
        className="container"
        style={{ backgroundColor: "#f6f6f6", paddingBottom: "5rem" }}
      >
        <OurKitchen />
      </div>
    </div>
  );
};

export default AboutUs;
