import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlockData } from '../redux/actions';

const TransitionPrompt = ({ block, onClose }) => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateBlockData(block.id, data));
    onClose();
  };

  return (
    <div className="transition-prompt">
      <h3>Provide Data for {block.title}</h3>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TransitionPrompt;
