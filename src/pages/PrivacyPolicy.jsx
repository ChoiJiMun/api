import React from 'react'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="privacy-policy-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>개인정보처리방침</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <span>개인정보처리방침</span>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="privacy-policy-content">
            <div className="update-info">
              <p>최종 수정일: 2025년 1월 1일</p>
            </div>

            <section className="info-section">
              <h2>개인정보처리방침</h2>

              <div className="section-content">
                <h3>1. 개인정보 수집 및 이용</h3>
                <p><strong>1.1 수집하는 개인정보</strong></p>
                <p>LG유플러스 OPEN API 서비스(이하 "서비스")는 다음과 같은 개인정보를 수집합니다:</p>
                <ul>
                  <li><strong>필수정보:</strong> 이름, 이메일, 전화번호, 주소, 회원ID, 비밀번호</li>
                  <li><strong>선택정보:</strong> 회사명, 직급, 개인 SNS 정보</li>
                  <li><strong>서비스 이용 정보:</strong> 접속 로그, 쿠키, IP주소, 접속 시간, 서비스 이용 기록</li>
                </ul>

                <p><strong>1.2 수집 방법</strong></p>
                <ul>
                  <li>웹사이트 회원가입 및 로그인 시</li>
                  <li>고객센터 문의 시</li>
                  <li>자동 수집: 쿠키, 웹 비콘, 로그 분석 등</li>
                </ul>

                <p><strong>1.3 이용 목적</strong></p>
                <ul>
                  <li>회원 가입 및 본인 확인</li>
                  <li>서비스 제공 및 이용 요금 청구</li>
                  <li>고객 상담 및 불만처리</li>
                  <li>마케팅 및 프로모션 정보 제공 (동의 시)</li>
                  <li>서비스 개선 및 통계 분석</li>
                  <li>법적 의무 이행 및 분쟁 해결</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>2. 개인정보의 보유 및 이용기간</h3>
                <ul>
                  <li><strong>원칙:</strong> 이용 목적 달성 후 지체 없이 삭제</li>
                  <li><strong>회원정보:</strong> 서비스 탈퇴 후 3개월 보관 후 삭제</li>
                  <li><strong>거래기록:</strong> 전자상거래법에 따라 5년 보관</li>
                  <li><strong>계약·청약 철회:</strong> 5년 보관</li>
                  <li><strong>소비자 불만 및 분쟁 처리:</strong> 3년 보관</li>
                  <li><strong>통신비밀보호를 위한 기록:</strong> 3개월 보관</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>3. 개인정보의 제3자 제공</h3>
                <p><strong>원칙적으로 개인정보를 제3자에게 제공하지 않습니다.</strong></p>
                <p>다만, 다음의 경우에는 개인정보를 제공할 수 있습니다:</p>
                <ul>
                  <li>사전에 동의한 경우</li>
                  <li>법령에서 정한 경우</li>
                  <li>수사기관의 요청이 있는 경우</li>
                  <li>서비스 제공을 위해 필요한 경우</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>4. 개인정보의 안전성 확보</h3>
                <p>LG유플러스는 개인정보의 안전성을 위해 다음 조치를 취하고 있습니다:</p>
                <ul>
                  <li>관리적 조치: 접근권한 제한, 직원 보안교육</li>
                  <li>기술적 조치: 암호화, 보안 프로그램 설치, 접근 제어 시스템</li>
                  <li>물리적 조치: 전산실 출입 통제, 보안 감시</li>
                </ul>
              </div>

              <div className="section-content">
                <h3>5. 개인정보의 처리 위탁</h3>
                <p>서비스 제공을 위해 다음 업체에 개인정보 처리를 위탁합니다:</p>
                <table className="partner-table">
                  <thead>
                    <tr>
                      <th>수탁사</th>
                      <th>위탁 업무</th>
                      <th>보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>클라우드 서버 제공사</td>
                      <td>데이터 호스팅</td>
                      <td>서비스 이용 기간</td>
                    </tr>
                    <tr>
                      <td>이메일 발송 서비스</td>
                      <td>고객 안내 메일 발송</td>
                      <td>서비스 이용 기간</td>
                    </tr>
                    <tr>
                      <td>결제 서비스</td>
                      <td>결제 처리</td>
                      <td>거래 관련 법령 규정 기간</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="section-content">
                <h3>6. 개인정보 주체의 권리</h3>
                <p>개인정보 주체는 다음과 같은 권리를 가지고 있습니다:</p>
                <ul>
                  <li>개인정보 열람 및 정정 요청</li>
                  <li>개인정보 삭제 요청</li>
                  <li>개인정보 처리 정지 요청</li>
                  <li>개인정보 이동 요청 (수집 동의한 경우)</li>
                </ul>
                <p>권리 행사는 고객센터(support@uplus.co.kr) 또는 전화(1544-0010)로 신청하실 수 있습니다.</p>
              </div>

              <div className="section-content">
                <h3>7. 쿠키(Cookie) 및 기술</h3>
                <p><strong>쿠키란?</strong> 웹사이트에서 회원의 편의성을 위해 저장하는 작은 데이터 파일입니다.</p>
                <p><strong>쿠키 거부:</strong> 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다. 다만 일부 서비스 이용이 제한될 수 있습니다.</p>
              </div>

              <div className="section-content">
                <h3>8. 개인정보 보호책임자</h3>
                <p>
                  <strong>개인정보보호 책임자</strong><br/>
                  이름: 개인정보보호담당자<br/>
                  부서: 고객정보보호팀<br/>
                  이메일: privacy@uplus.co.kr<br/>
                  전화: 1544-0010
                </p>
                <p>
                  <strong>개인정보 침해 신고</strong><br/>
                  개인정보침해신고센터: privacy.kisa.or.kr<br/>
                  대검찰청 사이버범죄수사단: cybercid@spo.go.kr
                </p>
              </div>

              <div className="section-content">
                <h3>9. 정책 변경</h3>
                <p>이 개인정보처리방침은 관련 법령의 변경에 따라 변경될 수 있습니다. 변경 사항은 웹사이트에 공지합니다.</p>
              </div>

              <div className="section-content">
                <h3>10. 준거법 및 관할법원</h3>
                <p>
                  이 개인정보처리방침은 대한민국 법률을 따릅니다.<br/>
                  분쟁 해결을 위한 관할법원은 서울중앙지방법원으로 합니다.
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
