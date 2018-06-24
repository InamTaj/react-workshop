import React from 'react';

import "./PracticeUserData.css";

const PracticeUserData = () => {

  return (
      <section className="lesson-practice-user-data info-panel">
        <h2>User Signup Form</h2>
        <form>
          <fieldset>
            <label><strong>Name</strong></label>
            <input placeholder="Enter your name" />
          </fieldset>
          <input type="submit" value="Sign Up" />
        </form>
      </section>
  );
};

export default PracticeUserData;
