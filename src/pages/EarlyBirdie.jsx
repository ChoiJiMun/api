import React from 'react'
import Footer from '../components/Footer'

export default function EarlyBirdie() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <iframe
        src="/preview.html"
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
          marginTop: '73px',
          marginBottom: '0'
        }}
        title="EarlyBirdie Preview"
      />
      <Footer />
    </div>
  )
}
