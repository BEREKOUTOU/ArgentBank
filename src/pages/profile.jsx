import React from 'react';
import User from '../components/User';
import Account from '../components/Account';
import AmountCardDataBase from '../Database/AmoutCardDataBase.json';
import '../styles/Pages/profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <User />
     {AmountCardDataBase.map((card) => (
      <Account 
        key={card.id} title={card.title} 
        amount={card.amount} 
        description={card.description} /> 
     ))}
    </div>
  );
};

export default Profile;