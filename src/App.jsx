import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Route, Routes } from 'react-router-dom'
import { Books } from './components/Books'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Navigations } from './components/Navigations'
import { SingleBook } from './components/SingleBook'
import { Account } from './components/Account'


function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");

  return (
    <>
      <h1><img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <div>
        <Navigations username={username} setUsername={setUsername}/>
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login setToken={setToken} username={username} setUsername={setUsername}/>} />
            <Route path="/register" element={<Register setToken={setToken} />} />
            <Route path="/books/:bookId" element={<SingleBook token={token} />} />
            <Route path="/account" element={<Account token={token} username={username} setUsername={setUsername}/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
