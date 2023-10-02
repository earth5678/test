import React, { useState } from 'react';
import './Login.css'; // แก้เป็นชื่อไฟล์ Login.css ให้ตรงกับชื่อไฟล์

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const Login = () => { 

  const [action, setAction] = useState("เข้าสู่ระบบ");

  const handleRegisterClick = () => {
    setAction("สร้างบัญชี");
  };

  const handleLoginClick = () => {
    setAction("เข้าสู่ระบบ");
  };
  
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='ชื่อ'/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='อีเมล'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='รหัสผ่าน'/>
        </div>
      </div>
      <div className="forget-password">ลืมรหัสผ่าน?<span>กดตรงนี้</span></div>
      <div className="submit-container">
        <div className={action==="เข้าสู่ระบบ"?"submit gray":"submit"}>สร้างบัญชี</div>
        <div className={action==="สร้างบัญชี"?"submit gray":"submit"}>เข้าสู่ระบบ</div>
      </div>
    </div>
  );
};

export default Login; 
