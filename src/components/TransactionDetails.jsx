import React from 'react';
import '../styles/Components/TransactionDetails.css';

/* Component function that displays transaction details */
function TransactionDetails({ transaction }) {
    return (
        <div className='transaction-details'>
            <h2>Transaction Details</h2>
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
            <p><strong>Description:</strong> {transaction.description}</p>
            <p><strong>Hour:</strong> {transaction.hour}</p>
        </div>
    );
}

export default TransactionDetails;
