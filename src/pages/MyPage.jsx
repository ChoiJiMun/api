import React from 'react'
import Footer from '../components/Footer'

export default function MyPage() {
  const userInfo = {
    memberId: 'admin',
    name: '홍길동',
    email: 'admin@sqnt.co.kr',
    phone: '010-1234-5678',
    company: '주식회사 엘지플러스',
    joinDate: '2023-01-15'
  }

  return (
    <>
      <div className="mypage-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>마이페이지</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <a href="/mypage">마이페이지</a>
              <span>내 정보</span>
            </div>
          </div>
        </div>

        <div className="mypage-container">
          <div className="info-section">
            <h2 className="section-title">마이페이지</h2>
            <p className="section-desc">회원님의 기본 정보를 확인하실 수 있습니다.</p>

            <div className="info-table">
              <div className="info-row">
                <div className="info-label">아이디</div>
                <div className="info-value">{userInfo.memberId}</div>
              </div>
              <div className="info-row">
                <div className="info-label">이름</div>
                <div className="info-value">{userInfo.name}</div>
              </div>
              <div className="info-row">
                <div className="info-label">이메일</div>
                <div className="info-value">{userInfo.email}</div>
              </div>
              <div className="info-row">
                <div className="info-label">휴대폰</div>
                <div className="info-value">{userInfo.phone}</div>
              </div>
              <div className="info-row">
                <div className="info-label">회사명</div>
                <div className="info-value">{userInfo.company}</div>
              </div>
              <div className="info-row">
                <div className="info-label">가입일</div>
                <div className="info-value">{userInfo.joinDate}</div>
              </div>
            </div>

            <div className="button-group">
              <a href="/edit-profile" className="btn btn-primary">정보 수정</a>
              <button className="btn btn-secondary">비밀번호 변경</button>
            </div>
          </div>

          <div className="info-section">
            <h2 className="section-title">최근 다운로드</h2>
            <div className="download-history">
              <p className="no-data">다운로드 이력이 없습니다.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
