import React from 'react';
import ItemForm from '@components/ItemForm';
import '@styles/ItemModal.css';
import ItemType from './ItemType';

function ItemModal({ item, visible, type, closeModal, setType, saveItem }) {
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
                id={item._id}
                type={type}
                closeModal={closeModal}
                saveItem={saveItem}
              />
            ) : (
              <ItemType
                setType={setType}
                closeModal={closeModal}
              />
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default ItemModal;