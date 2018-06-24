import React from 'react';
import PropTypes from 'prop-types';

const UserDataIntro = ({title}) => {
  return (
      <div className="lesson-intro">
        <h1>{title}</h1>
        <span className="subtitle">Manage user data via Controlled Components</span>
      </div>
  );
};

UserDataIntro.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UserDataIntro;
