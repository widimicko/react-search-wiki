/* eslint-disable no-unused-vars */
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
