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
          <div class="mb-3">
            <label htmlFor="title" class="form-label"> Title </label>
            <div class="col-sm-10">
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