import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/argentBankLogo.webp'
import { useSelector } from 'react-redux';
import '../styles/Components/Header.css';


/**
 * Header component that renders the website's main navigation bar.
 * 
 * - Displays the bank logo.
 * - Provides a link to the login page.
 * - Conditionally renders the profile route based on user authentication.
 */

const Header = () => {

    const logoutHandler = () => {
        // Add your logout logic here
            localStorage.removeItem('token');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('email');
            localStorage.removeItem('userId');
 
        console.log('User logged out');
    };
    const isConnected = useSelector((state) => state.auth.token);
    const firstName = useSelector((state) => state.auth.firstName);
     
    
    return (
        <header>
            <nav>
                <Link to="/"><img src={Logo} alt="Bank Logo" /></Link>
                    {isConnected ? (
                       <div>
                            <Link to="/profile"><i className="fa-solid fa-circle-user"></i>{firstName}Tony</Link>
                            <Link to="/"  onClick={logoutHandler}><i className='fa fa-sign-out' />Sign Out</Link>
                        </div>
                    ) : (
                      
                      <Link to="/login"><i className="fa-solid fa-circle-user"></i>Sign In</Link>
                      
                    )}
                    
              
            </nav>
        </header>
    )
}
export default Header