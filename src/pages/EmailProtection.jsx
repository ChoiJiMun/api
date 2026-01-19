import React from 'react'
import Footer from '../components/Footer'

export default function EmailProtection() {
  return (
    <>
      <div className="email-protection-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>이메일주소 무한수집거부</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>이메일주소 무한수집거부</span>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="email-protection-content">
            <section className="info-section">
              <h2>이메일주소 무한수집거부</h2>
              
              <div className="section-content">
                <h3>개요</h3>
                <p>LG유플러스는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조에 따라 인터넷 상에서 이루어지는 무단 수집에 대해 거부하는 의사를 표시합니다.</p>
              </div>

              <div className="section-content">
                <h3>거부 대상</h3>
                <p>본 거부 의사는 다음과 같은 행위에 적용됩니다:</p>
                <ul>
                  <li>자동화된 도구나 프로그램을 사용한 이메일주소 수집</li>
                  <li>로봇, 스크래퍼 등의 자동 수집 프로그램을 이용한 수집</li>
                  <li>본인의 동의 없이 이루어지는 모든 형태의 이메일주소 수집</li>
                  <li>수집된 이메일주소의 상업적 이용</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>법적 근거</h3>
                <p>
                  본 거부 의사는 정보통신망법 제50조 및 스팸 규제에 관한 법률에 근거합니다.<br/>
                  <br/>
                  <strong>정보통신망법 제50조</strong><br/>
                  누구든지 영리 목적으로 정보통신망에 접속하여 자동으로 수집되도록 프로그래밍된 장치나 그 밖의 기술적 장치를 이용하여 다른 사람의 개인정보를 수집·저장·전송하면 안 된다.
                </p>
              </div>

              <div className="section-content">
                <h3>위반 시 조치</h3>
                <p>본 거부 의사에 반하여 이메일주소를 수집·이용하는 자에 대해서는 다음과 같은 조치를 취할 수 있습니다:</p>
                <ul>
                  <li>관련 법률에 따른 고소, 고발</li>
                  <li>민사 소송을 통한 손해배상 청구</li>
                  <li>행정기관에 신고</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>거부 신청 방법</h3>
                <p>이메일 수집 프로그램을 사용하는 자가 본 거부 의사를 인식할 수 있도록 다음의 메타 정보를 담아 접근 제한을 설정합니다:</p>
                <div className="code-box">
                  &lt;META NAME="robots" CONTENT="no-index, no-follow, no-email-collection"&gt;
                </div>
              </div>

              <div className="section-content">
                <h3>문의 및 신고</h3>
                <p>
                  비정상적인 이메일주소 수집으로 인한 문제가 발생하는 경우 다음 연락처로 신고해주시기 바랍니다.<br/>
                  <br/>
                  <strong>고객센터:</strong> 1544-0010 (유료) / 휴대폰 114 (무료)<br/>
                  <strong>이메일:</strong> support@uplus.co.kr
                </p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
