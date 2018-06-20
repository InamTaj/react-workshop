import React from 'react';
import PropTypes from 'prop-types';

const StateLifeHooksIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">Manage data of your components via State</span>
      </div>
  );
};

StateLifeHooksIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StateLifeHooksIntro;