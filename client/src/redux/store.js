import { configureStore } from '@reduxjs/toolkit';
import userLogin from './reducers/userReducers'

export default configureStore({
    reducer: {
        Login : userLogin
    }
})