import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/layout/NavigationMenu";
import HomePage from "./components/pages/homePage/HomePage";
import AboutUs from "./components/pages/about-us-page/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
