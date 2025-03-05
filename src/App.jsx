import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <script>AOS.init();</script>
      <Navbar />
      <ScrollButtons />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
