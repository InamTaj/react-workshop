import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TempInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.props.onChange(event.target.value,  this.props.unit);
  }

  render() {
    const { temperature, unit } = this.props;

    return (
        <fieldset>
          <label>Enter Temperature in {unit}</label>
          <input
              placeholder={`Enter value in ${unit}`}
              value={temperature}
              onChange={this.onChangeHandler}
          />
        </fieldset>
    );
  }
}

TempInput.propTypes = {
  temperature: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TempInput;
