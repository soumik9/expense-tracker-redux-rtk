import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            console.log('action', action)
            state.users = action.payload.datas;
        },
    }
})

export const { getAllUsers } = usersSlice.actions;
export default usersSlice.reducer;