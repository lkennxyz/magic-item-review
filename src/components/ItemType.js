import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faShieldAlt, faRing } from '@fortawesome/free-solid-svg-icons';
import '@styles/ItemType.css';

function ItemType({ setType, closeModal }) {
  return (
    <div className="ItemType">
      <div className="ButtonRow">
        <button className="ItemButton" onClick={ () => setType('Weapon') }>
          <FontAwesomeIcon icon={faFistRaised}/>
        </button>
        <button className="ItemButton" onClick={ () => setType('Armor') }>
          <FontAwesomeIcon icon={faShieldAlt}/>
        </button>
        <button className="ItemButton" onClick={ () => setType('Item') }>
          <FontAwesomeIcon icon={faRing}/>
        </button>
      </div>
      <button className="Button" onClick={ () => closeModal(false) }>
        Close
      </button>
    </div>
  );
}

export default ItemType;