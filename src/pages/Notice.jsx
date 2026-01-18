import React, { useState } from 'react'
import Footer from '../components/Footer'

const initialNoticeData = [
  {
    id: 1,
    title: 'LG U+ API 새로운 버전 v2.5 출시 안내',
    date: '2024-01-15',
    views: 1245,
    isPinned: true,
    content: '더 빠른 성능과 향상된 안정성을 제공하는 새로운 버전이 출시되었습니다. 업그레이드 방법은 아래를 참고하세요...'
  },
  {
    id: 2,
    title: '2024년 1월 정기 점검 예정 안내',
    date: '2024-01-13',
    views: 892,
    isPinned: true,
    content: '서비스의 안정성 향상을 위해 정기 점검을 진행할 예정입니다. 자세한 일정은 다음과 같습니다...'
  },
  {
    id: 3,
    title: '개발자 포럼 이용 규칙 개정 안내',
    date: '2024-01-10',
    views: 634,
    isPinned: false,
    content: '커뮤니티의 건전한 운영을 위해 이용 규칙을 일부 개정했습니다. 개정 내용을 확인하시기 바랍니다...'
  },
  {
    id: 4,
    title: '보안 업데이트 긴급 공지',
    date: '2024-01-08',
    views: 1567,
    isPinned: false,
    content: '보안 취약점이 발견되어 긴급 업데이트를 진행합니다. 즉시 업그레이드를 권장합니다...'
  },
  {
    id: 5,
    title: 'API 요청 한도 정책 변경 안내',
    date: '2024-01-05',
    views: 789,
    isPinned: false,
    content: '공정한 서비스 제공을 위해 API 요청 한도 정책을 변경했습니다...'
  },
  {
    id: 6,
    title: '새로운 기술 문서 업로드 완료',
    date: '2024-01-01',
    views: 456,
    isPinned: false,
    content: '더 자세한 기술 문서들이 개발자 센터에 추가되었습니다...'
  },
]

export default function Notice(){
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredNotice = initialNoticeData.filter(item => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const pinnedNotices = filteredNotice.filter(item => item.isPinned)
  const unpinnedNotices = filteredNotice.filter(item => !item.isPinned)
  
  const totalPages = Math.ceil(unpinnedNotices.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedNotice = unpinnedNotices.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="notice-page">
      <div className="notice-header-section">
        <div className="notice-header-content">
          <h1>공지사항</h1>
          <p>LG U+ API 서비스 관련 중요한 소식을 확인하세요.</p>
        </div>
      </div>

      <div className="notice-container">
        <div className="notice-search">
          <input 
            type="text" 
            placeholder="공지사항 검색..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
          />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        {pinnedNotices.length > 0 && (
          <div className="notice-pinned-section">
            <h2>📌 주요 공지</h2>
            <div className="notice-list">
              {pinnedNotices.map((item) => (
                <div key={item.id} className="notice-item notice-item-pinned">
                  <div className="notice-item-header">
                    <div className="notice-title-group">
                      <span className="notice-pinned-badge">📌</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="notice-item-footer">
                    <span className="notice-date">{item.date}</span>
                    <span className="notice-views">조회 {item.views}</span>
                  </div>
                  <p className="notice-preview">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {paginatedNotice.length > 0 ? (
          <>
            <div className="notice-list">
              {paginatedNotice.map((item) => (
                <div key={item.id} className="notice-item">
                  <div className="notice-item-header">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="notice-item-footer">
                    <span className="notice-date">{item.date}</span>
                    <span className="notice-views">조회 {item.views}</span>
                  </div>
                  <p className="notice-preview">{item.content}</p>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="notice-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`notice-page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentPage(page)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="notice-empty">
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
