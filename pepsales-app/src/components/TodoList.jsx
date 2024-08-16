import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from '../features/todoSlice';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    // if (status === 'idle') {
    //   dispatch(fetchTodos());
    // }
    dispatch(fetchTodos())
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const movedTodo = todos[source.index];
    let updatedTodo = { ...movedTodo };

    if (source.droppableId === destination.droppableId) {
      return;
    }

    if (destination.droppableId === 'pending') {
      updatedTodo = { ...movedTodo, completed: false, pending: true };
    } else if (destination.droppableId === 'completed') {
      updatedTodo = { ...movedTodo, completed: true, pending: false };
    } else {
      updatedTodo = { ...movedTodo, completed: false, pending: false };
    }

    dispatch(updateTodo(updatedTodo));
  };

  const todosList = todos.filter((todo) => !todo.completed && !todo.pending);
  const pendingList = todos.filter((todo) => todo.pending && !todo.completed);
  const completedList = todos.filter((todo) => todo.completed);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-between">
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                className="w-1/3 p-2 bg-gray-100 rounded"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-bold mb-2 text-center">TODO</h2>
                {todosList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem todo={todo} onDelete={handleDelete} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="pending">
            {(provided) => (
              <div
                className="w-1/3 p-2 bg-yellow-100 rounded"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-bold mb-2  text-center">PENDING</h2>
                {pendingList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem todo={todo} onDelete={handleDelete} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided) => (
              <div
                className="w-1/3 p-2 bg-green-100 rounded"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-bold mb-2  text-center">COMPLETED</h2>
                {completedList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem todo={todo} onDelete={handleDelete} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">TODO-LIST</h1>
      {content}
    </div>
  );
};

export default TodoList;
