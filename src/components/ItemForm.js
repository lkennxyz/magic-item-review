import React from 'react';
import { Weapon, Armor, Item } from '@src/types';
import '@styles/ItemForm.css';

function ItemForm({ item, type }) {
  const array = (type === 'Weapon') ? Weapon :
    (type === 'Armor') ? Armor :
      Item;
  return (
    <div className="ItemForm">
      {
        array.map(el => 
          <input type="text" placeholder={el}/>
        )
      }
    </div>
  )
}

export default ItemForm;