const artists = [
  {
    _id: "1",
    name: "Ivan Tyurin",
    icon: "ivan_tyurin-icon.jpg",
    role: "3D Artist",
  },
  {
    _id: "2",
    name: "BARON",
    icon: "baron-icon.jpg",
    role: "3D Artist - Modeling & Texturing",
  },
];

const fetchAll = () => {
  return artists;
};

export default {
  fetchAll,
};
