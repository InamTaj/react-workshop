import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/StateLifeHooksIntro';

const LessonStateLifeHooks = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <p>UNDER CONSTRUCTION</p>
        </div>
      </div>
  );
};

LessonStateLifeHooks.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonStateLifeHooks;
