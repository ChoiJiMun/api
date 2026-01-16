import React from 'react'

export default function FloatingLogin(){
  return (
    <div className="floating-login">
      <div className="fl-head">LOGIN</div>
      <div className="fl-body">
        <input placeholder="ID" />
        <input placeholder="PW" type="password" />
        <button className="fl-btn">LOGIN</button>
      </div>
    </div>
  )
}
