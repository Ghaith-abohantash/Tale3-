import React from 'react';
import './log.css';
import logoImage from './logo.png';

function LoginForm() {
    return (
        <div className="A">
            <div className="form-container">
                <img src={logoImage} alt="Logo" className="logo" />

                <h2 className="text-center mb-4"> <span className="tale3">Tale3</span> أهلا  بكم في</h2>
                <form className="small-form">
                    <div className="form-group mb-3">
                        <input type="email" id="form2Example1" className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form2Example1">البريد الإلكتروني</label>
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" id="form2Example2" className="form-control form-control-sm" />
                        <label className="form-label" htmlFor="form2Example2">كلمة السر</label>
                    </div>
                    <div className="row mb-3">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="form2Example34" defaultChecked />
                                <label className="form-check-label" htmlFor="form2Example34"> تذكرني </label>
                            </div>
                        </div>
                        <div className="col">
                            <a href="#!" className="text-decoration-none forgot-password">هل نسيت كلمة السر؟</a>
                        </div>
                    </div>
                    <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-3">سجل</button>
                </form>
                
                <div className="register-option">
                    <p >Tale3 لا أملك حساب في </p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
