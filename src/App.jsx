import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutBillboards from "./pages/AboutBillboards";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Team from "./pages/Team";
import LandOwners from "./pages/LandOwners";
import Contact from "./pages/Contact";
import BiosentryIDS from "./pages/BiosentryIDS";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-billboards" element={<AboutBillboards />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/team" element={<Team />} />
        <Route path="/land-owners" element={<LandOwners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/biosentry-ids" element={<BiosentryIDS />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
