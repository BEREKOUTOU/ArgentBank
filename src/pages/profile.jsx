import React, { useState } from 'react';
import User from '../components/User';
import Account from '../components/Account';
import TransactionDetails from '../components/TransactionDetails';
import AmountCardDataBase from '../Database/AmoutCardDataBase.json';
import '../styles/Pages/profile.css';

const Profile = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
  // Function to modify the transaction details
    // This function will set the selectedTransaction to the new details passed in
    const modifyTransaction = (newDetails) => {
        setSelectedTransaction(newDetails);
    };
    // Function to delete the transaction
    // This function will set the selectedTransaction to null, effectively "deleting" it from the view
    const deleteTransaction = () => {
        setSelectedTransaction(null);
    };

    return (
        <div className="profile-container">
            <User />
            {AmountCardDataBase.map((card) => (
                <Account
                    key={card.id}
                    title={card.title}
                    amount={card.amount}
                    description={card.description}
                    onViewTransactions={() => {
                        console.log('View transactions clicked');
                        modifyTransaction({
                            date: '2023-10-01',
                            amount: '$100.00',
                            description: 'Monthly Subscription',
                            hour: '10:00 AM'
                        });
                    }}
                />
            ))}
            {selectedTransaction && (
                <>
                    <TransactionDetails transaction={selectedTransaction} />
                    <button className='delete-button' onClick={deleteTransaction}>Delete Transaction</button>
                </>
            )}
        </div>
    );
};

export default Profile;
