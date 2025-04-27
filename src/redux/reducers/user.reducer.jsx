import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}
//* The userReducer function is a reducer that handles the state of the user profile.
//* It manages the user data and the status of the user profile retrieval process.
export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_USERNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

        