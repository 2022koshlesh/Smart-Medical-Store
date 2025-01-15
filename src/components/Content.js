// src/components/Content.js
import React from 'react';
import './Content.css'; // Optional: Create a CSS file for styles
// import InvoiceGenerator from './InvoiceGenerator'; // Import the new InvoiceGenerator component
import HomeScreen from './HomeScreen';
import Contact from './Contact';
import About from './About';
import Invoice from '../pages/Invoice';
import InvoiceBulkEdit from '../pages/InvoiceBulkEdit';
import EditableField from '../pages/EditableField';

function Content({ page }) {
  return (
    <div>
      {page === 'home' && (
        <div className="home-container">
          <HomeScreen />
        </div>
      )}
      {page === 'about' && (
        <>
          <About />
        </>
      )}
      {page === 'contact' && (
        <>
          <Contact />
        </>
      )}
      {page === 'invoice' && (
        <Invoice /> // Include the Invoice Generator component here
      )}

      {
        page === 'InvoiceBulkEdit' && (
          <EditableField />
        )
      }

    </div>
  );
}

export default Content;
