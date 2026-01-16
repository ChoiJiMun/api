import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [expandedMobile, setExpandedMobile] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const menus = [
    { title: '서비스 소개', path: '/service', sub: [] },
    { title: '다운로드', path: '/download', sub: ['최신 다운로드', '다운로드 목록'] },
    { title: '고객지원', path: '#', sub: [
      { title: 'Q&A', path: '/qa' },
      { title: '게시판', path: '#' },
      { title: '공지사항', path: '#' }
    ] },
    { title: '마이페이지', path: '#', sub: ['내 정보 수정'] },
  ]

  return (
    <header className={`site-header ${isHidden ? 'hide' : ''}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src="/lglogo.svg" alt="LG U+" style={{ height: '30px' }} />
        </div>
        <nav className="top-nav">
          {menus.map((menu, index) => (
            <div 
              key={index}
              className="nav-item"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href={menu.path} onClick={(e) => {
                e.preventDefault();
                if (menu.path !== '#') {
                  navigate(menu.path);
                }
              }}>{menu.title}</a>
              {menu.sub.length > 0 && hoveredMenu === index && (
                <div className="submenu">
                  {menu.sub.map((item, subIndex) => {
                    const itemPath = typeof item === 'string' ? '#' : item.path
                    const itemTitle = typeof item === 'string' ? item : item.title
                    return (
                      <a key={subIndex} href={itemPath} onClick={(e) => {
                        e.preventDefault();
                        if (itemPath !== '#') {
                          navigate(itemPath);
                        }
                      }}>{itemTitle}</a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-right">
          <button className="login-btn">로그인</button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpen && (
          <nav className="mobile-menu">
            <button className="mobile-login-btn">로그인</button>
            {menus.map((menu, index) => (
              <div key={index} className="mobile-menu-item">
                <div 
                  className="mobile-menu-title"
                  onClick={() => {
                    if (menu.sub.length > 0) {
                      setExpandedMobile(expandedMobile === index ? null : index);
                    } else if (menu.path !== '#') {
                      navigate(menu.path);
                      setMenuOpen(false);
                    }
                  }}
                >
                  <span>{menu.title}</span>
                  {menu.sub.length > 0 && (
                    <span className={`mobile-menu-arrow ${expandedMobile === index ? 'expanded' : ''}`}>▼</span>
                  )}
                </div>
                {menu.sub.length > 0 && expandedMobile === index && (
                  <div className="mobile-submenu">
                    {menu.sub.map((item, subIndex) => {
                      const itemPath = typeof item === 'string' ? '#' : item.path
                      const itemTitle = typeof item === 'string' ? item : item.title
                      return (
                        <a 
                          key={subIndex} 
                          href={itemPath}
                          onClick={(e) => {
                            e.preventDefault();
                            if (itemPath !== '#') {
                              navigate(itemPath);
                              setMenuOpen(false);
                            }
                          }}
                        >{itemTitle}</a>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
