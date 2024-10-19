export const itemsNavBar = [
  {
    id: "00",
    name: "inicio",
    link: "/",
    subcategorias: [],
  },
  {
    id : '01',
    name : 'Productos',
    link: 'productos',
    subcategorias : [],
  },
  {
    id: "02",
    name: "categorias",
    link: "category",
    subcategorias: [
      {
        id: "03",
        name: "hombre",
        subcategorias: [
          { id: "07", name: "pantalones" },
          { id: "08", name: "remeras" },
          { id: "09", name: "calzado" },
        ],
      },
      {
        id: "04",
        name: "mujer",
        subcategorias: [
          { id: "10", name: "remeras" },
          { id: "11", name: "pantalones" },
          { id: "12", name: "calzado" },
          { id: "13", name: "medias" },
        ],
      },
      {
        id: "05",
        name: "niño",
        subcategorias: [
          { id: "14", name: "remeras" },
          { id: "15", name: "pantalones" },
          { id: "16", name: "medias" },
        ],
      },
      {
        id: "06",
        name: "niña",
        subcategorias: [
          { id: "19", name: "vestidos" },
          { id: "20", name: "faldas" },
          { id: "21", name: "blusas" },
        ],
      },
      {
        id: "22",
        name: "accesorio",
        subcategorias: [
          { id: "17", name: "gorras" },
          { id: "18", name: "riñoneras" },
        ],
      },
    ],
  },
];
