import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Header from './Components/Header/Header'

ReactDOM.createRoot(document.getElementById('main')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)