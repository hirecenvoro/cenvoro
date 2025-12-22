import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import HireTalent from "./Pages/HireTalent";
import Footer from "./Pages/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Space below fixed navbar */}
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Contact />
              </>
            }
          />

          <Route path="/hiretalent" element={<HireTalent />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
