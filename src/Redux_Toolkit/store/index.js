import {configureStore} from "@reduxjs/toolkit";
import commentSlice from "../featured/CommentsData";
import moviesSlice from "../featured/MoviesData";

export const store = configureStore({
	reducer:{
		commentSlice,
		moviesSlice
	}
})