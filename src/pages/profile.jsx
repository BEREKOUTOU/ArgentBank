import React from 'react';
import User from '../components/User';
import AmountCardDataBase from '../Database/AmoutCardDataBase.json';
import '../styles/Pages/profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <User />
     {AmountCardDataBase.map((card) => (
        <div className="card-container" key={card.id}>
            <div className="card">
                <h3 className='card-title'>{card.title}</h3>
                <p className='card-amount'>{card.amount}</p>
                <p className='card-description'>{card.description}</p>
            </div>
        </div>
     ))}
    </div>
  );
};

export default Profile;