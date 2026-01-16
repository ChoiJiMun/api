import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ServiceIntro from './pages/ServiceIntro'
import Archive from './pages/Archive'
import QA from './pages/QA'

export default function App(){
  return (
    <BrowserRouter>
      <div className="page-root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceIntro />} />
          <Route path="/download" element={<Archive />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
