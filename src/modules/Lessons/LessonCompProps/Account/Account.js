import React, { Component } from 'react';

import Profile from './Profile/Profile';

class Account extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        profile: {
          title: 'Dr.',
          firstName: 'Abdul Qadeer',
          lastName: 'Khan',
          age: 70,
          education: 'Ph.D, Doctorate',
          address: 'Islamabad',
          country: 'Pakistan',
        },
        settings: {
          app: {
            language: 'English',
            auth: 'Two-Step Authentication',
            timezone: 'GMT +5',
          },
          privacy: {
            post: 'Public',
            photo: 'Private',
            video: 'Friends',
          },
        }
      }
    };
  }

  render() {
    return (
        <section className="lesson-comp-props">
          <h3>My Account</h3>
          <i>This page will contain all of the details of your account.</i>
          <Profile profile={this.state.user.profile} />
        </section>
    );
  }
}

export default Account;
