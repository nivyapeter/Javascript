let x;

const library = [
  {
    title: "tree",
    author: "john",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "water",
    author: "jack",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "forest",
    author: "Ann",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

x = library;

const[first,second,...rest] = library;

first.title = "first book";


console.log(library);