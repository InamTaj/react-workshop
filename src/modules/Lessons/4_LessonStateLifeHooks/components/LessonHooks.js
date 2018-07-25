import React, { Component } from 'react';

import HooksList from './HooksList';

class LessonHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: null,
      lastUpdated: null,
      countries: null,
    };

    this.toggleFontColor = this.toggleFontColor.bind(this);
  }

  componentWillMount() {
    console.log('...componentWillMount...');
    /* With a timeout delay of 5 seconds, import Countries data from file and set it in the state. */
  }

  componentDidMount() {
    console.log('...componentDidMount...');
    /* Set up lastUpdated field in the state as soon as the component gets mounted */
    /* Set up fontColor as black in the state as soon as the component gets mounted */
  }

  toggleFontColor() {
    /* pick up a random font and set it in the state */
    this.setState({
      fontColor: '#737373',
    });
  }

  render() {
    console.log('...render...');

     // eslint-disable-next-line no-unused-vars
    const { fontColor, countries, lastUpdated } = this.state;

    return(
        <section className="lesson-hooks info-panel">
          <h2>Lifecycle Hooks</h2>
          <div className="data">
            <HooksList fontColor={fontColor} />
          </div>
          {
            countries && (
                <div className="action-prompt" style={{textAlign: 'center'}}>
                  <button onClick={this.toggleFontColor}>Toggle Font</button>
                </div>
            )
          }
        </section>
    );
  }
}

export default LessonHooks;
