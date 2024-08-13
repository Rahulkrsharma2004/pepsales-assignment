// import React from 'react';

const Navbar = ({ openAddTodoModal }) => {
  const handleAddTodoClick = () => {
    openAddTodoModal();
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <div>
        <img
          src="https://pepsales.co/wp-content/uploads/2023/07/PepsalesLogo.png"
          alt="Pepsales Logo"
          className="w-auto h-16 object-contain"
        />
      </div>
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
