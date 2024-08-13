import { ADD_BLOCK, MOVE_BLOCK, UPDATE_BLOCK_DATA, SET_FILTER } from './types';

export const addBlock = (laneId, block) => ({
  type: ADD_BLOCK,
  payload: { laneId, block }
});

export const moveBlock = (source, destination) => ({
  type: MOVE_BLOCK,
  payload: { source, destination }
});

export const updateBlockData = (blockId, data) => ({
  type: UPDATE_BLOCK_DATA,
  payload: { blockId, data }
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});
