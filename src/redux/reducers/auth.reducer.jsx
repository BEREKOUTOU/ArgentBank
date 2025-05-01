import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type.actions";

const tokenFromStorage = localStorage.getItem("token");

const initialState = {
    status: "VOID",
    isConnected: tokenFromStorage ? true : false,
    token: tokenFromStorage || null,
    error: null,
}

// Authentication reducer
// This reducer handles the authentication state of the application
// It manages the login status, token, and any errors that may occur during authentication
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null
            }
        
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }
        }  
        case LOGOUT: {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            return {
                status: "VOID",
                isConnected: false,
                token: null,
                error: null,
            };
        }  
        default:
            return state;
    }
}
