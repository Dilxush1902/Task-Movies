import React from 'react';

const CommentItem = ({comment}) => {
	return (
		<div className="py-3">
			<h6 style={{fontSize:"18px"}}>{comment.username.toUpperCase()}</h6>
			<p style={{fontSize:"14px"}}>{comment.comment_msg}</p>
		</div>
	);
};

export default CommentItem;