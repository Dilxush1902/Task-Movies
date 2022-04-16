import React from 'react';
import MovieItem from "./MovieItem";
import "./movies.css";
import {useSelector} from "react-redux";
const MovieList = () => {
const {movies}=useSelector(state => state.moviesSlice)
	return (
		<>
		<h5 className="text-white py-4">Continue Watching  |  4 Movies</h5>
		<div className="movies_list">
			{movies.slice(0,4).map((movie)=>(
				<MovieItem key={movie.id} movie={movie}/>
			))}
		</div>
		</>
	);
};

export default MovieList;