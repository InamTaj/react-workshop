/* eslint-disable no-script-url */
import React, { Component }from 'react';
import classnames from 'classnames';

import LessonJSX from './components/LessonJSX/LessonJSX';
import LessonElements from './components/LessonElements/LessonElements';

import './Lessons.css';

const LESSON_TYPES = {
  JSX: 'Introduction to JSX',
  REACT_ELEMENTS: 'React Elements',
  VDOM: 'Virtual DOM',
  COMP_PROPS: 'Components and Props',
  COMP_STATE: 'State & Component Lifecycle',
};

class Lessons extends Component {
  constructor(props) {
    super(props);


    this.state = {
      activeLesson: LESSON_TYPES.REACT_ELEMENTS,
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