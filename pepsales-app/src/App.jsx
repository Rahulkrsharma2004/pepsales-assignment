import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';

const App = () => {
  const [isAddTodoModalOpen, setAddTodoModalOpen] = useState(false);

  const openAddTodoModal = () => setAddTodoModalOpen(true);
  const closeAddTodoModal = () => setAddTodoModalOpen(false);

  return (
    <div className="font-sans antialiased">
      <Navbar openAddTodoModal={openAddTodoModal} />
      <TodoList />
      <AddTodoModal isOpen={isAddTodoModalOpen} onClose={closeAddTodoModal} />
    </div>
  );
};

export default App;
