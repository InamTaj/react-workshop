import React from 'react';

const JSXExpressions = () => {
  const dataTable = [1, 2, 3, 4, 5];
  const username = dataTable.length > 0 ? 'Inam' : 'Waris';
  const age = dataTable.length;

  return (
      <div className="expressions">
        <h4>Add Expressions in JSX!</h4>
        <div className="exp-table">
          <h5>Print items in Array</h5>
          {dataTable.map((item) => <p key={item}>{item} x 9 = {item * 9}</p>)}
        </div>

        <div className="exp-data">
          <h5>Render Dynamic Data</h5>
          <p>
            Hello Mr. {username}! I learned that you got a ${age}.{dataTable[3]} performance bonus this year :D
          </p>
        </div>
      </div>
  );
};

export default JSXExpressions;