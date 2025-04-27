import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer.jsx';
import { userReducer } from './reducers/user.reducer.jsx';

// Combine all reducers into a single root reducer
// This is useful when you have multiple slices of state managed by different reducers
const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})
// Create the Redux store using the root reducer and middleware
// The middleware is used to enhance the store with additional functionality, such as logging or handling asynchronous actions
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store