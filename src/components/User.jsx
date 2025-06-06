import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from '../redux/actions/user.actions.jsx';
import { isValidName } from "../utils/regex.jsx";
import '../styles/Components/User.css';

function User () {
    /* Updates user data on profile page from state redux */
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);
    /* Manages the appearance of the username modification form */
    const [display, setDisplay] = useState(true);
    /* Get username */
    const [userName, setUserName] = useState("tony");
    /* Handle error message */
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    /* Asynchronous username update function */
    const handleSubmitUsername = async (event) => {
        event.preventDefault();
        if (!isValidName(userName)) {
            setErrorMessage("Invalid username");
            return;
        } else {
            setErrorMessage("");
        }
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({userName}),
            });
            if (response.ok) {
                const data = await response.json();
                const username = data.body.userName;
                /* 
                    Checking that the query response is indeed retrieved
                    console.log(data) 
                */
                dispatch(updateUsername(username));
                alert("Username updated successfully");
                setDisplay(!display);
            } else {
                console.log("Invalid Fields")
            }

        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="header">
            { display ? 
                <div>
                    <h2>Welcome back 
                        <br />
                        {userData.firstname} {userData.lastname} 
                        Tony Jarvis!
                    </h2>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </div>
                :
                <div>
                    <h2>Edit user info</h2>
                    <form>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text" deplaceholder="User name"
                                id="username"
                                defaultValue={userData.username}
                                onChange={(event) => setUserName(event.target.value)}
                                placeholder="User name"
                                value={userName}
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text" deplaceholder="First name"
                                id="firstname" 
                                defaultValue={userData.firstname}
                                disabled={true}
                                placeholder="Stark"
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text" deplaceholder="Last name"
                                id="lastname" 
                                defaultValue={userData.lastname}
                                disabled={true}
                                placeholder="Stark"
                            />
                        </div>
                        <div className="button-container">
                            <button className="edit-username-button" onClick={handleSubmitUsername}>Save</button>
                            <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            }
        </div>
    )
}

export default User
