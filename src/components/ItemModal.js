import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faShieldAlt, faRing } from '@fortawesome/free-solid-svg-icons';
import ItemForm from '@components/ItemForm';
import '@styles/ItemModal.css';

function ItemModal({ item, visible, closeModal }) {
  const [type, setType] = useState(null);
  if (!visible)
    return null;
  return (
    <div className="Background">
      <div className="Modal">
        <div className="ModalTitle">
          <h2>{item.description}</h2>
        </div>
        <div className="ButtonRow">
          {
            (type) ? (
            <ItemForm
              item={item}
              type={type}
            />
            ) : (
              <div className="ButtonRow">
                <button className="ItemButton" onClick={() => setType('Weapon')}>
                  <FontAwesomeIcon icon={faFistRaised}/>
                </button>
                <button className="ItemButton" onClick={() => setType('Armor')}>
                  <FontAwesomeIcon icon={faShieldAlt}/>
                </button>
                <button className="ItemButton" onClick={() => setType('Item')}>
                  <FontAwesomeIcon icon={faRing}/>
                </button>
              </div>
            )
          }
          
        </div>
        <button className="Button" onClick={ () => closeModal(false) }>
          Close
        </button>
      </div>
    </div>
  );
}

export default ItemModal;