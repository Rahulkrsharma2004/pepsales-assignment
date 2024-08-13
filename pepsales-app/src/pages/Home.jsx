import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../redux/todoSlice';
import TodoItem from '../components/TodoItem';
import Navbar from '../components/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);
console.log(todos,"line12")
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  let content;

  switch (status) {
    case 'loading':
      content = <div>Loading...</div>;
      break;
    case 'succeeded':
      content = todos.map((todo,ind) => (
        <TodoItem key={ind} todo={todo} onDelete={handleDelete} />
      ));
      break;
    case 'failed':
      content = <div>Error: {error}</div>;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        {content}
      </div>
    </div>
  );
};

export default Home;
