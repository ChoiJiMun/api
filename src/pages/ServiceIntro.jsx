import React from 'react'
import Footer from '../components/Footer'

const outlineIcons = {
  signal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16a8 8 0 0 1 12 0" />
      <path d="M7 13a5 5 0 0 1 8 0" />
      <path d="M10 10a2 2 0 0 1 4 0" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 6 14h5l-1 8 7-12h-5z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v6c0 4 3.5 7.5 7 9 3.5-1.5 7-5 7-9V6l-7-3Z" />
      <path d="M9.5 12.5 12 15l4-4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18" />
      <path d="M12 3c-2.5 3-2.5 15 0 18" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h5l2 2h9v8.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5V7Z" />
      <path d="M4 7V6a1.5 1.5 0 0 1 1.5-1.5H11l2 2" />
    </svg>
  ),
  toolbox: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="8" width="17" height="10" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      <path d="M3.5 12h17" />
      <path d="M10 12v2.5" />
      <path d="M14 12v2.5" />
    </svg>
  ),
}

const features = [
  {
    title: '실시간 발신자 표시',
    desc: '전화가 울리기 전에 고객/거래처 정보를 CRM에 즉시 표출해 대응 속도 향상',
    icon: 'signal'
  },
  {
    title: 'Click2Call 자동 발신',
    desc: '웹·데스크톱 어디서나 한 번의 클릭으로 전화 연결, 상담 효율 극대화',
    icon: 'bolt'
  },
  {
    title: '안정적 연동 규격',
    desc: '기업070 통화연동 규격 기반으로 그룹웨어/ERP/학원/부동산 등 다양한 서비스 연동',
    icon: 'shield'
  },
  {
    title: '다양한 채널 지원',
    desc: 'IP-Centrex, IP-PBX, 소프트폰, 하드폰까지 아우르는 멀티 디바이스 지원',
    icon: 'globe'
  },
  {
    title: '로그/이력 관리',
    desc: 'API 호출/응답 로그와 통화 이력을 남겨 보안과 품질을 한눈에 관리',
    icon: 'folder'
  },
  {
    title: '개발 친화 문서',
    desc: '샘플 코드와 가이드, 테스트 툴킷 제공으로 빠른 PoC와 배포',
    icon: 'toolbox'
  }
]

const flowSteps = [
  {
    title: '발신 트리거',
    desc: '수신/발신 이벤트 실시간 Webhook'
  },
  {
    title: '데이터 매핑',
    desc: '전화번호 기반 고객/계약 정보 매칭'
  },
  {
    title: '업무앱 연동',
    desc: 'CRM · 그룹웨어 · ERP · 학원 · 부동산 등'
  },
  {
    title: '액션 실행',
    desc: '팝업, 기록, Click2Call, 메모 자동 저장'
  }
]

export default function ServiceIntro(){
  return (
    <>
      <div className="service-intro-page">
        <section className="service-hero">
          <div className="service-hero-content">
            <span className="eyebrow">기업070 OPEN API</span>
            <h1>통화와 업무를 잇는<br/>하나의 API 플랫폼</h1>
            <p>
              발신자 정보 표시, Click2Call, 회의통화까지. 기업 전화 인프라와 업무 솔루션을 부드럽게 연결해
              상담 효율과 고객 경험을 동시에 높이세요.
            </p>
            <div className="hero-badges">
              <span>IP-Centrex</span>
              <span>IP-PBX</span>
              <span>CRM · 그룹웨어</span>
              <span>Click2Call</span>
            </div>
          </div>
          <div className="service-hero-visual">
            <div className="orb orb-primary" />
            <div className="orb orb-secondary" />
            <img src="/callwoman.png" alt="상담 전문가" className="floating-woman" />
            <img src="/human1.png" alt="사용자 1" className="floating-human floating-human-1" />
            <img src="/human2.png" alt="사용자 2" className="floating-human floating-human-2" />
            <img src="/human3.png" alt="사용자 3" className="floating-human floating-human-3" />
            <img src="/human4.png" alt="사용자 4" className="floating-human floating-human-4" />
          </div>
        </section>

        <section className="service-section-block">
          <div className="section-heading">
            <h2>OPEN API, 이렇게 활용하세요</h2>
            <p>통화 이벤트와 업무 데이터를 실시간으로 교환해 더 빠른 의사결정과 서비스 경험을 만듭니다.</p>
          </div>
          <div className="service-feature-grid">
            {features.map((item, idx) => (
              <div key={idx} className="service-feature-card">
                <div className="feature-icon">{outlineIcons[item.icon]}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-section-block dark">
          <div className="section-heading">
            <h2>연동 플로우 한눈에 보기</h2>
            <p>Webhook으로 트리거를 받고, 데이터 매핑 후 업무 앱에 전달해 액션을 실행합니다.</p>
          </div>
          <div className="service-flow">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="flow-step">
                <div className="flow-number">{idx + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {idx !== flowSteps.length - 1 && <div className="flow-connector" />}
              </div>
            ))}
          </div>
        </section>

        {/* <section className="service-section-block cta">
          <div className="cta-inner">
            <div>
              <h2>지금 바로 연동을 시작하세요</h2>
              <p>샘플 코드와 테스트 환경을 제공해 빠르게 PoC를 진행할 수 있습니다.</p>
            </div>
            <div className="cta-actions">
              <button className="cta-btn primary">가이드 문서 보기</button>
              <button className="cta-btn ghost">샘플 다운로드</button>
            </div>
          </div>
        </section> */}

        <Footer />
      </div>
    </>
  )
}
