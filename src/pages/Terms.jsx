import React from 'react'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <div className="terms-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>이용약관</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>이용약관</span>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="terms-content">
            <section className="terms-section">
              <h2>제1장 총칙</h2>
              
              <div className="terms-article">
                <h3>제1조 (목적)</h3>
                <p>본 약관은 LG유플러스가 운영하는 U+ OPEN API 서비스(이하 "서비스"라 함)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              </div>

              <div className="terms-article">
                <h3>제2조 (용어의 정의)</h3>
                <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <ul>
                  <li><strong>회사:</strong> 서비스를 제공하는 LG유플러스를 의미합니다.</li>
                  <li><strong>이용자:</strong> 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
                  <li><strong>회원:</strong> 회사에 개인정보를 제공하여 회원가입을 한 후 서비스를 이용하는 자를 의미합니다.</li>
                  <li><strong>API:</strong> 응용프로그래밍인터페이스를 의미합니다.</li>
                </ul>
              </div>

              <div className="terms-article">
                <h3>제3조 (약관의 효력 및 변경)</h3>
                <p>1. 본 약관은 회사가 정한 절차에 따라 회원가입 시 이를 명시적으로 수락함으로써 효력이 발생합니다.</p>
                <p>2. 회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 공시 후 효력이 발생합니다.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2>제2장 서비스 이용</h2>

              <div className="terms-article">
                <h3>제4조 (회원가입)</h3>
                <p>1. 이용자가 본 약관에 동의하고 회원가입 양식에 따라 가입신청을 하면 회사가 이를 승낙함으로써 회원이 됩니다.</p>
                <p>2. 회원은 정확하고 완전한 정보를 제공하여야 하며, 이에 대한 책임은 회원에게 있습니다.</p>
              </div>

              <div className="terms-article">
                <h3>제5조 (서비스의 제공)</h3>
                <p>1. 회사는 회원에게 API 접근권한, 기술지원, 개발문서 등을 제공합니다.</p>
                <p>2. 서비스 이용 시 발생하는 통신료 및 기타 비용은 회원이 부담합니다.</p>
              </div>

              <div className="terms-article">
                <h3>제6조 (이용자의 의무)</h3>
                <p>1. 회원은 다음 행위를 하면 안 됩니다.</p>
                <ul>
                  <li>타인의 정보를 도용하여 가입하는 행위</li>
                  <li>서비스를 이용하여 불법적인 목적으로 정보를 수집하는 행위</li>
                  <li>회사의 서버를 해킹하거나 바이러스를 유포하는 행위</li>
                  <li>게시된 정보를 무단으로 복제, 배포하는 행위</li>
                </ul>
              </div>
            </section>

            <section className="terms-section">
              <h2>제3장 책임과 의무</h2>

              <div className="terms-article">
                <h3>제7조 (서비스 이용료)</h3>
                <p>본 서비스는 무료로 제공되며, 향후 유료 정책이 변경될 경우 사전 공지하겠습니다.</p>
              </div>

              <div className="terms-article">
                <h3>제8조 (회사의 책임 제한)</h3>
                <p>1. 회사는 천재지변, 전쟁, 테러, 정부의 규제 등으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
                <p>2. 회원의 귀책사유로 인한 손해에 대해서는 회사가 책임을 지지 않습니다.</p>
              </div>

              <div className="terms-article">
                <h3>제9조 (약관의 해제)</h3>
                <p>1. 회원은 언제든지 서비스 해지를 신청할 수 있습니다.</p>
                <p>2. 회사는 회원이 본 약관을 위반한 경우 사전 통지 후 서비스를 중단할 수 있습니다.</p>
              </div>
            </section>

            <section className="terms-section">
              <h2>제4장 기타</h2>

              <div className="terms-article">
                <h3>제10조 (준거법 및 관할)</h3>
                <p>1. 본 약관은 대한민국 법률에 따라 해석됩니다.</p>
                <p>2. 본 약관으로 인한 분쟁은 서울지방법원을 관할법원으로 합니다.</p>
              </div>

              <div className="terms-article">
                <h3>제11조 (부칙)</h3>
                <p>본 약관은 2025년 1월 1일부터 시행됩니다.</p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
