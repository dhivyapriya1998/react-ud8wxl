const useTraverseTree = () => {
  function insertNode(tree, folderId, currentValue, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: currentValue,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((item) => {
      return insertNode(item, folderId, currentValue, isFolder);
    });
    return { ...tree, items: latestNode };
  }
  return { insertNode };
};

export default useTraverseTree;
