// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label>Filter Blocks: </label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="ALL">All</option>
        <option value="STAGE1">Stage 1</option>
        <option value="STAGE2">Stage 2</option>
      </select>
    </div>
  );
};

export default Filter;
