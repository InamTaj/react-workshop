import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LessonJSX from './modules/Lessons/1_LessonJSX/LessonJSX';
import LessonElements from './modules/Lessons/2_LessonElements/LessonElements';
import LessonCompProps from './modules/Lessons/3_LessonCompProps/LessonCompProps';
import LessonStateLifeHooks from './modules/Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks';
import LessonConditionalRenders from './modules/Lessons/5_LessonConditionalRenders/LessonConditionalRenders';
import LessonStateLiftup from './modules/Lessons/6_LessonStateLiftup/LessonStateLiftup';
import LessonContainerPresentational from './modules/Lessons/7_LessonContainerPresentational/LessonContainerPresentational';
import LessonUserData from './modules/Lessons/8_LessonUserData/LessonUserData';
import LessonAPIIntegration from './modules/Lessons/9_LessonAPIIntegration/LessonAPIIntegration';


export default (
    <Switch>
      <Route path="/lesson/jsx" exact component={LessonJSX} />
      <Route path="/lesson/elements" component={LessonElements} />
      <Route path="/lesson/components-props" component={LessonCompProps} />
      <Route path="/lesson/state-lifecycle-hooks" component={LessonStateLifeHooks} />
      <Route path="/lesson/conditional-rendering" component={LessonConditionalRenders} />
      <Route path="/lesson/state-liftup" component={LessonStateLiftup} />
      <Route path="/lesson/container-vs-presentational" component={LessonContainerPresentational} />
      <Route path="/lesson/handling-user-data" component={LessonUserData} />
      <Route path="/lesson/api-integration" component={LessonAPIIntegration} />
    </Switch>
);
