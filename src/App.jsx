import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Profile from './pages/profile'


import './App.css'



export default function App() {
  

  const isConnected = true; // or true, depending on your logic

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={isConnected ? <Profile /> : <Navigate to="/login" />} />  
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}