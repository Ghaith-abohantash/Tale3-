import React from 'react';
import './sign.css';

class Signupform extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h2>إنشاء حساب جديد في Tale3</h2>
        <form action="/action_page.php">
          <div className="container">
            <label><b>الاسم</b></label>
            <input type="text" placeholder="أدخل اسمك هنا" name="name" required />

            <label><b>البريد الإلكتروني</b></label>
            <input type="text" placeholder="أدخل بريدك الإلكتروني هنا" name="email" required />

            <label><b>كلمة السر</b></label>
            <input type="password" placeholder="كلمة السر" name="psw" required />

            <label><b>تأكيد كلمة السر</b></label>
            <input type="password" placeholder="تأكيد كلمة السر" name="psw-repeat" required />

            <input type="checkbox" defaultChecked /> تذكرني

            <p>بإنشاء حساب، أنت توافق على <a href="#">شروط الاستخدام والخصوصية</a>.</p>

            <button type="submit">إنشاء حساب</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signupform;