import React, { Component } from 'react';

import './LessonState.css';

class LessonState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Inam',
      score: 24,
      matchTimes: [new Date()],
    };

    this.updateScore = this.updateScore.bind(this);
    this.increaseVictories = this.increaseVictories.bind(this);
  }

  componentDidMount() {
    /* State update via lifecycle hook */
    setTimeout(() => {
      this.setState({
        score: 56,
      });
    }, 400);
  }

  updateScore() {
    /* State update via custom function */
    this.setState({
      score: this.getRandomNumber(),
    });
  }

  getRandomNumber = () => {
    const min = 1;
    const max = 101;
    return parseInt((Math.random() * (max - min) + min).toString(), 10)
  };

  increaseVictories() {
    /* State update via Event Handler */
    this.setState({
      matchTimes: [ ...this.state.matchTimes, new Date() ],
    });
  }

  render() {
    const { name, score, matchTimes } = this.state;

    return (
        <section className="lesson-state info-panel">
          <h2>State of Components</h2>
          <div className="state-data">
            <span>Name: <strong>{name}</strong></span>
            <br/>
            <span>Score: <strong>{score}</strong></span>
            <br/><br/>
            <h3>Match Times</h3>
            <ul>{
                matchTimes.map((time, index) => <li key={index}>{time.toString()}</li>)
              }
            </ul>
          </div>
          <div className="state-actions">
            <button onClick={this.updateScore}>Update Score</button>
            <button onClick={this.increaseVictories}>Increase Matches</button>
          </div>
          <div className="notes">
            <h5>Notes</h5>
            <ul>
              <li>Review Timer Example in <code>ReactEle Lesson</code></li>
            </ul>
          </div>
        </section>
    );
  }

}

export default LessonState;
