import React, { useState } from 'react';

const Archive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
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
    <div className="archive-page">
      <div className="archive-header">
        <h1>자료실</h1>
        <div className="archive-controls">
          <input type="text" placeholder="검색" className="search-input" />
          <select className="filter-select">
            <option>전체</option>
          </select>
          <button className="register-btn">등록</button>
        </div>
      </div>

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

      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">이용약관</a>
          <a href="#">이메일주소 무한수집거부</a>
          <a href="#">휴대폰불법복제센터</a>
          <a href="#">수팸메시지 대응</a>
          <a href="#">개인정보처리방침</a>
        </div>
        <p>OPEN API 서울특별시 용산구 한강대로 32 LG유플러스 빌딩 대표이사 홍범식 사업자등록번호 220-81-39938 통신판매신고 제 2015-서울용산-00481호 사업자정보확인 고객센터 : [모바일] 휴대폰+114 (무료). 1544-0010 (유료) [인터넷/TV/070] 국번없이 101, [U+ Shop Direct] 1644-7009, [기업] 1544-0001</p>
        <p>&copy; 2025 U+OPEN API. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Archive;
