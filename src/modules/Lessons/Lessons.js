/* eslint-disable no-script-url */
import React, { Component }from 'react';
import classnames from 'classnames';

import LessonJSX from './1_LessonJSX/LessonJSX';
import LessonElements from './2_LessonElements/LessonElements';
import LessonCompProps from './3_LessonCompProps/LessonCompProps';
import LessonStateLifeHooks from './4_LessonStateLifeHooks/LessonStateLifeHooks';
import LessonConditionalRenders from './5_LessonConditionalRenders/LessonConditionalRenders';
import LessonStateLiftup from './6_LessonStateLiftup/LessonStateLiftup';
import LessonContainerPresentational from './7_LessonContainerPresentational/LessonContainerPresentational';
import LessonUserData from './8_LessonUserData/LessonUserData';
import LessonAPIIntegration from './9_LessonAPIIntegration/LessonAPIIntegration';

import './Lessons.css';

const LESSON_TYPES = {
  JSX: 'Introduction to JSX',
  REACT_ELEMENTS: 'React Elements',
  COMP_PROPS: 'Components and Props',
  STATE_LIFEHOOKS: 'State & Lifecycle Hooks',
  CONDITIONAL_RENDERS: 'Conditional Rendering',
  STATE_LIFTUP: 'State Lift-up',
  CONTAINER_PRESENT: 'Container vs. Presentational',
  USER_DATA: 'Handling User Data',
  API_INTEGRATION: 'API Integration',
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
      case LESSON_TYPES.CONTAINER_PRESENT:
        return <LessonContainerPresentational title={LESSON_TYPES.CONTAINER_PRESENT} />;
      case LESSON_TYPES.USER_DATA:
        return <LessonUserData title={LESSON_TYPES.USER_DATA} />;
      case LESSON_TYPES.API_INTEGRATION:
        return <LessonAPIIntegration title={LESSON_TYPES.API_INTEGRATION} />;
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
