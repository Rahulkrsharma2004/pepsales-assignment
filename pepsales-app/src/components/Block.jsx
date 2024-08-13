import { useState } from 'react';
import BlockPreview from './BlockPreview';

const Block = ({ block }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleBlockClick = () => {
    setShowPreview(true);
  };

  return (
    <>
      <div className="block" onClick={handleBlockClick}>
        <p>{block.title}</p>
      </div>
      {showPreview && <BlockPreview block={block} onClose={() => setShowPreview(false)} />}
    </>
  );
};

export default Block;
