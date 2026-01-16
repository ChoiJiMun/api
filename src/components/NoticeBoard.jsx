import React from 'react'

const notices = [
  {title: 'API개발 가이드 안내', date: '23.12.01'},
  {title: '고급형 센트릭스 Rest API 개선사항 공지', date: '19.06.19'},
  {title: 'IMS 센트릭스 Open API 및 Rest API 서...', date: '16.11.03'},
]

export default function NoticeBoard(){
  return (
    <div className="notice-list">
      <div className="col">
        <div className="notice-head">
          <h4>NOTICE</h4>
          <button className="more-btn">more</button>
        </div>
        <ul>
          {notices.map((n,i)=> (
            <li key={i}><span className="title">{n.title}</span> <em>{n.date}</em></li>
          ))}
        </ul>
      </div>
      <div className="col">
        <div className="notice-head">
          <h4>BOARD</h4>
          <button className="more-btn">more</button>
        </div>
        <ul>
          <li><span className="title">고급형 Centrex Rest API v4.2 연동 규격</span> <em>25.11.11</em></li>
          <li><span className="title">고급형 Centrex Rest API v4.0 연동 규격</span> <em>20.03.09</em></li>
        </ul>
      </div>
    </div>
  )
}
