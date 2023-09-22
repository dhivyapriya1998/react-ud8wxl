const explorer = {
  id: 1,
  name: 'root',
  isFolder: true,
  items: [
    {
      id: 2,
      name: 'public',
      isFolder: true,
      items: [
        {
          id: 2.1,
          name: 'index.html',
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 3,
      name: 'src',
      isFolder: true,
      items: [
        {
          id: 3.1,
          name: 'components',
          isFolder: true,
          items: [
            {
              id: 3.11,
              name: 'folder.js',
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 4.0,
      name: 'package.json',
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
