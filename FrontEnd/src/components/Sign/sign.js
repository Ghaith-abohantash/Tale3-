import React, { useEffect, useState } from 'react';
import './sign.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            setMessage('أنت مسجل دخول بالفعل');
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        setMessage('');
        navigate('/login');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', data);
            console.log('Response:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='All'>
            <div className="main-container">
                <h2>إنشاء حساب جديد في Tale3</h2>
                {message && (
                    <div className="message">
                        {message}
                        {token && <button onClick={handleLogout}>تسجيل الخروج</button>}
                    </div>
                )}
                {!token && (
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <label><b>الاسم</b></label>
                            <input type="text" placeholder="أدخل اسمك هنا" name="username" required />
                            <label><b>البريد الإلكتروني</b></label>
                            <input type="email" placeholder="أدخل بريدك الإلكتروني هنا" name="email" required />
                            <label><b>كلمة السر</b></label>
                            <input type="password" placeholder="كلمة السر" name="password" required />
                            <label><b>تأكيد كلمة السر</b></label>
                            <input type="password" placeholder="تأكيد كلمة السر" name="passwordConfirm" required />
                            <input type="checkbox" name="isAdmin" /> تذكرني
                            <p>بإنشاء حساب، أنت توافق على <a href="#">شروط الاستخدام والخصوصية</a>.</p>
                            <button type="submit">إنشاء حساب</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default SignupForm;
