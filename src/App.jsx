import { useState } from 'react'
// import bookLogo from './assets/books.png'
import { Route, Routes } from 'react-router-dom'
import { Books } from './components/Books'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Navigations } from './components/Navigations'
import { SingleBook } from './components/SingleBook'


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
            <Route path="/register" element={<Register />} />
            <Route path="/books/:bookId" element={<SingleBook />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
