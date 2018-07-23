react-workshop
===
A hands-on workshop on building Web Apps with React


## Table of Contents
* [Environment Setup](#environment-setup)
* [Project Setup](#project-setup)
* [ES6 Primer](#es6-primer)
* [Introduction to JSX](#introduction-to-jsx)
* [React Elements](#react-elements)
* [Components and Props](#components-and-props)
* [State and Lifecycle](#state-and-lifecycle)
* [Event Handling in React](#event-handling-in-react)


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


#### Introduction to JSX
> JSX allows writing Markup in JavaScript. It's a utility that helps developers create React components quickly and seamlessly.
* Code: `LessonJSX`

**Study Links**:
* [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
* [React: Rethinking best practices](https://youtu.be/x7cQ3mrcKaY)


#### React Elements
> Elements are the basic building blocks of React apps. They represent how DOM should look like at a certain time.
* Code: `LessonElements`

**Study Links**:
* [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)


#### Components and Props
> Components can be used to build complete views in React. Each component needs some data to display or to work with.
This data is known as Props.
* Code: `LessonCompProps`

**Study Links**:
* [React components Explained](https://codeburst.io/react-components-explained-96718311f20b)
* [React Components, Elements and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
* [React Props Basics](https://kolosek.com/react-props-basic/)
* [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### State and Lifecycle
> React's state allows us sto store and manipulate data in a component. Lifecycle hooks enable us to perform operations during certain points in the execution lifecycle of the component.
* Code: `LessonStateLifeHooks`

**Study Links**:
* [The Component Lifecycle](https://www.kirupa.com/react/component_lifecycle.htm)
* [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react/)
* [How to Work with and Manipulate State in React](https://www.sitepoint.com/work-with-and-manipulate-state-in-react/)
* [How to handle state in React - The missing FAQ](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c)
* [Intro to debugging ReactJS applications](https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd)

#### Event Handling in React
> Similar to DOM event handling with a few convention differences as well as knowledge of binding functions with classes.
* Code: `Lessons.js` / `LessonState.js` / `LessonHooks.js` / `Profile.js`

**Study Links**:
* [Events in React](https://www.kirupa.com/react/events_in_react.htm)
* [YouTube: React events in depth](https://youtu.be/dRo_egw7tBc)
* [Why and how to bind methods in your React component classes?](https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
* [React and ES6 - Binding Approaches](http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html)
* [React, ES6, Autobinding, and createClass()](https://blog.andrewray.me/react-es6-autobinding-and-createclass/)
* [React Binding Patterns: 5 Approaches for Handling `this`](https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56)
