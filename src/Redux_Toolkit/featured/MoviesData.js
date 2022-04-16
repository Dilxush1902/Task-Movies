import {createSlice} from "@reduxjs/toolkit";
const initialState={
	movies:[]
}
export const moviesSlice=createSlice({
	name:"Movies",
	initialState,
	reducers:{
		getMoviesData:(state,action)=>{
			state.movies=[...action.payload]
		}
	}
})

export const {getMoviesData}=moviesSlice.actions;

export default moviesSlice.reducer;