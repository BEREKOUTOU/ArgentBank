import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/argentBankLogo.webp'

const Header = () => {
    return (
        <header>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li>
                        <img src={Logo} alt="Bank Logo" />
                    </li>
                    <li>
                        <Link to="/login"><i className="fa-solid fa-circle-user"></i>Sign In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header