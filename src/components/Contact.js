import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xze7r1t',       // Replace with your EmailJS Service ID
            'template_smnyhov',      // Replace with your EmailJS Template ID
            form.current,
            'bMe3apOn-V0PLD9E-'      // Replace with your EmailJS Public Key
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Thank you! Your message has been sent.');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        });
    };

    return (
        <div className="contact-container">
            <h1 className="header">Contact Us</h1>
            <p className="text">Feel free to reach out to us!</p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="to_name">To Name</label>
                <input type="text" id="to_name" name="to_name" required placeholder="Recipient's Name" />

                <label htmlFor="from_name">Your Name</label>
                <input type="text" id="from_name" name="from_name" required placeholder="Your Name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required placeholder="Your Email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required placeholder="Your message"></textarea>

                <button type="submit" className="send-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
