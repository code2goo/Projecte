import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React, { useState } from "react";

import Home from './compotents/Pages/Home/Home.jsx';
import About_us from './compotents/Pages/About_us/About_us';
import Contact_us from './compotents/Pages/Contact_us/Contact_us';
import Cases from './compotents/Pages/Cases/Cases';
import Donation from './compotents/Pages/Donation/Donation';
import Campaigns from './compotents/Pages/Campaigns/Campaigns';
import Gallery from './compotents/Pages/Gallary/Gallery.jsx';
import Login from './compotents/Pages/Login/login';
import Registration from './compotents/Pages/Registration/Registration.jsx';
import Sponsorships from './compotents/Pages/Sponsorships/Sponsorships.jsx';
import Usage_Policy from './compotents/Pages/Usage-policy/Usage_Policy.jsx';
import Header from './compotents/Header/Header';
import Header_2 from './compotents/Header_2/Header_2';
import Footer from './compotents/Footer/Footer';
import UserProfile from './compotents/Pages/UserProfile/UserProfile.jsx';
import CaseInfo from "../src/compotents/Pages/Cases/CaseInfo.jsx";
import MainGallary from './compotents/Pages/Home/Main/MainGallary.jsx';

import PopupModal from "./compotents/Popup/PopupModal.jsx";
import LaunchModalButton from "./compotents/Popup/LaunchModalButton";
import Popup from "./compotents/Popup/PopupModal.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Router>
        <Header />
        <Header_2 />
        <Routes>
                <Route exactly path="/" element={<Home />} />
                <Route path="About_us" element={<About_us/>} />
                <Route path="contact_us" element={<Contact_us/>} />
                <Route path="Cases" element={<Cases/>} />
                <Route path="CaseInfo" element={<CaseInfo/>} />
                <Route path="Donation" element={<Donation/>} />
                <Route path="Campaigns" element={<Campaigns/>} />
                <Route path="Gallary" element={<Gallery/>} />
                <Route path="MainGallary" element={<MainGallary/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="Registration" element={<Registration/>} />
                <Route path="Sponsorships" element={<Sponsorships/>} />
                <Route path="Usage_Policy" element={<Usage_Policy/>} />
                <Route path="UserProfile" element={<UserProfile/>} />
        </Routes><br /><br /><br />
        <LaunchModalButton onClick={() => setModalShow(true)} />
        <PopupModal show={modalShow} onHide={() => setModalShow(false)} />
        <Footer />
        <Popup></Popup>
  </Router>
  );
}

export default App;