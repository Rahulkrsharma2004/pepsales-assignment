// import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Block from './Block';
import { moveBlock } from '../redux/actions';

const Swimlane = () => {
  const lanes = useSelector(state => state.lanes);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(moveBlock(source, destination));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="swimlane-container">
        {lanes.map((lane) => (
          <Droppable droppableId={lane.id} key={lane.id}>
            {(provided) => (
              <div
                className="lane"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{lane.name}</h2>
                {lane.blocks.map((block, index) => (
                  <Draggable
                    key={block.id}
                    draggableId={block.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Block block={block} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Swimlane;
