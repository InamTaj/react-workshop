import React from 'react';
import PropTypes from 'prop-types';

import './ErrorLoading.css';

const ErrorLoading = ({error}) => {
  return (
      <div className="error-loading">
        <h6 className="title">Error loading Data...</h6>
        <span className="message">{error.toString()}</span>
      </div>
  );
};
ErrorLoading.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorLoading;
