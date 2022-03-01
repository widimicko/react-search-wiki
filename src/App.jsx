/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import Header from './components/Header'

function App () {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevTheme => !prevTheme)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className=''>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search/:label" element={<Search/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
