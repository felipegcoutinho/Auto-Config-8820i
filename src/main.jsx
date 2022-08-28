import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './header'
import Poncontainer from './pon-container'


ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
),

  ReactDOM.createRoot(document.getElementById('main')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

