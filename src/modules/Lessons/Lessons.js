/* eslint-disable no-script-url */
import React, { Component }from 'react';
import classnames from 'classnames';

import LessonJSX from './LessonJSX/LessonJSX';
import LessonElements from './LessonElements/LessonElements';
import LessonCompProps from './LessonCompProps/LessonCompProps';
import LessonStateLifeHooks from './LessonStateLifeHooks/LessonStateLifeHooks';
import LessonConditionalRenders from './LessonConditionalRenders/LessonConditionalRenders';
import LessonStateLiftup from './LessonStateLiftup/LessonStateLiftup';

import './Lessons.css';

const LESSON_TYPES = {
  JSX: 'Introduction to JSX',
  REACT_ELEMENTS: 'React Elements',
  COMP_PROPS: 'Components and Props',
  STATE_LIFEHOOKS: 'State & Lifecycle Hooks',
  CONDITIONAL_RENDERS: 'Conditional Rendering',
  STATE_LIFTUP: 'State Lift-up',
};

class Lessons extends Component {
  constructor(props) {
    super(props);


    this.state = {
      activeLesson: LESSON_TYPES.STATE_LIFTUP,
    };
  }

  toggleLesson(lesson) {
    this.setState({
      activeLesson: lesson,
    });
  }


  renderActiveLesson = (type) => {
    switch (type) {
      case LESSON_TYPES.JSX:
        return <LessonJSX title={LESSON_TYPES.JSX} />;
      case LESSON_TYPES.REACT_ELEMENTS:
        return <LessonElements title={LESSON_TYPES.REACT_ELEMENTS} />;
      case LESSON_TYPES.COMP_PROPS:
        return <LessonCompProps title={LESSON_TYPES.COMP_PROPS} />;
      case LESSON_TYPES.STATE_LIFEHOOKS:
        return <LessonStateLifeHooks title={LESSON_TYPES.STATE_LIFEHOOKS} />;
      case LESSON_TYPES.CONDITIONAL_RENDERS:
        return <LessonConditionalRenders title={LESSON_TYPES.CONDITIONAL_RENDERS} />;
      case LESSON_TYPES.STATE_LIFTUP:
        return <LessonStateLiftup title={LESSON_TYPES.STATE_LIFTUP} />;
      default:
        return null;
    }
  };

  render() {
    const { activeLesson } = this.state;
    return (
        <div className="lessons">
          <aside>
            <ul className="lessons-list">
              { Object.keys(LESSON_TYPES).map((aLesson) =>
                  <li key={aLesson} >
                    <a
                        className={classnames({'lesson-item': true, active: LESSON_TYPES[aLesson] === activeLesson })}
                        href="javascript:void(0);"
                        onClick={this.toggleLesson.bind(this, LESSON_TYPES[aLesson])}>
                      {LESSON_TYPES[aLesson]}
                      </a>
                  </li>)
              }
            </ul>
          </aside>
          <div className="lesson-body">
            {this.renderActiveLesson(activeLesson)}
          </div>
        </div>
    );
  };

}

export default Lessons;