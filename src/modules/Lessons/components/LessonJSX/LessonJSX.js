import React from 'react';
import PropTypes from 'prop-types';

const LessonJSX = ({title}) => {
  return (
      <div>
        <span className="title">
          Welcome to, <strong>{title}</strong>
        </span>
      </div>
  );
};

LessonJSX.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonJSX;