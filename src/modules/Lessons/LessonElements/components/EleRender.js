import React from 'react';

const EleRender = () => {
  return (
      <section className="ele-render info-panel">
        <h2>Render Elements into the DOM</h2>
        <p>Elements can be rendered into the <i>DOM</i> by specifying the target <i>DOM</i> node and component.</p>
        <article>
          <h4>Step #1</h4>
          <p>
            Suppose there is a <i>div</i>, named root in your app.
            Within this <i>div</i>, you want your React app to be rendered.
          </p>
          <code>{`<div id="root"></div>`}</code>
        </article>
        <article>
          <h4>Step #2</h4>
          <p>Also, let's say your react app is composed of only one element:</p>
          <code>{`const myApp = <div className="app">My React App</div>;`}</code>
        </article>
        <article>
          <h4>Step #3</h4>
          <p>Now, render the element inside the root div by instructing React like this:</p>
          <code>{`ReactDOM.render(myApp, document.getElementById('root'));`}</code>
        </article>
      </section>
  )
};

export default EleRender;
