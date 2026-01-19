import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const categories = ['IMS Centrex', 'Centrex', 'DCS']
const types = ['PROGRAM', 'SAMPLE', 'MANUAL']

export default function LatestDownload() {
  const navigate = useNavigate()

  const handleDownload = (category, type, item) => {
    alert(`${category} - ${type} - ${item} 다운로드`)
  }

  return (
    <div className="download-page">
      <div className="page-header-section">
        <div className="page-header-content">
          <h1>최신 DOWNLOAD</h1>
          <div className="breadcrumb-nav">
            <a href="/">HOME</a>
            <a href="/download">다운로드</a>
            <span>최신 다운로드</span>
          </div>
        </div>
      </div>

      <div className="download-container">
        <div className="download-table-wrapper">
          <table className="download-table">
            <thead>
              <tr>
                <th className="col-type"></th>
                {categories.map((cat) => (
                  <th key={cat} className="col-category">{cat}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {types.map((type) => (
                <tr key={type}>
                  <td className="col-type-label">{type}</td>
                  {categories.map((category) => (
                    <td key={`${category}-${type}`} className="col-items">
                      {type === 'PROGRAM' && (
                        <div className="item-group">
                          <div className="item">
                            <span>OCX</span>
                            <button 
                              className="download-btn download-btn-red"
                              onClick={() => handleDownload(category, type, 'OCX')}
                            >
                              ↓ DOWNLOAD
                            </button>
                          </div>
                        </div>
                      )}
                      {type === 'SAMPLE' && (
                        <div className="item-group">
                          <div className="item">
                            <span>Web 설정</span>
                            <button 
                              className="download-btn download-btn-red"
                              onClick={() => handleDownload(category, type, 'Web 설정')}
                            >
                              ↓ DOWNLOAD
                            </button>
                          </div>
                          <div className="item">
                            <span>MFC VC++ 설정</span>
                            <button 
                              className="download-btn download-btn-red"
                              onClick={() => handleDownload(category, type, 'MFC VC++ 설정')}
                            >
                              ↓ DOWNLOAD
                            </button>
                          </div>
                        </div>
                      )}
                      {type === 'MANUAL' && (
                        <div className="item-group">
                          <div className="item">
                            <span>OCX Manual</span>
                            <button 
                              className="download-btn download-btn-red"
                              onClick={() => handleDownload(category, type, 'OCX Manual')}
                            >
                              ↓ DOWNLOAD
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="download-actions">
          <button 
            className="download-list-btn"
            onClick={() => navigate('/download')}
          >
            DOWNLOAD 목록
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
