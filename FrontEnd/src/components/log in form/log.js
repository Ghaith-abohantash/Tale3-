import React, { useEffect, useState } from 'react';
import './log.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            setMessage('أنت مسجل دخولك بالفعل');
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        navigate('/login');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', data);
            const { token, isAdmin } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('isAdmin', isAdmin);
            if (isAdmin) {
                navigate('/admin');
            } else {
                navigate('/schedule');
            }
        } catch (error) {
            setMessage('البريد الإلكتروني أو كلمة المرور غير صحيح');
        }
    };

    return (
        <div className="Log">
            <div className="L-F">
                <div className="L-Form">
                    <img src={logo} alt="Logo" className="L-Logo" />
                    <h2 className="text-center "><span className="tale3">Tale3</span> أهلاً بكم في</h2>
                    {message && (
                        <div className="message">
                            {message}
                            {token && <button onClick={handleLogout}>تسجيل الخروج</button>}
                        </div>
                    )}
                    {!token && (
                        <form className="LForm" onSubmit={handleSubmit}>
                            <div className="L-group">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="L-group">
                                <label htmlFor="password">كلمة السر</label>
                                <input type="password" id="password" name="password"  required />
                            </div>
                            <button type="submit" className="Button">تسجيل الدخول</button>
                        </form>
                    )}
                    <div className="register">
                        <Link to="/signup">Tale3 ليس لديك حساب في</Link>
                    </div>
                    <div className="change">
                        <Link to="/update">تغيير كلمة السر</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
