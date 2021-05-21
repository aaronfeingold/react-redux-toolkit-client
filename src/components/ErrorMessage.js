import React from 'react';

const ErrorMessage = ({error}) => {
  return (
      <div className="errorMessage">
        {error}
      </div>
  )
};

export default ErrorMessage;