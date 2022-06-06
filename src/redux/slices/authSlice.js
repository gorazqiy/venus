import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

		setUser( state, action ) {
			state.user = action.payload
		},	
		setToken( state, action ) {
			state.token = action.payload
		},
		logOut( state ) {
			state.user = null;
			state.token = null;

		},
	},

});

export const { setUser, setToken, logOut } = authSlice.actions;


export default authSlice.reducer;
