import React from 'react';
import './navbar.css';
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" width="80" height="70" />
        </a>
        <button className="menu-toggle">
          <span className="menu-icon"></span>
        </button>
        <div className="menu">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">الصفحة الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">أحجز الآن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">من نحن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">تواصل معنا</a>
            </li>
            <li className="nav-item">
              <select className="language-select">
                <option value="arabic">العربية</option>
                <option value="english">English</option>
              </select>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                الطرق
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">الأكاديمية</a></li>
                <li><a className="dropdown-item" href="#">الجامعة القديمة</a></li>
                <li><a className="dropdown-item" href="#">الدوار</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
