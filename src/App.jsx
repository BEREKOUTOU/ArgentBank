import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Profile from './pages/profile'
import { loginSuccess } from './redux/actions/auth.actions.jsx';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.auth.isConnected);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSuccess(token));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={isConnected ? <Profile /> : <Navigate to="/login" />} />  
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  )
}
