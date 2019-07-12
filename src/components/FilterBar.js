import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import '@styles/FilterBar.css';

function FilterBar({ setFilter, refresh }) {
  return (
    <div className="navbar">
      <button className="Button" onClick={ () => setFilter('REVIEW') }>
        <h3>Review Items</h3>
      </button>
      <button className="Button" onClick={ () => setFilter('COMPLETED') }>
        <h3>View Completed</h3>
      </button>
      <button className="Button Refresh" onClick={ () => refresh() }>
        <FontAwesomeIcon icon={faRedo}/>
      </button>
    </div>
  );
}

export default FilterBar;