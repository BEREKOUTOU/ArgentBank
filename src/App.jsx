import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'



export default function App() {
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            
            
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}