import React from 'react';
import './navbar.css';
import logo from "./logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <nav className="Navbar">
      <div className="N-container">
          <img src={logo} alt="Logo" className="N-logo" width="80" height="70" />
        <div className="N-list">
          <ul className="Nav">
            <li className="item">
              <a className="link" href="#">تواصل معنا  </a>
            </li>
            <li className="item">
              <Link to="/schedule" className="link">أحجز الآن</Link>
            </li>
            <li className="item">
              <Link to="/About" className="link">من نحن</Link>
            </li>
          
            <li className="item">
            <Link to="/" className="link">الصفحة الرئيسية </Link>
            </li>
            
            <li className="item">
              <select className="language">
                <option value="arabic">العربية</option>
                <option value="english">English</option>
              </select>
            </li>
            <li className="item dropdown">
              <a className="link dropdown-toggle" href="#">
                الطرق
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">الأكاديمية</a></li>
                <li><a className="dropdown-item" href="">الجامعة القديمة</a></li>
                <li><a className="dropdown-item" href="">الدوار</a></li>
              </ul>
              
            </li>
            <li className="item">
              <Link to="/evaluation" className="link">قيم موقعنا</Link>
            </li>
            {token ? (
              <li className="item">
                <button onClick={handleLogout} className="-link">تسجيل الخروج</button>
              </li>
              
            ) : (
              <li className="item">
                <Link to="/login" className="link">تسجيل الدخول</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
<a className="link" href="#">الصفحة الرئيسية</a>
