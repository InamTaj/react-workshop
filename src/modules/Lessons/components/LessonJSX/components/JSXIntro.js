import React from 'react';

const JSXIntro = () => {
  return <div className="intro">Hello! I'm a simple component, written in React!</div>;
};

export default JSXIntro;

/*
NOTES
-----

JSX produces React “elements”.

In front-end projects, the rendering logic is almost always mixed / coupled with event handling, state updates and
other processing. Therefore, instead of artificially separating the concerns of data processing and UI rendering,
React allows us to create components, that can contain logic and UI both, BUT without coupling them tightly.

*/
