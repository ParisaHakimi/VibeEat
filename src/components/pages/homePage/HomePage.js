import HomePageHeader from "./HomePageHeader";
import About from "./About";
import Menu from "./Menu";
import ChefSection from "./ChefSection";
import HomePageFooter from "./HomePageFooter";

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <div
        className="container"
        style={{ backgroundColor: "#f6f6f6", paddingBottom: "5rem" }}
      >
        <About />
        <Menu />
        <ChefSection />
      </div>
      <HomePageFooter />
    </div>
  );
};

export default HomePage;
