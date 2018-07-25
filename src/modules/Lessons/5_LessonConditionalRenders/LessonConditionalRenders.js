import React from 'react';
import PropTypes from 'prop-types';

import Intro from './components/ConditionalRenderIntro';
import ConditionalRenderPractice from './components/ConditionalRenderPractice';

const LessonConditionalRenders = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <ConditionalRenderPractice />
        </div>
      </div>
  );
};

LessonConditionalRenders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonConditionalRenders;
