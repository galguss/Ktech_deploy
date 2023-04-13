import { createSlice } from '@reduxjs/toolkit'

const isLogged = localStorage.getItem('isLoggges');

export const userLoginSlice = createSlice({
    name: "userLogin",
    initialState:{
        value: {
            isLogged: isLogged !== null ? isLogged : false,
            user_id: -1,
            level: '',
            image: '',
            favorite: '',
            hobbies: ''
        }
    },
    reducers:{
        userLogin: (state, actions) => {
            state.value = actions.payload;
        }
    }

});

export const { userLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
