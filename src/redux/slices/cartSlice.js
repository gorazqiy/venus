import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
}

const totalPriceCalculating = (items) =>{
	return items.reduce((sum, obj) => obj.price * obj.totalCount + sum, 0);
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.totalCount++;
			} else {
				state.items.push({
					...action.payload,
				});
			}
			state.totalPrice = totalPriceCalculating(state.items);
		},
		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload);

			if (findItem) {
				(findItem.totalCount === 1) ? findItem.totalCount = 1 : findItem.totalCount--;
			}
			state.totalPrice = totalPriceCalculating(state.items);
		},
		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			state.totalPrice = totalPriceCalculating(state.items);

		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;