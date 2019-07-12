import React from 'react';

function Item({ description, onClick }) {
  return (
    <div className="Item">
      <li
        onClick={onClick}
      >{ description }</li>
    </div>
  );
}

export default Item;