import React from 'react'
import Footer from '../components/Footer'

export default function Archive() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [viewMode, setViewMode] = React.useState('card'); // 'card' or 'list'
  
  const apiCards = [
    {
      id: 1,
      title: '고급형 Centrex Rest API v4.0 망을 규격입니다.',
      image: '/downimg1.png',
      tags: ['API', '고급문서'],
      category: ['MS Centrex', 'Program']
    },
    {
      id: 2,
      title: '통합DCS 용 Rest API v1.0 망을 규격서입니다.',
      image: '/downimg2.png',
      tags: ['v2.3', 'VDC++'],
      category: ['Centrex', 'Sample']
    },
    {
      id: 3,
      title: 'VS2008 C#용 Sample 프로젝트입니다. (DCS/고급형 센트렉스)',
      image: '/downimg3.png',
      tags: ['v1.0', 'new API'],
      category: ['DCS', 'Manual']
    },
    {
      id: 4,
      title: 'IMS 센트렉스용 Web Sample입니다.',
      image: '/downimg1.png',
      tags: ['통합DCS', '고급문서'],
      category: ['DCS', 'Manual']
    },
    {
      id: 5,
      title: '고급형 Centrex Rest API v4.0 망을 규격입니다.',
      image: '/downimg2.png',
      tags: ['API', '고급문서'],
      category: ['MS Centrex', 'Program']
    },
    {
      id: 6,
      title: '통합DCS 용 Rest API v1.0 망을 규격서입니다.',
      image: '/downimg3.png',
      tags: ['v2.3', 'VDC++'],
      category: ['Centrex', 'Sample']
    },
    {
      id: 7,
      title: 'VS2008 C#용 Sample 프로젝트입니다. (DCS/고급형 센트렉스)',
      image: '/downimg1.png',
      tags: ['v1.0', 'new API'],
      category: ['DCS', 'Manual']
    },
    {
      id: 8,
      title: 'IMS 센트렉스용 Web Sample입니다.',
      image: '/downimg2.png',
      tags: ['통합DCS', '고급문서'],
      category: ['DCS', 'Manual']
    },
    {
      id: 9,
      title: '고급형 Centrex Rest API v4.0 망을 규격입니다.',
      image: '/downimg3.png',
      tags: ['API', '고급문서'],
      category: ['MS Centrex', 'Program']
    }
  ];

  return (
    <>
      <div className="archive-page">
        <div className="page-header-section">
          <div className="page-header-content">
            <h1>다운로드</h1>
            <div className="breadcrumb-nav">
              <a href="/">HOME</a>
              <a href="/download">다운로드</a>
              <span>다운로드 목록</span>
            </div>
          </div>
        </div>
        
        <div className="archive-header-controls">
          <div className="archive-controls">
            <input type="text" placeholder="검색" className="search-input" />
            <div className="filter-wrapper">
              <select className="filter-select">
                <option>전체</option>
                <option>API</option>
                <option>Sample</option>
                <option>Manual</option>
              </select>
            </div>
            <button className="register-btn">등록</button>
          </div>
          <div className="view-mode-toggle">
            <button 
              className={`view-btn ${viewMode === 'card' ? 'active' : ''}`}
              onClick={() => setViewMode('card')}
              title="카드 뷰"
            >
              ⊞
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="리스트 뷰"
            >
              ☰
            </button>
          </div>
        </div>

        {viewMode === 'card' ? (
        <div className="api-grid">
          {apiCards.map((card) => (
            <div key={card.id} className="api-card">
              <div className="api-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="api-card-content">
                <p className="api-card-title">{card.title}</p>
                <div className="api-card-tags">
                  {card.category.map((cat, idx) => (
                    <span key={idx} className={`tag ${idx === 0 ? 'tag-pink' : 'tag-gray'}`}>
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="api-card-meta">
                  {card.tags.map((tag, idx) => (
                    <span key={idx} className="meta-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
        <div className="api-list">
          {apiCards.map((card) => (
            <div key={card.id} className="api-list-item">
              <div className="api-list-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="api-list-content">
                <p className="api-list-title">{card.title}</p>
                <div className="api-list-meta">
                  <div className="api-list-tags">
                    {card.category.map((cat, idx) => (
                      <span key={idx} className={`tag ${idx === 0 ? 'tag-pink' : 'tag-gray'}`}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="api-list-keywords">
                    {card.tags.map((tag, idx) => (
                      <span key={idx} className="meta-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="download-link-btn">
                <span>다운로드</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
        )}

        <div className="pagination">
          <button 
            className={`page-btn ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button 
            className={`page-btn ${currentPage === 2 ? 'active' : ''}`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button 
            className={`page-btn ${currentPage === 3 ? 'active' : ''}`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
          <button 
            className={`page-btn ${currentPage === 4 ? 'active' : ''}`}
            onClick={() => setCurrentPage(4)}
          >
            4
          </button>
          <button 
            className={`page-btn ${currentPage === 5 ? 'active' : ''}`}
            onClick={() => setCurrentPage(5)}
          >
            5
          </button>
          <button className="page-btn">›</button>
        </div>

        <Footer />
      </div>
    </>
  );
}
