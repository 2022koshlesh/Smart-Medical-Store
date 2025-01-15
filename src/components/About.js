import React, { useState, useEffect } from 'react';
import './About.css'; // Ensure to import your CSS file for styling

const testimonials = [
  {
    text: "The service was fantastic! Highly recommend to everyone.",
    author: "Koshlesh Kumar Raj",
    image: "/testimonials/1.jpg" // Image path for the testimonial
  },
  {
    text: "A wonderful experience from start to finish.",
    author: "Divyanshu Maurya",
    image: "/testimonials/2.jpg"
  },
  {
    text: "High-quality products and great customer service.",
    author: "Priyanshu Maurya",
    image: "/testimonials/3.jpg"
  },
  {
    text: "Absolutely loved the product quality!",
    author: "Avya Jain",
    image: "/testimonials/4.jpg"
  },
  {
    text: "Fast delivery and great customer support.",
    author: "Jessica Josie",
    image: "/testimonials/5.jpg"
  },
  {
    text: "Will definitely come back for more.",
    author: "Tripti Dimri",
    image: "/testimonials/6.jpg"
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive(false); // Start transition out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setActive(true); // Start transition in
      }, 500); // Match the transition duration
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="about-container">
      <h1 className="header">About</h1>
      <p className="text">Learn more about us on this page.</p>

      {/* New Section */}
      <div className="info-section">
        <div className="left-column">
          <img src="/banner/medal.png" alt="Medal" className="medal" />
          <p className="info-text">Best Quality Medicine in 2025</p>
          <p className="info-description">Our products are world best product. We sell the real products. Welcome to our shop...</p>
        </div>
        <div className="right-column">
          <img src="/banner/banner.png" alt="Banner" className="info-image" />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <h2 className="testimonial-header">Our <span className='our'>Testimonials</span></h2>
        <div className={`testimonial-card ${active ? 'active' : ''}`}>
          <img 
            src={testimonials[currentIndex].image} 
            alt={`Testimonial from ${testimonials[currentIndex].author}`} 
            className="testimonial-image"
          />
          <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
          <p className="testimonial-author">- {testimonials[currentIndex].author}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
