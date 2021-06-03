import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit"
import Post from "../components/Post"
import ErrorMessage from './ErrorMessage';

const PostsList = ({apiStatus}) => {
  let postsData = useSelector(state => state.posts.posts)
  let apiErrorMessage = useSelector(state => state.posts.error);

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