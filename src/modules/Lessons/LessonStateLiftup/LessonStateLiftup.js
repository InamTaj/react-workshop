import React from 'react';
import PropTypes from "prop-types";

import Intro from './components/StateLiftupIntro';
import TemperatureCalculator from './components/tempCalculators/part1/TemperatureCalculator';

import './LessonStateLiftup.css';

const LessonStateLiftup = ({title}) => {
  return (
    <div className="lesson-container">
      <Intro title={title}/>
      <div className="lesson-parts">
        <TemperatureCalculator />
      </div>
    </div>
  );
};

LessonStateLiftup.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonStateLiftup;
