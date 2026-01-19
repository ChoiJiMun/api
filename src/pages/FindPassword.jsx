import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function FindPassword() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    memberId: '',
    email: ''
  })
  const [message, setMessage] = React.useState('')
  const [errors, setErrors] = React.useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.memberId.trim()) newErrors.memberId = '아이디를 입력하세요'
    if (!formData.email.trim()) newErrors.email = '이메일을 입력하세요'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setMessage('입력하신 이메일로 임시 비밀번호를 발송했습니다.')
  }

  return (
    <>
      <div className="find-password-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>비밀번호 찾기</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>비밀번호 찾기</span>
            </div>
          </div>
        </div>

        <div className="find-container">
          <div className="find-box">
            <h2 className="section-title">비밀번호 찾기</h2>
            <p className="section-desc">아이디와 등록된 이메일을 통해 비밀번호를 재설정할 수 있습니다.</p>

            {message ? (
              <div className="success-message">
                <p>{message}</p>
                <button className="btn btn-primary" onClick={() => navigate('/login')}>
                  로그인 화면으로
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="find-form">
                <div className="form-group">
                  <label className="form-label"><span className="required">*</span> 아이디</label>
                  <input
                    type="text"
                    name="memberId"
                    value={formData.memberId}
                    onChange={handleChange}
                    placeholder="아이디를 입력하세요"
                    className={`form-input ${errors.memberId ? 'error' : ''}`}
                  />
                  {errors.memberId && <p className="error-message">{errors.memberId}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label"><span className="required">*</span> 이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력하세요"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-lg">비밀번호 찾기</button>
                  <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate('/login')}>
                    로그인
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
