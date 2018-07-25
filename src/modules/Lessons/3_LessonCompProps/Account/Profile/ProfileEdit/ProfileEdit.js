import React from 'react';
import PropTypes from 'prop-types';

import './ProfileEdit.css';

const ProfileEdit = ({profile}) => {
  return (
      <div className="profile-edit">
        <h3>Edit</h3>
        <i>Here, you can edit and update the details of your Profile</i>
        <table className="edit-table">
          <tbody>
          {
            Object.keys(profile).map((info) =>
                <tr key={info}><td>{info.toUpperCase()}</td><td><input name={info} defaultValue={profile[info]} /></td></tr>)
          }
          <tr>
            <td />
            <td>
              <button className="submit-btn">Save</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  );
};

ProfileEdit.propTypes = {
  profile: PropTypes.object,
};

export default ProfileEdit;
