import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { saveNewPost } from '../services/postDataService';
import PostForm from '../components/PostForm'
import PostsList from "../components/PostsList"

const initialPostState = { id: null, title: ""}

function AddPost() {
  const dispatch = useDispatch()
	const [post, setPost] = useState(initialPostState)
	const [submitted, setSubmitted] = useState(false)

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
	}

  const onChange = (type, value) => {
    setPost({ ...post, [type]: value });
  };

  return(
		<div className="container-fluid">
			<PostForm post={post} onChange={onChange} submitted={submitted} initialPost={initialPost} submitPost={submitPost}/>
			<PostsList submitted={submitted}/>
		</div>
		);
}

export default AddPost