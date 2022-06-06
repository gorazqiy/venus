import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
	"items/getItems",
	async (params) => {
	
		const {category, sortBy, order} = params;
		const { data } = await axios.get(`https://621510a4cdb9d09717ac4a98.mockapi.io/guitars?
			${category !== 0 ? `category=${category}` : ''}
			&sortBy=${sortBy}
			&order=${order}`);
		return data;
	}
);

const initialState = {
	items: [],
};


 const itemSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.items = action.payload;
		});

		builder.addCase(fetchItems.rejected, (state, action) => {
			alert("Ошибка при запросе данных с сервера!")
		})
	}
});

export default itemSlice.reducer;


