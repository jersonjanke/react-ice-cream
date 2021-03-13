import React from 'react';
import PropTypes from 'prop-types';

const ErrorContainer = ({ children, errorText, hasSubmitted }) => {
  return (
    <div className={errorText ? 'error' : null}>
      {children}
      <div className="error-wrapper">
        {errorText && hasSubmitted && <span>{errorText}</span>}
      </div>
    </div>
  );
};

ErrorContainer.prototype = {
  children: PropTypes.node.isRequired,
  hasSubmitted: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
};

export default ErrorContainer;
