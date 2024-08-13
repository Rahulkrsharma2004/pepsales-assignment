const mockBlocks = [
    { id: 'block1', title: 'Block 1', description: 'Description 1', history: [] },
    { id: 'block2', title: 'Block 2', description: 'Description 2', history: [] },
  ];
  
  export const fetchBlocks = () => {
    return Promise.resolve(mockBlocks);
  };
  
  export const updateBlockHistory = (blockId, historyEntry) => {
    const block = mockBlocks.find(b => b.id === blockId);
    if (block) {
      block.history.push(historyEntry);
    }
    return Promise.resolve(block);
  };
  