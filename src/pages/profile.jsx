import React, { useState } from 'react';
import User from '../components/User';
import Account from '../components/Account';
import TransactionDetails from '../components/TransactionDetails';
import AmountCardDataBase from '../Database/AmoutCardDataBase.json';
import '../styles/Pages/profile.css';

const Profile = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const modifyTransaction = (newDetails) => {
        setSelectedTransaction(newDetails);
    };

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
                            description: 'Monthly Subscription'
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
