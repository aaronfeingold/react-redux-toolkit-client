import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveNewPost } from '../services/postDataService';
import { resetStatus } from '../slices/postSlice'
import PostForm from '../components/PostForm'
import PostsList from "../components/PostsList"

const initialPostState = { id: null, title: ""}

function AddPost() {
  const dispatch = useDispatch()
	const [post, setPost] = useState(initialPostState)
	const [submitted, setSubmitted] = useState(false)
	const apiStatus = useSelector(state => state.posts.status);

  const submitPost = (e) => {
		console.log(post)
		e.preventDefault()
		if ( post.title !== ''){
			dispatch(saveNewPost(post))
			setSubmitted(true)
		}
  };

	const initialPost = () => {
		setPost(initialPostState)
		setSubmitted(false)
		dispatch(resetStatus())
	}

  const onChange = (type, value) => {
    setPost({ ...post, [type]: value });
  };

  return(
		<div className="container-fluid">
			<PostForm post={post} onChange={onChange} submitted={submitted} initialPost={initialPost} submitPost={submitPost}/>
			<PostsList apiStatus={apiStatus}/>
		</div>
		);
}

export default AddPost