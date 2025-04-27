import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions";

/* Authentication actions */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}
//* The loginSuccess action creator is used to create an action that indicates a successful login.
//* It takes a token as an argument and returns an action object with the type LOGIN_SUCCESS and the token as the payload.
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}
//* The loginFailed action creator is used to create an action that indicates a failed login attempt.
//* It takes an error message as an argument and returns an action object with the type LOGIN_FAIL and the error message as the payload.
export const logout = () => {
    return {
        type: LOGOUT,
    }
} 