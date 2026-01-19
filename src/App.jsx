import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ServiceIntro from './pages/ServiceIntro'
import Archive from './pages/Archive'
import QA from './pages/QA'
import Board from './pages/Board'
import Notice from './pages/Notice'
import LatestDownload from './pages/LatestDownload'
import MyPage from './pages/MyPage'
import EditProfile from './pages/EditProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import FindId from './pages/FindId'
import FindPassword from './pages/FindPassword'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import EmailProtection from './pages/EmailProtection'

export default function App(){
  return (
    <BrowserRouter>
      <div className="page-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceIntro />} />
          <Route path="/download" element={<Archive />} />
          <Route path="/download/latest" element={<LatestDownload />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/board" element={<Board />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/find-password" element={<FindPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/email-protection" element={<EmailProtection />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
