import React, { useEffect } from 'react';
import Item from '@components/Item';
import '@styles/ItemList.css';

function ItemList({ items, itemSelect, setReviewList, setCompletedList }) {

  useEffect(() => {
    setReviewList();
    setCompletedList();
  }, [])

  return (
    <div className="ReviewItemList">
      <ul>
        {
          items.map(item => 
            <Item
              key = { item._id }
              description = { item.description }
              onClick = {() => itemSelect(item)}
            />
          )
        }
      </ul>
    </div>
  );
}

export default ItemList;