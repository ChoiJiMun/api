import React from 'react'

export default function LoginCard(){
  return (
    <div className="login-card">
      <h3>MEMBER LOGIN</h3>
      <div className="login-inner">
        <p className="welcome"><strong>관리자 님</strong><br/>방문을 환영합니다.</p>
        <button className="logout">LOGOUT</button>
      </div>
      <div className="login-form">
        <input placeholder="아이디" />
        <input placeholder="비밀번호" type="password" />
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  )
}
