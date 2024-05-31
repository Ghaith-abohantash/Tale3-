import React, { useState } from 'react';
import axios from 'axios';
import './evaluation.css';

const Evaluation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'transport',
    rating: '5',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/evaluation', formData); 

      alert('Evaluation submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Error submitting evaluation');
    }
  };
  

  return (
    <div className="evaluation-form">
      <h2>تقييم خدماتنا</h2>
      <form onSubmit={handleSubmit} action='/evaluation' >
        <label htmlFor="name">الاسم:</label>
        <input type="text" id="name" name="name" placeholder="ادخل اسمك" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">البريد الإلكتروني:</label>
        <input type="email" id="email" name="email" placeholder="ادخل بريدك الإلكتروني" value={formData.email} onChange={handleChange} required />

        <label htmlFor="service">نوع الخدمة:</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} required>
          <option value="transport">النقل</option>
          <option value="customer-service">خدمة العملاء</option>
          <option value="website">الموقع الإلكتروني</option>
          <option value="other">أخرى</option>
        </select>

        <label htmlFor="rating">التقييم:</label>
        <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
          <option value="5">ممتاز</option>
          <option value="4">جيد جداً</option>
          <option value="3">جيد</option>
          <option value="2">متوسط</option>
          <option value="1">ضعيف</option>
        </select>

        <label htmlFor="comments">ملاحظات:</label>
        <textarea id="comments" name="comments" rows="4" placeholder="أدخل ملاحظاتك" value={formData.comments} onChange={handleChange}></textarea>

        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default Evaluation;
