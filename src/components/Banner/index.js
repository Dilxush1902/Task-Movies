import React from 'react';
import "./banner.css";
const Banner = ({item}) => {
	return (
				<>
					{item.type === "banner"
						?
						<div key={item.id} >
							<img src={item.movieImageUrl} alt={item.title}/>
						</div>
						:
						null}
			))}
		</>
	);
};

export default Banner;