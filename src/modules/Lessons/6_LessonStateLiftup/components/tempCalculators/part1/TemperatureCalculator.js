import React, { Component } from 'react';

import BoilingNotice from './BoilingNotice';

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      temperature: event.target.value,
    });
  }

  render() {
    const { temperature } = this.state;

    return (
        <section className="lesson-calculator info-panel">
          <h2>Temperature Calculator</h2>

          <div className="form-holder calculator">
            <label>Enter Temperature</label>
            <input
                placeholder="Enter value in Celsius"
                value={temperature}
                onChange={this.handleChange}
            />
            <BoilingNotice temperature={temperature}/>
          </div>
        </section>
    );
  }
}

export default TemperatureCalculator;
