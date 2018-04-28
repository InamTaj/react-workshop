import React from 'react';
import PropTypes from 'prop-types';

import Account from './Account/Account';

const LessonCompProps = ({title}) => {
  return (
      <div className="lesson-container">
        <h1>{title}</h1>
        <div className="lesson-parts">
          <Account />
        </div>
      </div>
  );
};

LessonCompProps.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonCompProps;
