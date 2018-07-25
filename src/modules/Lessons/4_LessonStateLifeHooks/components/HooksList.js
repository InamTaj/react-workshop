import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: props.fontColor || 'red',
      countries: [],
      isLoading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('...componentWillReceiveProps...');
    /*
      - Listen to changes in prop and update the state of component IF the data (countries or fontColor) has changed
      - remember to also update the isLoading state accordingly
    */
  }

  render() {

    const { isLoading, countries } = this.state;

    return isLoading ? <h4>Loading data...</h4> : (
        <ul className="countries-list">
          {
            countries.map(country => <li>{country}</li>)
          }
        </ul>
    );
  }
}


HooksList.propTypes = {
  fontColor: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.object),
};

export default HooksList;
