import React from 'react'

const Post = ({post}) => {

  let {title, id} = post 
  return(
    <div className="card" id={id} style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default Post;