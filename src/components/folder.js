import React, { useState } from 'react';

export default function Folder({ explorer, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleFolderClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e) => {
    if (e.target.value && e.keyCode === 13) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
            background: 'lightgrey',
          }}
          onClick={() => setExpand(!expand)}
        >
          <div>📁{explorer.name}</div>
          <div>
            <button onClick={(e) => handleFolderClick(e, true)}>+📁</button>
            <button onClick={(e) => handleFolderClick(e, false)}>+🗒️</button>
          </div>
        </div>
        {showInput.visible && (
          <div style={{ marginLeft: '20px' }}>
            <span>{showInput.isFolder ? '📁' : '🗒️'}</span>
            <span>
              <input
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </span>
          </div>
        )}

        {explorer.items.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                paddingLeft: '25px',
                marginTop: '4px',
                display: expand ? 'block' : 'none',
              }}
            >
              <Folder explorer={item} handleInsertNode={handleInsertNode} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <span>🗒️{explorer.name}</span>;
  }
}
