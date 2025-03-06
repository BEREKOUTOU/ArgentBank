import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';
import user from '../components/user.json';

const Profile = () => {
  const user = useSelector((state) => state.auth.token);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!user) {
      const DataBase = async () => {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user}`,
          },
        });
        const DataBase =await response.json();

        const usDataBase = {
          createdAt: data.body.createdAt,
          firstName: DataBase.body.firstName,
          lastName: DataBase.body.lastName,
          email: DataBase.body.email,
        };
        dispatch(loginSuccess(usDataBase)); 
      };
    }
  }, [user, dispatch]);
  return (
    <div>
      <h1>Welcome back</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;