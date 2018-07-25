import React, { Component } from 'react';

import TempInput from './TempInput';
import BoilingNotice from './BoilingNotice';

const TEMP_UNITS = {
  CELSIUS: 'Celsius',
  FARHENHEIT: 'Farhenheit',
};

class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: {
        [TEMP_UNITS.CELSIUS]: '',
        [TEMP_UNITS.FARHENHEIT]: '',
      },
    };

    this.onTempChange = this.onTempChange.bind(this);
  }

  onTempChange(temperature, unit) {
    const convertTo = this.getOppositeUnitType(unit);

    this.setState({
      temperature: {
        ...this.state.temperature,
        [unit]: temperature,
        [convertTo]: this.getConvertedTemperature(temperature, convertTo),
      },
    });
  }

  getOppositeUnitType = (unit) => {
    return unit === TEMP_UNITS.CELSIUS ? TEMP_UNITS.FARHENHEIT : TEMP_UNITS.CELSIUS;
  };

  getConvertedTemperature = (temperature, unitTo) => {
    if (Number.isNaN(parseFloat(temperature))) {
      // sanity check
      return '';
    }

    if (unitTo === TEMP_UNITS.FARHENHEIT) {
      return (temperature * 9/5) + 32;
    }

    return  (temperature - 32) * 5/9;
  };

  render() {
    const { temperature } = this.state;

    return (
        <section className="lesson-calculator info-panel">
          <h2>Temperature Calculator</h2>

          <div className="form-holder">
            <TempInput
                unit={TEMP_UNITS.CELSIUS}
                temperature={temperature[TEMP_UNITS.CELSIUS]}
                onChange={this.onTempChange}
            />
            <TempInput
                unit={TEMP_UNITS.FARHENHEIT}
                temperature={temperature[TEMP_UNITS.FARHENHEIT]}
                onChange={this.onTempChange}
            />
            <BoilingNotice temperature={temperature[TEMP_UNITS.CELSIUS]}/>
          </div>

        </section>
    );
  }
}

export default TemperatureCalculator;
