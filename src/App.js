import React, {useEffect, useState} from 'react';
import "./App.css"
import {getMovies} from "./api";
import Header from "./Layout/Header";
import Banner from "./components/Banner";
import MovieList from "./components/Moives/MovieList";
import CommentList from "./components/comment/commenDetails/commentList";
import CommentForm from "./components/comment/CommentForm";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesData} from "./Redux_Toolkit/featured/MoviesData";
import Loader from "./components/Loader";
import Fade from 'react-reveal/Fade';

const App = () => {
	const dispatch=useDispatch();
	const {movies}=useSelector(state => state.moviesSlice);
	const [loader,setLoader]=useState(false);

	useEffect(() => {
		getMovies().then(res => {
			dispatch(getMoviesData(res.data));
			setLoader(true);
		})

	}, [])
	// console.log(data)
	return (
		<>
		{ loader ? <section>
			<Fade top>
				<Header/>
			</Fade>
			<div className="main_container">
				<Fade left>
					<div className="left px-4 py-5">
						<div className="img_header">
							{movies.map((item)=>(<Banner key={item.id} item={item}/>))}
						</div>
						<div className="movies">
							<MovieList/>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className="right">
						<div className="right_title">
							<h5>Comments</h5>
						</div>
						<div className="comment_content">
							<CommentList/>
						</div>
						<div className="form_content">
							<CommentForm/>
						</div>
					</div>
				</Fade>

			</div>
		</section> : <Loader/>}
		</>
	);
};

export default App;