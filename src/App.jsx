import { useState } from 'react'
// import bookLogo from './assets/books.png'
import { Route, Routes } from 'react-router-dom'
import { Books } from './components/Books'
import { Login } from './components/Login'
import { Navigations } from './components/Navigations'


function App() {

  return (
    <>
      <div>
        <Navigations />
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
