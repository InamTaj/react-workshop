import React from 'react';

const JSXExpressions = () => {
  const dataTable = [1, 2, 3, 4, 5];
  const username = dataTable.length > 0 ? 'Inam' : 'Waris';
  const age = dataTable.length;

  return (
      <section className="expressions">
        <h2>Add Expressions in JSX!</h2>
        <article className="exp-table">
          <h4>Print items in Array</h4>
          {dataTable.map((item) => <p key={item}>{item} x 9 = {item * 9}</p>)}
        </article>

        <article className="exp-data">
          <h4>Render Dynamic Data</h4>
          <p>
            Hello Mr. {username}! I learned that you got a ${age}.{dataTable[3]} performance bonus this year :D
          </p>
        </article>
      </section>
  );
};

export default JSXExpressions;