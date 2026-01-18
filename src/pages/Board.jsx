import React, { useState } from 'react'
import Footer from '../components/Footer'

const initialBoardData = [
  {
    id: 1,
    title: 'API 연동 후기 및 팁 공유합니다',
    author: '개발자A',
    category: '후기',
    date: '2024-01-15',
    views: 345,
    replies: 12,
    content: 'LG U+ API를 통해 성공적으로 통합했습니다. 초기 설정에서 주의할 점들을 공유합니다...'
  },
  {
    id: 2,
    title: '그룹웨어 연동 시 발생한 오류 해결방법',
    author: '운영자B',
    category: '팁',
    date: '2024-01-14',
    views: 287,
    replies: 8,
    content: '최근 그룹웨어 연동 중 발생하는 에러에 대한 해결방법을 정리했습니다...'
  },
  {
    id: 3,
    title: '새로운 기능 아이디어 제안합니다',
    author: '사용자C',
    category: '제안',
    date: '2024-01-13',
    views: 156,
    replies: 5,
    content: 'Click2Call 기능에서 통화 녹음 기능이 추가되면 좋을 것 같습니다...'
  },
  {
    id: 4,
    title: '모바일 소프트폰 설정 가이드',
    author: '기술지원',
    category: '가이드',
    date: '2024-01-12',
    views: 412,
    replies: 15,
    content: 'iOS와 Android 모두에서 소프트폰 설정하는 방법을 단계별로 설명합니다...'
  },
  {
    id: 5,
    title: '보안 업데이트 관련 안내',
    author: '운영자D',
    category: '공지',
    date: '2024-01-11',
    views: 523,
    replies: 22,
    content: '최신 보안 패치가 적용되었습니다. 업데이트 방법은 다음과 같습니다...'
  },
  {
    id: 6,
    title: '대량 발신 기능 사용 예제',
    author: '개발자E',
    category: '후기',
    date: '2024-01-10',
    views: 234,
    replies: 7,
    content: '대량 발신 기능을 활용한 마케팅 캠페인 사례입니다...'
  },
]

const categories = ['전체', '후기', '팁', '제안', '가이드', '공지']

export default function Board(){
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredBoard = initialBoardData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredBoard.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedBoard = filteredBoard.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="board-page">
      <div className="board-header-section">
        <div className="board-header-content">
          <h1>커뮤니티</h1>
          <p>사용자들이 공유하는 팁, 후기, 제안을 확인하세요.</p>
        </div>
      </div>

      <div className="board-container">
        <div className="board-top-controls">
          <div className="board-search">
            <input 
              type="text" 
              placeholder="게시글 검색..." 
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

        <div className="board-category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat)
                setCurrentPage(1)
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {paginatedBoard.length > 0 ? (
          <>
            <div className="board-list">
              {paginatedBoard.map((item) => (
                <div key={item.id} className="board-item">
                  <div className="board-item-main">
                    <div className="board-item-left">
                      <span className="board-category-tag">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="board-item-right">
                      <span className="board-replies">{item.replies}</span>
                    </div>
                  </div>
                  <div className="board-item-footer">
                    <span className="board-author">{item.author}</span>
                    <span className="board-date">{item.date}</span>
                    <span className="board-stat">조회 {item.views}</span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="board-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`board-page-btn ${currentPage === page ? 'active' : ''}`}
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
          <div className="board-empty">
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
