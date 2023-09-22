import React, { useState } from 'react';
import './style.css';
import explorer from './data/folderData.js';
import Folder from './components/folder.js';
import useTraverseTree from './hooks/custom-traverse-tree.js';

export default function App() {
  const [exploreData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, currentValue, isFolder) => {
    const updatedTree = insertNode(
      exploreData,
      folderId,
      currentValue,
      isFolder
    );
    setExplorerData(updatedTree);
  };

  return (
    <div>
      <Folder explorer={exploreData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
