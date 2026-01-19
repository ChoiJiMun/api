import React from 'react'
import Footer from '../components/Footer'

export default function EditProfile() {
  const [formData, setFormData] = React.useState({
    memberId: 'admin',
    password: '',
    confirmPassword: '',
    name: '홍길동',
    email: 'admin@sqnt.co.kr',
    phone: '010-1234-5678',
    company: '주식회사 엘지플러스',
    position: '과장',
    department: '개발팀'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('정보가 수정되었습니다.')
  }

  return (
    <>
      <div className="edit-profile-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>내정보수정</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <a href="/mypage">마이페이지</a>
              <span>내정보수정</span>
            </div>
          </div>
        </div>

        <div className="mypage-container">
          <div className="info-section">
            <h2 className="section-title">내정보수정</h2>
            <p className="section-desc">회원님의 정보를 수정하실 수 있습니다.</p>

            <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 아이디
                </label>
                <input 
                  type="text" 
                  name="memberId"
                  value={formData.memberId}
                  disabled
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 비밀번호
                </label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="변경하실 비밀번호를 입력하세요"
                  className="form-input"
                />
                <p className="form-hint">기존 비밀번호 입력하세요. 미 변경시 기존값이 유지됩니다.</p>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 비밀번호 확인
                </label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="비밀번호를 다시 입력하세요"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 이름
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 이메일
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 휴대폰
                </label>
                <div className="form-input-group">
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input phone-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span> 회사명
                </label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">부서명</label>
                <input 
                  type="text" 
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
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
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">수정완료</button>
                <a href="/mypage" className="btn btn-secondary btn-lg">취소</a>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
