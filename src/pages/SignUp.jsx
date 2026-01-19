import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    memberId: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    department: ''
  })
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
    if (!formData.password.trim()) newErrors.password = '비밀번호를 입력하세요'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = '비밀번호가 일치하지 않습니다'
    if (!formData.name.trim()) newErrors.name = '이름을 입력하세요'
    if (!formData.email.trim()) newErrors.email = '이메일을 입력하세요'
    if (!formData.phone.trim()) newErrors.phone = '휴대폰을 입력하세요'
    if (!formData.company.trim()) newErrors.company = '회사명을 입력하세요'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    alert('회원가입이 완료되었습니다')
    navigate('/login')
  }

  return (
    <>
      <div className="signup-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>회원가입</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>회원가입</span>
            </div>
          </div>
        </div>

        <div className="signup-container">
          <div className="signup-box">
            <h2 className="section-title">회원가입</h2>
            <p className="section-desc">LG U+ API 서비스의 회원이 되어 다양한 서비스를 이용하세요.</p>

            <form onSubmit={handleSubmit} className="signup-form">
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
                <label className="form-label"><span className="required">*</span> 비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="비밀번호를 입력하세요"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>

              <div className="form-group">
                <label className="form-label"><span className="required">*</span> 비밀번호 확인</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="비밀번호를 다시 입력하세요"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
              </div>

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

              <div className="form-group">
                <label className="form-label"><span className="required">*</span> 휴대폰</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
              </div>

              <div className="form-group">
                <label className="form-label"><span className="required">*</span> 회사명</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="회사명을 입력하세요"
                  className={`form-input ${errors.company ? 'error' : ''}`}
                />
                {errors.company && <p className="error-message">{errors.company}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">부서명</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="부서명을 입력하세요"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">직급</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="직급을 입력하세요"
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">회원가입</button>
                <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate('/login')}>취소</button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
