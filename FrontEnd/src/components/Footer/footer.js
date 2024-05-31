import React from 'react';
import './footer.css';
import logo from "./logo.png";

const Footer = () => {
  return (
    <div className="Footer">
    <footer className="Fcontainer">
      <div className="Flogo">
        <img src={logo} alt="شعار الموقع" style={{ width: '90px', height: '90px' }} />
      </div>
      <div className="Fcontact">
        <div className="social-links">
          <a href="رابط فيسبوك">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
             alt="رابط فيسبوك " style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="رابط انستجرام">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" 
            alt="رابط إنستغرام " style={{ width: '20px', height: '20px' }} />
          </a>
          <a href="رابط تويتر">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" 
            alt="رابط تويتر" style={{ width: '20px', height: '20px' }} />
          </a>
        </div>
        <div className="info">
          <p>تواصل معنا: +123456789</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
