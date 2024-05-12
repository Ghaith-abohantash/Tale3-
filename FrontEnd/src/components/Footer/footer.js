import React from 'react';
import './footer.css';
import logo from "./logo.png";

const Footer = () => {
  return (
    <div className="all">
    <footer className="new-footer-container">
      <div className="footer-logo">
        <img src={logo} alt="شعار الموقع" style={{ width: '90px', height: '90px' }} />
      </div>
      <div className="footer-contact">
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100007958804048">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="شعار فيسبوك" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="رابط انستجرام">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="شعار انستغرام" style={{ width: '20px', height: '20px' }} />
          </a>
          <a href="رابط تويتر">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="شعار تويتر" style={{ width: '20px', height: '20px' }} />
          </a>
        </div>
        <div className="contact-info">
          <p>تواصل معنا: +123456789</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
