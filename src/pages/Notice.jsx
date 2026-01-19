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
  {
    id: 7,
    title: '클라이언트 라이브러리 업데이트 안내',
    date: '2023-12-28',
    views: 523,
    isPinned: false,
    content: '새로운 버전의 클라이언트 라이브러리가 릴리스되었습니다. 최신 기능을 확인하세요...'
  },
  {
    id: 8,
    title: '개발자 커뮤니티 이벤트 개최',
    date: '2023-12-25',
    views: 612,
    isPinned: false,
    content: '2024년 개발자 커뮤니티 이벤트를 개최합니다. 많은 참가 부탁드립니다...'
  },
  {
    id: 9,
    title: 'API 성능 최적화 완료',
    date: '2023-12-20',
    views: 445,
    isPinned: false,
    content: '최근 API 성능을 크게 개선했습니다. 더 빠른 응답 속도를 경험하세요...'
  },
  {
    id: 10,
    title: '장애 이력 및 조치 사항 공지',
    date: '2023-12-15',
    views: 678,
    isPinned: false,
    content: '최근 발생한 일시적 장애에 대해 안내드립니다. 조치 사항을 확인하세요...'
  },
  {
    id: 11,
    title: '새로운 결제 옵션 추가',
    date: '2023-12-10',
    views: 734,
    isPinned: false,
    content: '더 다양한 결제 방식을 지원하기 시작했습니다...'
  },
  {
    id: 12,
    title: 'API 문서 완전 개편',
    date: '2023-12-05',
    views: 891,
    isPinned: false,
    content: 'API 문서가 완전히 개편되었습니다. 더 쉽고 명확한 설명을 참고하세요...'
  },
]

export default function Notice(){
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState(new Set())
  const itemsPerPage = 5

  const filteredNotice = initialNoticeData.filter(item => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const pinnedNotices = filteredNotice.filter(item => item.isPinned)
  const unpinnedNotices = filteredNotice.filter(item => !item.isPinned)
  
  const totalPages = Math.ceil(unpinnedNotices.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedNotice = unpinnedNotices.slice(startIdx, startIdx + itemsPerPage)

  const handleSelectItem = (id) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedItems(newSelected)
  }

  const handleSelectAll = (notices) => {
    const newSelected = new Set(selectedItems)
    const allIds = notices.map(item => item.id)
    const allSelected = allIds.every(id => newSelected.has(id))
    
    if (allSelected) {
      allIds.forEach(id => newSelected.delete(id))
    } else {
      allIds.forEach(id => newSelected.add(id))
    }
    setSelectedItems(newSelected)
  }

  return (
    <div className="notice-page">
      <div className="page-header-section">
        <div className="page-header-content">
          <h1>공지사항</h1>
          <p>LG U+ API 서비스 관련 중요한 소식을 확인하세요.</p>
          <div className="breadcrumb-nav">
            <a href="/">HOME</a>
            <a href="/support">고객지원</a>
            <span>공지사항</span>
          </div>
        </div>
      </div>

      <div className="notice-container">
        <div className="notice-top-controls">
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
          <button className="write-btn">글쓰기</button>
        </div>

        {paginatedNotice.length > 0 ? (
          <>
            <div className="notice-table-wrapper">
              <table className="notice-table">
                <thead>
                  <tr>
                    <th className="col-checkbox">
                      <input 
                        type="checkbox" 
                        checked={paginatedNotice.length > 0 && paginatedNotice.every(item => selectedItems.has(item.id))}
                        onChange={() => handleSelectAll(paginatedNotice)}
                      />
                    </th>
                    <th className="col-number">번호</th>
                    <th className="col-title">제목</th>
                    <th className="col-author">작성자</th>
                    <th className="col-date">작성일</th>
                    <th className="col-views">조회</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedNotice.map((item, index) => (
                    <tr key={item.id} className="notice-table-row">
                      <td className="col-checkbox">
                        <input 
                          type="checkbox" 
                          checked={selectedItems.has(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                      </td>
                      <td className="col-number">{startIdx + index + 1}</td>
                      <td className="col-title">{item.title}</td>
                      <td className="col-author">관리자</td>
                      <td className="col-date">{item.date}</td>
                      <td className="col-views">{item.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="notice-pagination">
                <button 
                  className="notice-page-btn notice-prev-btn"
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1)
                      window.scrollTo(0, 0)
                    }
                  }}
                  disabled={currentPage === 1}
                >
                  ◀
                </button>
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
                <button 
                  className="notice-page-btn notice-next-btn"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1)
                      window.scrollTo(0, 0)
                    }
                  }}
                  disabled={currentPage === totalPages}
                >
                  ▶
                </button>
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
