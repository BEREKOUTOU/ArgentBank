import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'


import './App.css'



export default function App() {
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}