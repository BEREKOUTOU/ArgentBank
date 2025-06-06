import React from 'react';
import '../styles/Components/Account.css';

/* Component function that returns a user's account */
function Account ({ title, amount, description, onViewTransactions }) {
    return (
        <section className='account'>
            <h2 className='sr-only'>Accounts</h2>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </div>
            <div className='account-content-wrapper cta'>
            <button className='transaction-button' onClick={() => { console.log('View transactions clicked'); onViewTransactions(); }}>View transactions</button>

            </div>
        </section> 
    )
}

export default Account;
