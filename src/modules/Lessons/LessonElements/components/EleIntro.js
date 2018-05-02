import React from 'react';
import PropTypes from 'prop-types';

const EleIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">The bricks of creating React apps</span>
      </div>
  )
};

EleIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EleIntro;
