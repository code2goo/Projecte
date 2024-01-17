import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import NavbarMenu from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";




const App = () => (
    
  <Router>
        <NavbarMenu />
        <Routes>
                <Route exactly path="/" element={<Home />} />
                {/* <Route path="About_us" element={<About_us/>} /> */}
        </Routes>
        <Footer />
  </Router>
);

export default App;