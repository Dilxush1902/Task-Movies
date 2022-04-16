import React from 'react';
import {AiOutlinePlayCircle} from "react-icons/ai"
import {useDispatch} from "react-redux";
import {getMoviesIdData} from "../../Redux_Toolkit/featured/CommentsData";
import {getMoviesId} from "../../api";

const MovieItem = ({movie}) => {
	const dispatch = useDispatch();
	const handleClick = (id) => {
	  getMoviesId(id).then(res=>dispatch(getMoviesIdData(res.data)))
	}
	return (
		<div onClick={()=>handleClick(movie.id)} style={{cursor:"pointer"}} className="card bg-dark position-relative text-white border-0">
			<img src={movie.movieImageUrl} className="card-img" alt={movie.title}/>
			<div className="card-body position-absolute bottom-0">
				<p className="card-text m-0 d-flex align-items-center">
								<span className="fs-1 me-3">
									<AiOutlinePlayCircle/>
								</span>
					<span  className="d-flex flex-column justify-content-center">
									<span style={{fontSize: "13px", fontFamily: "'Roboto', sans-serif", fontWeight: "400"}}>{movie.title}</span>
									<span style={{fontSize: "11px", color: "#c0c0c0"}}>{movie.release_date}</span>
								</span>
				</p>
				<p style={{
					backgroundColor: "#885FFB",
					padding: "5px 15px",
					borderRadius: "20px",
					fontSize: "13px",
					fontFamily: "'Roboto', sans-serif"
				}}
							className="card-text">{movie.duration}</p>
			</div>
		</div>);
};

export default MovieItem;