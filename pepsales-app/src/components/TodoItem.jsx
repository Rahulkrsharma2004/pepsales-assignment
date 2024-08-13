import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-2 bg-white shadow-md rounded">
      <div>
        <h2 className="text-xl font-semibold">{todo.title}</h2>
        <p>{todo.description}</p>
        <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
