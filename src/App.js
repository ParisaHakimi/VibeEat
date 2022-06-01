import "./App.css";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Menu from "./components/layout/Menu";
import ChefSection from "./components/layout/ChefSection";
import HomePageFooter from "./components/layout/HomePageFooter";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="container"
        style={{ backgroundColor: "#f6f6f6", paddingBottom: "5rem" }}
      >
        <About />
        <Menu />
        <ChefSection />
      </div>
      <HomePageFooter />
      <AboutUs />
    </div>
  );
}

export default App;
