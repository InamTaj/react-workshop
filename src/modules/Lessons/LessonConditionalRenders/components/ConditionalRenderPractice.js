import React, { Component } from 'react';

import AssignmentDetails from './AssignmentDetails';

class ConditionalRenderPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
        <section className="lesson-conditional-render info-panel">
          <h2>Practice Conditional Rendering</h2>
          <AssignmentDetails />
        </section>
    );
  }
}

export default ConditionalRenderPractice;
