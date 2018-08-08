:boom: react-workshop :boom:
===
A hands-on workshop :computer: on building Web Apps with React


## Table of Contents
* [Environment Setup](#environment-setup)
* [Project Setup](#project-setup)
* [ES6 Primer](#es6-primer)
* [Introduction to JSX](#introduction-to-jsx)
* [React Elements](#react-elements)
* [Components and Props](#components-and-props)
* [State and Lifecycle](#state-and-lifecycle)
* [Event Handling in React](#event-handling-in-react)
* [State Lift-up](#state-lift-up)
* [Container vs. Presentational](#container-vs-presentational)
* [Handling User data](#handling-user-data)
* [API Integration](#api-integration)
* [Navigation / Routing](#navigation-or-routing)


#### Environment Setup
> For this workshop, we use the following set of tools and technologies:
* [Node.js v7+](https://nodejs.org/en/download/)
* [Yarn!](https://yarnpkg.com/en/docs/install#debian-stable)
* [WebStorm](https://www.jetbrains.com/webstorm/) / [Sublime 3](https://www.sublimetext.com/3)
* [Google Chrome v60+](https://www.google.com/intl/en/chrome/browser/)
* [React Developer Tools](https://github.com/facebook/react-devtools) _(Browser Extension)_

#### Project Setup
> The demo project can be setup by the procedure mentioned below.

Run the following commands in the exact order in order to download project dependencies and start the project.
* `$ cd react-workshop`
* `$ yarn install`
* `$ yarn start`


#### ES6 Primer
> The next (and much better) version of JavaScript that helps write consistent and error-free code.
* `let` / `const`
* template literals
* Classes
* Arrow functions
* Object Literal Enhancements
* Default Parameter Values
* Object Spread Operator
* Destructuring
* Module Exports / Imports

**Study Links**:
 * [ES6 For Humans](https://github.com/metagrover/ES6-for-humans)
 * [ES6 Overview & Comparison](http://es6-features.org/#Constants)
 * [es6features](https://github.com/lukehoban/es6features)

**[⬆ back to top](#table-of-contents)**
___
#### Introduction to JSX
> JSX allows writing Markup in JavaScript. It's a utility that helps developers create React components quickly and seamlessly.
* Code: `LessonJSX`

**Study Links**:
* [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
* [React: Rethinking best practices](https://youtu.be/x7cQ3mrcKaY)

**[⬆ back to top](#table-of-contents)**
___
#### React Elements
> Elements are the basic building blocks of React apps. They represent how DOM should look like at a certain time.
* Code: `LessonElements`

**Study Links**:
* [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

**[⬆ back to top](#table-of-contents)**
___

#### Components and Props
> Components can be used to build complete views in React. Each component needs some data to display or to work with.
This data is known as Props.
* Code: `LessonCompProps`

**Study Links**:
* [React components Explained](https://codeburst.io/react-components-explained-96718311f20b)
* [React Components, Elements and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
* [React Props Basics](https://kolosek.com/react-props-basic/)
* [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

**[⬆ back to top](#table-of-contents)**
___
#### State and Lifecycle
> React's state allows us sto store and manipulate data in a component. Lifecycle hooks enable us to perform operations during certain points in the execution lifecycle of the component.
* Code: `LessonStateLifeHooks`

**Study Links**:
* [The Component Lifecycle](https://www.kirupa.com/react/component_lifecycle.htm)
* [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react/)
* [How to Work with and Manipulate State in React](https://www.sitepoint.com/work-with-and-manipulate-state-in-react/)
* [How to handle state in React - The missing FAQ](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c)
* [Intro to debugging ReactJS applications](https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd)

**[⬆ back to top](#table-of-contents)**
___
#### Event Handling in React
> Similar to DOM event handling with a few convention differences as well as knowledge of binding functions with classes.
* Code: `Lessons.js` / `LessonState.js` / `LessonHooks.js` / `Profile.js`

**[⬆ back to top](#table-of-contents)**
___
**Study Links**:
* [Events in React](https://www.kirupa.com/react/events_in_react.htm)
* [YouTube: React events in depth](https://youtu.be/dRo_egw7tBc)
* [Why and how to bind methods in your React component classes?](https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
* [React and ES6 - Binding Approaches](http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html)
* [React, ES6, Autobinding, and createClass()](https://blog.andrewray.me/react-es6-autobinding-and-createclass/)
* [React Binding Patterns: 5 Approaches for Handling `this`](https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56)

**[⬆ back to top](#table-of-contents)**
___
#### State Lift-up
> Move components' state to common ancestors when state trees start to get duplicated in children components.
* Code: `LessonStateLiftUp > part1 / part2 > TemperatureCalculator`

**Study Links**:
* [ReactJS docs: Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

**[⬆ back to top](#table-of-contents)**
___
#### Container vs Presentational
> Fundamental design pattern of React for managing and separating Logic / Data processing and View / Markup.
* Code: `LessonContainerPresentational`

**Study Links**:
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Leveling Up with React: Container Components](https://css-tricks.com/learning-react-container-components/)
* [Content vs Container](https://hackernoon.com/content-vs-container-e0a1ada681c1)
* [Reusable state for React UI components](https://medium.com/@efreyreg/reusable-state-for-react-ui-components-e38c5af40be4)

**[⬆ back to top](#table-of-contents)**
___
#### Handling User data
> Getting data from users via Forms in React can be done via Controlled components where each HTML Form element behaves like a React component.
* Code: `LessonUserData`

**Study Links**:
* [React.js Forms: Controlled Components](https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/)
* [Managing React Controlled Component State](http://spraso.com/managing-react-controlled-component-state/)
* [Content vs Container](https://hackernoon.com/content-vs-container-e0a1ada681c1)
* [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

**[⬆ back to top](#table-of-contents)**
___
#### API Integration
> Integrate / Load data from any 3rd party source via RESTful APIs / AJAX calls but in a way that conforms to React's programming model.
* Code: `LessonAPIIntegration > PracticeAPIIntegration > GitDashboard`

**Study Links**:
* [How to make AJAX requests in React?](https://medium.com/@baphemot/how-to-make-ajax-requests-in-react-a6a52bb5a8b1)
* [How to fetch data in React](https://www.robinwieruch.de/react-fetching-data/)
* [Where to Fetch Data: componentWillMount vs componentDidMount](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)
* [Loading data from APIs in React](https://javascriptplayground.com/http-requests-reactjs/)

**[⬆ back to top](#table-of-contents)**
___
#### Navigation or Routing
> Navigation is a cross-cutting concern and we need a declartive solution for implementing Navigation in our app.
Fortunately React Router v4 is the solution already available to us.
* Code: `branch: react-router-integration`

**Study Links**:
* [react-router-4-practical-tutorial](https://auth0.com/blog/react-router-4-practical-tutorial/)
* [All About React Router 4](https://css-tricks.com/react-router-4/)
* [React Router v4: The Complete Guide](https://www.sitepoint.com/react-router-v4-complete-guide/)
* [Using React Router v4 with create-react-app](https://codingblast.com/react-router-create-react-app/)
* [Server Rendering, Code Splitting, and Lazy Loading with React Router v4](https://medium.com/airbnb-engineering/server-rendering-code-splitting-and-lazy-loading-with-react-router-v4-bfe596a6af70)
* [Advanced React Router concepts: recursive path, code splitting, animated transitions, and more](https://blog.logrocket.com/advanced-react-router-concepts-code-splitting-animated-transitions-scroll-restoration-recursive-17096c0cf9db)
* [Protected Routes and Authentication with React Router v4](https://tylermcginnis.com/react-router-protected-routes-authentication/)
* [Role-based authorization using React-Router](http://frontendinsights.com/role-based-authorization-using-react-router/)
* [How to Build a React Application with User Login and Authentication](https://stormpath.com/blog/build-a-react-app-with-user-authentication)

**[⬆ back to top](#table-of-contents)**
___

#### Global Storage
> Global Storage is required in all Single Page Apps for better data handling. Redux is the most popular and robust solution available.

**Study Links**:
* [Redux Official Docs](https://redux.js.org/)
* [Beginner Video Course on Redux by its creator](https://egghead.io/series/getting-started-with-redux)
* [An Introduction to Redux - Smashing Magazine](https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/)
* [Redux Fundamentals - Video](https://youtu.be/ewelU8WHXQ4)
* [React Redux Tutorial for Beginners: The Definitive Guide (2018)](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)
* [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/)
* [Redux: From Twitter hype to Production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/)
* [Redux Fundamentals - Reactathon Slides](https://blog.isquaredsoftware.com/presentations/2018-03-redux-fundamentals/#/)
* [A Cartoon Introduction to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
* [Redux Diagrams](https://github.com/reduxjs/redux/issues/653)


**[⬆ back to top](#table-of-contents)**
___
