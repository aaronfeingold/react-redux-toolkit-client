import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import { fetchPosts } from '../slices/postSlice';
import Post from "../components/Post"
import ErrorMessage from './ErrorMessage';

const PostsList = ({submitted}) => {
  let dispatch = useDispatch();
  let postsData = useSelector(state => state.posts.posts)
  let apiStatus = useSelector(state => state.posts.status);
  let apiErrorMessage = useSelector(state => state.posts.error);

  useEffect(()=> {
    if (apiStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [apiStatus, dispatch]);

  return(
    <>
      {apiStatus === 'loading' ? (
        <div> Loading </div>
      ):apiStatus === 'failed' ? (
          <ErrorMessage error={apiErrorMessage} />
      ):(
        <>
          { postsData.map(post => <Post key={nanoid()} post={post}/>)}
        </>
      )}
    </>
  )
}

export default PostsList