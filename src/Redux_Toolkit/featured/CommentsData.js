import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	comments:[],
	addComments:[]
}

export const commentSlice = createSlice({
	name:"Comments",
	initialState,
	reducers:{
		addComment:(state,action)=>{
			state.addComments=[...state.addComments,action.payload];
		},
		getMoviesIdData:(state,action)=>{
				state.comments=[...action.payload]
		}
	}
})

export const {addComment,getMoviesIdData}=commentSlice.actions
export default commentSlice.reducer;
