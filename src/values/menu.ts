import { IMenuList } from "@/types/menu";

export const menuList: IMenuList[] = [
  {
    id: 1,
    name: 'Ноутбуки',
    child: [
      {
        id: 1,
        name: 'Ноутбуки Apple',
        child: [
          {
            id: 1,
            name: 'Macbook Air',
            child: [
              {
                id: 1,
                name: "Makatumta"
              }
            ]
          },
          {
            id: 2,
            name: 'Macbook Pro'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Моноблоки',
    child: [
      {
        id: 1,
        name: 'Моноблоки Mac'
      }
    ]
  },
  {
    id: 3,
    name: 'Смартфоны',
    child: [
      {
        id: 1,
        name: 'Смартфоны Apple'
      },
      {
        id: 2,
        name: 'Смартфоны Samsung'
      }
    ]
  },
  {
    id: 4,
    name: 'Планшеты',
    child: [
      {
        id: 1,
        name: 'Планшеты iPad'
      },
      {
        id: 2,
        name: 'Планшеты Samsung Galaxy Tab'
      }
    ]
  },
  {
    id: 5,
    name: 'Акустика',
    child: [
      {
        id: 1,
        name: 'JBL'
      },
      {
        id: 2,
        name: 'Marshall'
      },
      {
        id: 3,
        name: 'Harman Kardon'
      },
      {
        id: 4,
        name: 'Yandex'
      },
      {
        id: 5,
        name: 'SONY'
      },
      {
        id: 6,
        name: 'Anker'
      }
    ]
  },
  {
    id: 6,
    name: 'Наушники',
    child: [
      {
        id: 1,
        name: 'Наушники Apple'
      },
      {
        id: 2,
        name: 'Наушники Samsung'
      },
      {
        id: 3,
        name: 'Наушники Marshall'
      },
      {
        id: 4,
        name: 'Наушники SONY'
      },
      {
        id: 5,
        name: 'Наушники Anker'
      }
    ]
  },
  {
    id: 7,
    name: 'Умные часы',
    child: [
      {
        id: 1,
        name: 'Умные часы Apple Watch',
        child: [
          {
            id: 1,
            name: 'Умные часы Apple Watch Series'
          },
          {
            id: 2,
            name: 'Умные часы Apple Watch Series'
          },
          {
            id: 3,
            name: 'Умные часы Apple Watch SE'
          }
        ]
      },
      {
        id: 2,
        name: 'Умные часы Samsung Galaxy Watch'
      }
    ]
  },
  {
    id: 8,
    name: 'Аксессуары',
    child: [
      {
        id: 1,
        name: 'Аксессуары Apple'
      },
      {
        id: 2,
        name: 'Зарядные устройства'
      },
      {
        id: 3,
        name: 'Чехлы для смартфонов'
      },
      {
        id: 4,
        name: 'Ремешки Watch'
      },
      {
        id: 5,
        name: 'Golden Concept'
      },
      {
        id: 6,
        name: 'PITAKA'
      },
      {
        id: 7,
        name: 'Saramonic'
      },
      {
        id: 8,
        name: 'Y24'
      },
      {
        id: 9,
        name: 'Bose'
      },
      {
        id: 10,
        name: 'Anker'
      }
    ]
  },
  {
    id: 9,
    name: 'Другие',
    child: [
      {
        id: 1,
        name: 'Игровые приставки'
      },
      {
        id: 2,
        name: 'Очки виртуальной реальности'
      },
      {
        id: 3,
        name: 'Dyson'
      },
      {
        id: 4,
        name: 'Roborock'
      }
    ]
  },
  {
    id: 10,
    name: 'Гаджеты Б/У'
  },
  {
    id: 11,
    name: 'BroService'
  },
];

