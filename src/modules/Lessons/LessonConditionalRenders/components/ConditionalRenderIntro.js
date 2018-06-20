import React from 'react';
import PropTypes from 'prop-types';

const ConditionalRenderIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">
          Conditionally render components with simple JavaScript if-else or ternary operators!
        </span>
      </div>
  );
};

ConditionalRenderIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ConditionalRenderIntro;
