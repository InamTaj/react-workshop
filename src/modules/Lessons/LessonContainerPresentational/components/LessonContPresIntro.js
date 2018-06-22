import React from 'react';
import PropTypes from 'prop-types';

const LessonContPresIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">
          Separate your Data Logic & View with Declarative / Compositional style!
        </span>
      </div>
  );
};

LessonContPresIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonContPresIntro;
