import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: undefined,
    user: undefined,
    isAdmin: undefined,
    isTeacher: undefined,
    isStudent: undefined,
    isAuthenticated: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAdmin = action.payload.user.role === 'admin' ? true : false;
            state.isTeacher = action.payload.user.role === 'teacher' ? true : false;
            state.isStudent = action.payload.user.role === 'student' ? true : false;
            state.isAuthenticated = true;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            state.isAdmin = undefined;
            state.isTeacher = undefined;
            state.isStudent = undefined;
            state.isAuthenticated = undefined;
        }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;