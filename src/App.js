import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Burger from './components/Burger.js';
import Menu from './components/Menu.js';
import HomeScreen from './components/HomeScreen.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Invoice from './pages/Invoice.jsx';
import AddInvoice from './pages/InvoiceList.jsx';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Dynamically add the LiveChat AI script
    const script = document.createElement("script");
    script.src = "https://app.livechatai.com/embed.js";
    script.setAttribute("data-id", "cm5xg7at50001la0aj6l9xuq8");
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="container">
        <Burger isOpen={isOpen} toggleSidebar={toggleSidebar} />
        
        <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
          <Menu />
        </div>
        
        <div className={`content ${isOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/addInvoice" element={<AddInvoice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
