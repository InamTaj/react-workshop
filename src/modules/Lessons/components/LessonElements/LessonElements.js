import React from 'react';
import PropTypes from 'prop-types';

import EleIntro from './components/EleIntro';
import EleRender from './components/EleRender';
import EleUpdation from './components/EleUpdation';

const LessonElements = ({title}) => {
  return (
      <div className="lesson-container">
        <h1>{title}</h1>
        <div className="lesson-parts">
          <EleIntro />
          <EleRender />
          <EleUpdation />
        </div>
      </div>
  );
};

LessonElements.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonElements;
