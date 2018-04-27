import React from 'react';
import PropTypes from 'prop-types';

import JSXIntro from './components/JSXIntro';
import JSXExpressions from './components/JSXExpressions';
import JSXAttributes from './components/JSXAttributes';

import './LessonJSX.css';

const LessonJSX = ({title}) => {
  return (
      <div className="lesson-container">
        <span className="title">
          <strong>{title}</strong>
        </span>
        <div className="lesson-parts">
          <JSXIntro />
          <JSXExpressions />
          <JSXAttributes />
        </div>
      </div>
  );
};

LessonJSX.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonJSX;