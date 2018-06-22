import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TempInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      unit: props.unit,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      temperature: event.target.value,
    });

    this.props.onChange(event.target.value);
  }

  render() {
    const { temperature, unit } = this.state;

    return (
        <fieldset>
          <label>Enter Temperature in {unit}</label>
          <input
              placeholder={`Enter value in ${unit}`}
              value={temperature}
              onChange={this.changeHandler}
          />
        </fieldset>
    );
  }
}

TempInput.propTypes = {
  unit: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TempInput;
