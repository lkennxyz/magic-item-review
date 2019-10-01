import React, { useEffect } from 'react';
import Item from '@components/Item';
import '@styles/ItemList.css';

function ItemList({ items, setItemList}) {

  useEffect(() => {
    setItemList();
  }, [])

  return (
    <div className="ReviewItemList">
      <ul>
        {
          items.map(item => 
            <Item
              key = { item._id }
              description = { item.description }
            />
          )
        }
      </ul>
    </div>
  );
}

export default ItemList;