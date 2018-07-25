/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ProfileEdit from './ProfileEdit/ProfileEdit';
import ProfileView from './ProfileView/ProfileView';

import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: 'view',
    };
  }

  getActiveComponent (selection, profile) {
    return selection === 'edit' ? <ProfileEdit profile={profile}/> : <ProfileView profile={profile}/>
  }

  toggleActiveComponent(selection) {
    this.setState({
      activeComponent: selection,
    });
  }

  render() {
    const { activeComponent } = this.state;
    const { profile } = this.props;

    return (
        <div className="profile-container">
          <h3>Profile</h3>
          <p><i>Hello,</i> {profile.title} {profile.firstName}!</p>
          <ul className="child-list">
            <li>
              <a
                  className={classnames({'profile-item': true, active: activeComponent === 'edit'})}
                  href="javascript:void(0);"
                  onClick={this.toggleActiveComponent.bind(this, 'edit', profile)}>Edit
              </a>
            </li>
            <li>
              <a
                  className={classnames({'profile-item': true, active: activeComponent === 'view'})}
                  href="javascript:void(0);"
                  onClick={this.toggleActiveComponent.bind(this, 'view', profile)}>View
              </a>
            </li>
          </ul>
          <div className="profile-body">
            {this.getActiveComponent(activeComponent, profile)}
          </div>
        </div>
    );
  };
}

Profile.propTypes = {
  profile: PropTypes.object,
};

export default Profile;
