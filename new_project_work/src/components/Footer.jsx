import React from 'react';
import './Footer.css'; // Optional: CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo or Brand Name */}
        <div className="footer-logo">
          <h2>BrandName</h2>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      
      {/* Copyright Information */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
