import React, { useState } from 'react';
import { Weapon, Armor, Item } from '@src/types';
import '@styles/ItemForm.css';

function ItemForm({ id, type, closeModal, saveItem }) {
  const array = (type === 'Weapon') ? Weapon :
    (type === 'Armor') ? Armor :
      Item;
  const [item, setItem] = useState({ type: type });
  const handleChange = (i, v) => {
    setItem(Object.assign({}, item, { [i.toLowerCase().replace(new RegExp(' ', 'g'), '_')]: v }));
  }
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      saveItem(id, item, type);
      closeModal(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="ItemForm">
        {
          array.map((el, i) => 
            <input key={i} type="text" placeholder={el} onChange={e => handleChange(el, e.target.value)}/>
            )
          }
      </div>
      <button className="Button" type="submit">
        Save
      </button>
    </form>
  )
}

export default ItemForm;