import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './header'

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
),

  ReactDOM.createRoot(document.getElementById('header')).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  )
