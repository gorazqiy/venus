import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	category: 0,
	sortBy: 'rating',
	order: 'desc',
}

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers:{
		setSort(state, action){

			state.sortBy = action.payload.type;
			state.order = action.payload.order
		},
		setCategory(state, action){
			
			state.category = action.payload.type
		}
	}
})

export const { setSort, setCategory } = filterSlice.actions;

export default filterSlice.reducer;