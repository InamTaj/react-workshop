import React from 'react';
import PropTypes from 'prop-types';

const StateLiftupIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">Lift-up State to parent components for shared data</span>
      </div>
  );
};

StateLiftupIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StateLiftupIntro;
