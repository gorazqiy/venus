import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import favorite from "./slices/favoriteSlice";
import products from "./slices/itemSlice";
import auth from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		cart,
		filter,
		favorite,
		products,
		auth
	},
});
