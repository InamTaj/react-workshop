import React from 'react';
import PropTypes from 'prop-types';

import Intro from './CompPropsIntro';
import Account from './Account/Account';

const LessonCompProps = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title}/>
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
