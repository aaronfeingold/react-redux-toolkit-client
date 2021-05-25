import React from 'react';

const ErrorMessage = ({error}) => {
  let msg = error[0].nestedErrors[0].msg
  
  return (
      <div className="errorMessage">
        {msg}
      </div>
  )
};

export default ErrorMessage;