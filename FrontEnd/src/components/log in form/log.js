import React from 'react';
import './log.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'; 


function LoginForm() {
    return (
        <div className="All">
            <div className="form">
                <img src={logo} alt="Logo" className="new-logo" />

                <h2 className="text-center mb-4"> <span className="tale3">Tale3</span> أهلا  بكم في</h2>
                <form className="small-form">
                    <div className="new-form-group">
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input type="email" id="email" className="new-form-control" />
                    </div>
                    <div className="new-form-group">
                        <label htmlFor="password">كلمة السر</label>
                        <input type="password" id="password" className="new-form-control" />
                    </div>
                    <div className="row mb-3">
                        <div className="col d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" id="remember" defaultChecked />
                            <label className="form-check-label" htmlFor="remember"> تذكرني </label>
                        </div>
                        <div className="col text-end">
                            <a href="#!" className="new-forgot-password">هل نسيت كلمة السر؟</a>
                        </div>
                    </div>
                    <button type="button" className="new-btn btn-primary">سجل</button>
                </form>
                
                <div className="new-register-option">
                    <Link to="/signup"> Tale3 لا أملك حساب في </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
