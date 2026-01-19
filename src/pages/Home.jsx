import React from 'react'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content" style={{ textAlign: 'left' }}>
            <h1>통신비 절감은 기본!<br></br>업무 효율은 보너스!</h1>
            
            <h3><span style={{ color: '#e6007e', fontWeight: 'bold' }}>U+ OPEN API</span>로 비즈니스에 날개를 달다</h3>
            <p>검증된 기술력과 안정된 품질,<br />LG U+와 함께 최적의 업무 환경을 만나보세요.</p>
          </div>
        </div>
      </section>
      <div className="sections-container">
        <section className="notice-section">
          <div className="section-header">
            <h4>Notice</h4>
            <button className="more-btn">More</button>
          </div>
          <div className="notice-list">
            <div className="notice-item">
              <span>API개발 가이드 안내</span>
              <em>2024.05.12</em>
            </div>
            <div className="notice-item">
              <span>고급형 센트릭스 Rest API 서비스 개선사항 공지</span>
              <em>2024.05.12</em>
            </div>
            <div className="notice-item">
              <span>IMS 센트릭스 Open API 및 Rest API 서비스 보안관련 개선사항 공지입니다.</span>
              <em>2024.05.12</em>
            </div>
            <div className="notice-item">
              <span>■ OpenAPI 기본 확인사항■</span>
              <em>2024.05.12</em>
            </div>
            <div className="notice-item">
              <span>VC++ MFC 샘플소스 배포합니다.</span>
              <em>2024.05.12</em>
            </div>
          </div>
        </section>
        <section className="board-section">
          <div className="section-header">
            <h4>Board</h4>
            <button className="more-btn">More</button>
          </div>
          <div className="board-list">
            <div className="board-item">
              <span>고급형 Centrex Rest API v4.0 연동 규격서입니다.</span>
              <em>2024.05.12</em>
            </div>
            <div className="board-item">
              <span>통합DCS 용 Rest API v1.0 연동 규격서입니다.</span>
              <em>2024.05.12</em>
            </div>
            <div className="board-item">
              <span>VS2008 C#용 Sample 프로젝트입니다.(DCS/고급형 센트릭스)</span>
              <em>2024.05.12</em>
            </div>
            <div className="board-item">
              <span>DCS용 OpenAPI를 이용한 VC++(VisualStudio 2010) 샘플 소스 프로젝트입니다.</span>
              <em>2024.05.12</em>
            </div>
            <div className="board-item">
              <span>IMS Centrex용 OpenAPI를 이용한 VC++(VisualStudio 2010) 샘플 소스</span>
              <em>2024.05.12</em>
            </div>
          </div>
        </section>
      </div>
      <section className="service-section">
        <div className="service-item">
          <div className="service-item-image" style={{backgroundImage: "url('/banner1.png')"}}></div>
          <div className="service-item-content">
            <h3>U+기업070</h3>
            <p>인터넷 전화시대 앞서가는 기업의 현명한 선택</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-image" style={{backgroundImage: "url('/banner2.png')"}}></div>
          <div className="service-item-content">
            <h3>U+LTE</h3>
            <p>속도의 차이가 역사를 바꾼다!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
