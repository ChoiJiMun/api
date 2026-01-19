import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function FindId() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    name: '',
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

    if (!formData.name.trim()) newErrors.name = '이름을 입력하세요'
    if (!formData.email.trim()) newErrors.email = '이메일을 입력하세요'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setMessage('입력하신 이메일로 아이디를 발송했습니다.')
  }

  return (
    <>
      <div className="find-id-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>아이디 찾기</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>아이디 찾기</span>
            </div>
          </div>
        </div>

        <div className="find-container">
          <div className="find-box">
            <h2 className="section-title">아이디 찾기</h2>
            <p className="section-desc">등록된 이메일을 통해 아이디를 찾을 수 있습니다.</p>

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
                  <label className="form-label"><span className="required">*</span> 이름</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
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
                  <button type="submit" className="btn btn-primary btn-lg">아이디 찾기</button>
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
