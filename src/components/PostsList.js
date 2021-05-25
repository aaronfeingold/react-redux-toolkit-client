import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import { fetchPosts } from '../services/postDataService';
import Post from "../components/Post"
import ErrorMessage from './ErrorMessage';

const PostsList = ({apiStatus}) => {
  let dispatch = useDispatch();
  let postsData = useSelector(state => state.posts.posts)
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