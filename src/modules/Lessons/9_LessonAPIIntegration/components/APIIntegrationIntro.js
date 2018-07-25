import React from 'react';
import PropTypes from 'prop-types';

const APIIntegrationIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">
          Integrate data from either backend or any 3rd party source in React!
        </span>
      </div>
  );
};

APIIntegrationIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default APIIntegrationIntro;
