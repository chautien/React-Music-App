import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="error">
      <h6 className="error-message">{message}</h6>
    </div>
  );
};

export default Error;
