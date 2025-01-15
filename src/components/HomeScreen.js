import React, { useState } from 'react';
import './HomeScreen.css';
import products from './Product.js';

const ProductCard = ({ product }) => {
    const [lensStyle, setLensStyle] = useState({ display: 'none', left: '0', top: '0' });
    const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0 0' });

    // Function to handle mouse move over product image
    const handleMouseMove = (e) => {
        const productImage = e.target;
        const rect = productImage.getBoundingClientRect();
        const x = e.clientX - rect.left; // Get X position relative to the image
        const y = e.clientY - rect.top;  // Get Y position relative to the image

        const lensSize = 80; // Size of the magnifier lens
        const lensX = x - lensSize / 2;
        const lensY = y - lensSize / 2;

        const zoomFactor = 2; // Zoom factor (2x zoom)
        const backgroundX = -((x * zoomFactor) - lensSize / 2);
        const backgroundY = -((y * zoomFactor) - lensSize / 2);

        // Update lens and zoom image styles
        setLensStyle({
            display: 'block',
            left: `${lensX}px`,
            top: `${lensY}px`
        });

        setZoomStyle({
            display: 'block',
            backgroundImage: `url(${product.image})`,
            backgroundPosition: `${backgroundX}px ${backgroundY}px`
        });
    };

    // Function to hide lens and zoomed image on mouse leave
    const handleMouseLeave = () => {
        setLensStyle({ display: 'none', left: '0', top: '0' });
        setZoomStyle({ display: 'none', backgroundPosition: '0 0' });
    };

    return (
        <div className="product-card">
            <div 
                className="product-image-container" 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}
            >
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="magnifier-lens" style={lensStyle}></div>
                <div className="zoomed-image" style={zoomStyle}></div>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="quantity">Available: {product.quantity} pcs</span>
            <button className="buy-button">{product.price}</button>
        </div>
    );
};

const HomeScreen = () => {
    return (
        <div>
            <header className="hero-section">
                <h1>Welcome to Maa Medical Store</h1>
                <p>Your health is our priority!</p>
                <button className="cta-button">Shop Now</button>
            </header>

            <div className="product-cards">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
        </div>
        
    );
};

export default HomeScreen;
