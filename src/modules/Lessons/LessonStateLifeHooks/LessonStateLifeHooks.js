import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/StateLifeHooksIntro';
import LessonState from './components/LessonState';
import LessonHooks from './components/LessonHooks';

const LessonStateLifeHooks = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <LessonState />
          <LessonHooks />
        </div>
      </div>
  );
};

LessonStateLifeHooks.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonStateLifeHooks;
