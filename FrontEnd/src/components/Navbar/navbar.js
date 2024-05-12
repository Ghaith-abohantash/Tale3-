import React from 'react';
import './navbar.css';
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="new-navbar">
      <div className="new-container">
        <a className="new-navbar-brand" href="#">
          <img src={logo} alt="Logo" className="new-logo" width="80" height="70" />
        </a>
      
        <div className="new-menu">
          <ul className="new-nav">
            <li className="new-nav-item">
              <a className="new-nav-link" href="#">الصفحة الرئيسية</a>
            </li>
            <li className="new-nav-item">
              <a className="new-nav-link" href="#">أحجز الآن</a>
            </li>
            <li className="new-nav-item">
              <a className="new-nav-link" href="#">من نحن</a>
            </li>
            <li className="new-nav-item">
              <a className="new-nav-link" href="#">تواصل معنا</a>
            </li>
            <li className="new-nav-item">
              <select className="language-select">
                <option value="arabic">العربية</option>
                <option value="english">English</option>
              </select>
            </li>
            <li className="new-nav-item dropdown">
              <a className="new-nav-link dropdown-toggle" href="#">
                الطرق
              </a>
              <ul className="new-dropdown-menu">
                <li><a className="new-dropdown-item" href="#">الأكاديمية</a></li>
                <li><a className="new-dropdown-item" href="#">الجامعة القديمة</a></li>
                <li><a className="new-dropdown-item" href="#">الدوار</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
