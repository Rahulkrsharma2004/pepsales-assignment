// import React from 'react';

const BlockPreview = ({ block, onClose }) => {
  return (
    <div className="block-preview">
      <button onClick={onClose}>Close</button>
      <h3>{block.title}</h3>
      <p>{block.description}</p>
      <h4>Transition History:</h4>
      <ul>
        {block.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockPreview;
