import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: props.fontColor || 'red',
      countriesList: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('...componentWillReceiveProps...');
    /* Listen to changes in prop and update the state of component IF the data (fontColor or list) has changed */
  }

  render() {

    const { countriesList } = this.state;

    return (
        <ul className="countries-list">
          {
            countriesList.map(country => <li>{country}</li>)
          }
        </ul>
    );
  }
}


HooksList.propTypes = {
  fontColor: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
