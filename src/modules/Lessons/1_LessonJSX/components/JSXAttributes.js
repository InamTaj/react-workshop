import React from 'react';

const handleClick = () => {
  let randNo = Math.floor(Math.random() * 7) + 1;
  alert("I feel clicked!\nAre you " + randNo + "?");
};

const JSXAttributes = () => {
  return (
      <section className="info-panel">
        <h2>Specify Attributes in JSX</h2>
        <p style={{color: '#c62828'}}>This my shiny new text in really RED!</p>
        <p title="This title is sponsored by a JSX attribute">Hover Me!</p>
        <button style={{color: '#FFEB3B'}} onClick={handleClick}>Click Me!</button>
      </section>
  );
};

export default JSXAttributes;