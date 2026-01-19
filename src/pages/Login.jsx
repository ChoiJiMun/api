import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    memberId: '',
    password: ''
  })
  const [errors, setErrors] = React.useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
    if (!formData.memberId.trim()) {
      newErrors.memberId = '아이디를 입력하세요'
    }
    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력하세요'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // 로그인 처리
    alert('로그인되었습니다')
    navigate('/')
  }

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <h1 className="login-title">로그인</h1>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  name="memberId"
                  placeholder="아이디"
                  value={formData.memberId}
                  onChange={handleChange}
                  className={`form-input ${errors.memberId ? 'error' : ''}`}
                />
                {errors.memberId && <p className="error-message">{errors.memberId}</p>}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'error' : ''}`}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>

              <button type="submit" className="login-btn">로그인</button>
            </form>

            <div className="login-links">
              <button 
                type="button"
                className="link-btn"
                onClick={() => navigate('/find-id')}
              >
                아이디 찾기
              </button>
              <span className="divider">|</span>
              <button 
                type="button"
                className="link-btn"
                onClick={() => navigate('/find-password')}
              >
                비밀번호 찾기
              </button>
              <span className="divider">|</span>
              <button 
                type="button"
                className="link-btn"
                onClick={() => navigate('/signup')}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
