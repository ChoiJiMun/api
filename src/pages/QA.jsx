import React, { useState } from 'react'
import Footer from '../components/Footer'

const initialQAData = [
  {
    id: 1,
    title: 'API 연동 시 필요한 인증 정보는 무엇인가요?',
    category: '기술',
    date: '2024-01-15',
    views: 245,
    answers: 3,
    content: 'API 연동을 위해서는 API Key와 Secret Key가 필요합니다. 개발자 대시보드에서 발급받을 수 있습니다.'
  },
  {
    id: 2,
    title: 'Click2Call 기능의 지연 시간은 얼마나 되나요?',
    category: '기능',
    date: '2024-01-14',
    views: 189,
    answers: 2,
    content: '일반적으로 100ms 이내의 지연으로 즉시 연결됩니다.'
  },
  {
    id: 3,
    title: '그룹웨어 연동 시 보안 수준은 어떻게 되나요?',
    category: '보안',
    date: '2024-01-13',
    views: 156,
    answers: 4,
    content: '엔드-투-엔드 암호화와 OAuth 2.0 기반의 인증을 지원합니다.'
  },
  {
    id: 4,
    title: '사용 중 오류가 발생했을 때 대응 시간은?',
    category: '지원',
    date: '2024-01-12',
    views: 212,
    answers: 5,
    content: '24시간 기술 지원팀이 대기 중이며, 평균 1시간 이내 대응합니다.'
  },
  {
    id: 5,
    title: '멀티 디바이스 지원 범위는?',
    category: '기능',
    date: '2024-01-11',
    views: 178,
    answers: 3,
    content: 'IP-Centrex, IP-PBX, 소프트폰, 하드폰 및 웹 기반 클라이언트 모두 지원합니다.'
  },
  {
    id: 6,
    title: '통화 이력 저장 기간은 얼마인가요?',
    category: '기능',
    date: '2024-01-10',
    views: 134,
    answers: 2,
    content: '기본적으로 1년간 저장되며, 요청 시 연장 가능합니다.'
  },
]

const categories = ['전체', '기술', '기능', '보안', '지원']

export default function QA(){
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredQA = initialQAData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredQA.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedQA = filteredQA.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="qa-page">
      <div className="qa-header-section">
        <div className="qa-header-content">
          <h1>자주 묻는 질문</h1>
          <p>고객들이 자주 묻는 질문과 답변을 통해 빠르게 정보를 얻으세요.</p>
        </div>
      </div>

      <div className="qa-container">
        <div className="qa-controls">
          <div className="qa-search">
            <input 
              type="text" 
              placeholder="질문 검색..." 
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

          <div className="qa-category-filter">
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
        </div>

        {paginatedQA.length > 0 ? (
          <>
            <div className="qa-list">
              {paginatedQA.map((item) => (
                <div key={item.id} className="qa-item">
                  <div className="qa-item-header">
                    <div className="qa-item-title-group">
                      <span className="qa-category-tag">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="qa-item-meta">
                      <span className="qa-date">{item.date}</span>
                      <span className="qa-stat">조회 {item.views}</span>
                      <span className="qa-stat">답변 {item.answers}</span>
                    </div>
                  </div>
                  <div className="qa-item-content">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="qa-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`qa-page-btn ${currentPage === page ? 'active' : ''}`}
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
          <div className="qa-empty">
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
