import React from 'react';
import {useSelector} from "react-redux";
import CommentItem from "./commentItem";

const CommentList = () => {
	const {comments,addComments}=useSelector(state => state.commentSlice)
	console.log(addComments)
	return (
		<>
			{comments.length ? [...comments,...addComments].map((comment)=>(
				<CommentItem key={comment.id} comment={comment} />
			)) : <h3 className="py-5">There is no comment here yet !</h3>}
		</>
	);
};

export default CommentList;