import React from 'react';

import Intro from './components/APIIntegrationIntro';
import PracticeAPIIntegration from './components/PracticeAPIIntegration';

const LessonAPIIntegration = ({title}) => {
  return (
      <div className="lesson-container">
        <Intro title={title} />
        <div className="lesson-parts">
          <PracticeAPIIntegration />
        </div>
      </div>
  );
};

export default LessonAPIIntegration;
