import React from 'react';

const handleClick = () => {
  let randNo = Math.floor(Math.random() * 7) + 1;
  alert("I feel clicked!\nAre you " + randNo + "?");
};

const JSXAttributes = () => {
  return (
      <div>
        <h4>Specify Attributes in JSX</h4>
        <p style={{color: '#c62828'}}>This my shiny new text in really RED!</p>
        <p title="This title is sponsored by a JSX attribute">Hover Me!</p>
        <button style={{color: '#1976D2'}} onClick={handleClick}>Click Me!</button>
      </div>
  );
};

export default JSXAttributes;