import React, { useState } from 'react';
import './update.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            setError("كلمتا السر الجديدتان غير متطابقتين");
            return;
        }

        try {
            const response = await axios.put('http://localhost:4000/api/users/update-password', {
                email,
                oldPassword,
                newPassword
            });
            alert("تم تحديث كلمة السر بنجاح");
            navigate('/login');
        } catch (error) {
            console.error("Error updating password", error);
            setError(error.response?.data?.message || "حدث خطأ أثناء تحديث كلمة السر");
        }
    };

    return (
        <div className="update">
            <h2>تغيير كلمة السر</h2>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label><b>البريد الإلكتروني</b></label>
                    <input type="text" placeholder="أدخل بريدك الإلكتروني هنا" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label><b>كلمة السر القديمة</b></label>
                    <input type="password" placeholder="كلمة السر" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
                
                    <label><b>كلمة السر الجديدة</b></label>
                    <input type="password" placeholder="كلمة السر الجديدة" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />

                    <label><b>تأكيد كلمة السر الجديدة</b></label>
                    <input type="password" placeholder="تأكيد كلمة السر" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button type="submit">تحديث كلمة السر</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </form>
        </div>
    );
}

export default Update;
