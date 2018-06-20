import React from 'react';

const AssignmentDetails = () => {
  return (
      <div className="assignment-details">
        <h4>Assignment Details</h4>
        <span>Modify this View <code>ConditionalRenderPractice.js</code> such that:</span>
        <ul>
          <li>Instead of showing these assignment notes, it shows list of countries via a component <code>{'<DataView />'}</code></li>
          <li>Simulate loading of countries via an API, i.e., it should show a Loading component before actual data is loaded.</li>
          <li>
            After the <code>{'<DataView />'}</code> there should be another div that contains following action buttons:
            <ul>
              <li><strong>Simulate NotFound</strong><i>(clicking on this button will display a <code>{'<NotFound />'}</code> component)</i></li>
              <li><strong>Simulate ServerError</strong><i>(clicking on this button will display a <code>{'<ServerError />'}</code> component)</i></li>
              <li><strong>Simulate Loading</strong><i>(clicking on this button will re-display loading state of the component)</i></li>
              <li><strong>Reload Data</strong><i>(clicking on this button will re-load the <code>{'<DataView />'}</code> component)</i></li>
            </ul>
          </li>
          <li>Finally, when all of this logic is complete, move this logic from <code>render()</code> function to a separate class function called <code>getCurrentView(...)</code></li>
          <li><i>Hint: Need to pass some some state data and callbacks to <code>getCurrentView(...)</code> function</i></li>
        </ul>
      </div>
  );
};

export default AssignmentDetails;
