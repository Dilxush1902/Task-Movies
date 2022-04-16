import React from 'react';
import * as Yup from "yup"
import "./style.css";
import {useFormik} from "formik";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import {addComment} from "../../../Redux_Toolkit/featured/CommentsData";

const CommentForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			username: "",
			comment_msg: "",
			id:uuidv4()
		},
		onSubmit: (values) => {
			dispatch(addComment(values))
			setTimeout(() => {
				formik.resetForm()
			}, 1000)
		},
		validationSchema: Yup.object({
			username: Yup.string().max(15, "Let the word length be less than 15").required("Required"),
			comment_msg: Yup.string().max(100, "Let the word length be less than 100").required("Required")
		})
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="input_box position-relative">
				<input
					type="text"
					name="username"
					placeholder="User Name..."
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<span className="position-absolute bottom-0 start-0">{formik.touched.username && formik.errors.username &&
					<p style={{color: "red",padding:"0  0 0 5px"}}>{formik.errors.username}</p>}</span>
			</div>
			<div className="textArea_box position-relative">
				<textarea
					cols="8"
					rows="6"
					name="comment_msg"
					placeholder="Comment..."
					value={formik.values.comment_msg}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<span className="position-absolute bottom-0 start-0">{formik.touched.comment_msg && formik.errors.comment_msg &&
					<p style={{color: "red",padding:"0  0 0 5px"}}>{formik.errors.comment_msg}</p>}</span>
			</div>
			<div className="text-end">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default CommentForm;