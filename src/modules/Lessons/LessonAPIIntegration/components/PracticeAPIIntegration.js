import React from 'react';

import GitDashboard from './part1/GitDashboard';

import './LessonAPIIntegration.css'

const PracticeAPIIntegration = () => {
  return (
      <section className="lesson-api-integration info-panel">
        <h2>Practice API Integration</h2>
        <GitDashboard />
      </section>
  );
};

export default PracticeAPIIntegration;