import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import Logo from '../assets/Images/argentBankLogo.webp'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Components/Header.css';
import { logout } from '../redux/actions/auth.actions'; // Adjust the path as necessary


/**
 * Header component that renders the website's main navigation bar.
 * 
 * - Displays the bank logo.
 * - Provides a link to the login page.
 * - Conditionally renders the profile route based on user authentication.
 */

const Header = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        // Add your logout logic here
            dispatch(logout());
            localStorage.removeItem('token');
            window.location.reload();
            Navigate('/');
 
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