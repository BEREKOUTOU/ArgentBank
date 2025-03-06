import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/argentBankLogo.webp'
import { useSelector } from 'react-redux';

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
        console.log('User logged out');
    };
    const isConnected = useSelector((state) => state.auth.token);
    const firstName = useSelector((state) => state.auth.firstName);

    return (
        <header>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li>
                        <img src={Logo} alt="Bank Logo" />
                    </li>
                    <li>
                    {isConnected ? (
                        <li>
                            <Link to="/profile"><i className="fa-solid fa-circle-user"></i>{firstName}</Link>
                            <Link to="/"  onClick={logoutHandler}><i className='fa-solid fa-arrow-right-from-bracket' />Sign Out</Link>
                        </li> 
                    ) : (
                        <li>
                            <Link to="/login"><i className="fa-solid fa-circle-user"></i>Sign In</Link>
                        </li>
                    )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header