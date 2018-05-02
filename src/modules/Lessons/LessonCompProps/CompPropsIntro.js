import React from 'react';
import PropTypes from 'prop-types';

const CompPropsIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">An Introduction to Props from the perspective of Components</span>
      </div>
  );
};

CompPropsIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompPropsIntro;