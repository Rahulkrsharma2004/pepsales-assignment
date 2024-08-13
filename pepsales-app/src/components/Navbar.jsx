// import React from 'react';

const Navbar = ({ openAddTodoModal }) => {

  const handleAddTodoClick = () => {
    openAddTodoModal();
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <div className="text-2xl">Todo App</div>
      <button
        onClick={handleAddTodoClick}
        className="px-4 py-2 bg-green-500 rounded"
      >
        Add Todo
      </button>
    </nav>
  );
};

export default Navbar;
