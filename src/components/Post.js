import React from 'react'


const Post = ({post}) => {
  
  let {title} = post 


  return(
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default Post;