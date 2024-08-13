import { ADD_BLOCK, MOVE_BLOCK, UPDATE_BLOCK_DATA, SET_FILTER } from './types';

const initialState = {
  lanes: [
    { id: 'lane1', name: 'Stage 1', blocks: [] },
    { id: 'lane2', name: 'Stage 2', blocks: [] },
  ],
  filter: 'ALL'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return {
        ...state,
        lanes: state.lanes.map(lane => 
          lane.id === action.payload.laneId ? 
          { ...lane, blocks: [...lane.blocks, action.payload.block] } : lane)
      };

    case MOVE_BLOCK:
      // Logic to handle block movement
      return state;

    case UPDATE_BLOCK_DATA:
      return {
        ...state,
        lanes: state.lanes.map(lane => 
          lane.blocks.some(block => block.id === action.payload.blockId) ? 
          { 
            ...lane, 
            blocks: lane.blocks.map(block => 
              block.id === action.payload.blockId ? 
              { ...block, data: action.payload.data } : block)
          } : lane)
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
