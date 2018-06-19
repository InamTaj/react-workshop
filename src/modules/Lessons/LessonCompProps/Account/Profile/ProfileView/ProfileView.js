import React from 'react';
import PropTypes from 'prop-types';

const ProfileView = ({profile}) => {
  return (
      <div className="profile-view">
        <h3>View</h3>
        <p>View the complete details of your Profile</p>
        <table>
          <tbody>
          {
            Object.keys(profile).map((info) => <tr key={info}><td>{info.toUpperCase()}</td><td>{profile[info]}</td></tr>)
          }
          </tbody>
        </table>
        <ul>

        </ul>
      </div>
  );
};

ProfileView.propTypes = {
  profile: PropTypes.object,
};

export default ProfileView;
