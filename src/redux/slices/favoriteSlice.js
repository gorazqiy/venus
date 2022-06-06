import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
}

const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers:{
		setFavoriteItem(state, action) {
			const findItem = state.items.find(item => item.id === action.payload.id);

			if (findItem) {
				state.items = state.items.filter(item => item.id !== findItem.id)
			} else {
				state.items = [...state.items, action.payload] 
			}
		}
	}
});

export const { setFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;