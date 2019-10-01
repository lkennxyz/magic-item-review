import React from 'react';

function Item({ description }) {
  return (
    <div className="Item">
      <li>
        { description }
      </li>
    </div>
  );
}

export default Item;