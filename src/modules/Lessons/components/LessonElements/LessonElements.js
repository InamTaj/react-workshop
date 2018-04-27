import React from 'react';
import PropTypes from 'prop-types';

const LessonElements = ({title}) => {
  return (
      <div className="lesson-container">
        <span className="title">
          <strong>{title}</strong>
        </span>
        <div className="lesson-parts">
          <div className="intro">The bricks of creating React apps</div>
          <div className="elem-1">
            <code>{`const element = <h1>I am a React element</h1>`}</code>
          </div>
        </div>
      </div>
  );
};

LessonElements.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonElements;
