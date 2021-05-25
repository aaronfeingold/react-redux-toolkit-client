const PostForm = (props) => {
  
  return(

    <div className="form">
      { !!props.submitted ? (
        <div>
          <h4>Submitted</h4>
          <button type="button" className="btn btn-primary"onClick={props.initialPost}>
            Add another
          </button>
        </div>
      ):(
        <form onSubmit={props.submitPost}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label"> Enter a number </label>
            <div className="col-sm-10">
              <input name='title' type='text' value={props.post.title}
                onChange={ e => props.onChange("title", e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className="btn btn-primary"> Submit </button>
        </form>
      )
      }

    </div>
  )
}


export default PostForm;