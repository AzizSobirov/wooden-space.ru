export const navigations = [
  {
    name: "Услуги",
    path: "/services",
    children: [
      {
        name: "Покраска доски",
        path: "/services/pokraska-doski",
      },
    ],
  },
  {
    name: "Прайс",
    path: "/pricing",
  },
  {
    name: "О компании",
    path: "/about",
    children: [
      {
        name: "Юридическая информация",
        path: "/about/legal-info",
      },
      {
        name: "Сертификаты",
        path: "/about/certificates",
      },
    ],
  },
  {
    name: "Наши работы",
    path: "/portfolio",
  },
  {
    name: "Дизайнерам/Архитекторам",
    path: "/career",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
];

export const projects = [
  {
    name: 'Оформление ресепшена в офисе БЦ "Данилов Плаза"',
    image: "/projects/1.png",
    category: "Декоративные балки",
  },
  {
    name: "projects 2",
    image: "/projects/2.png",
    category: "Термодревесина",
  },
  {
    name: "project 2",
    image: "/projects/3.png",
    category: "Декоративные рейки",
  },
  {
    name: "project 4",
    image: "/projects/4.png",
    category: "Беседки,перголы",
  },
  {
    name: "project 5",
    image: "/projects/5.png",
    category: "Кубообразный потолок",
  },
  {
    name: "project 6",
    image: "/projects/6.png",
    category: "Светильники",
  },
  {
    name: 'Оформление ресепшена в офисе БЦ "Данилов Плаза"',
    image: "/projects/1.png",
    category: "Светильники",
  },
  {
    name: "projects 2",
    image: "/projects/2.png",
    category: "Кубообразный потолок",
  },
  {
    name: "project 2",
    image: "/projects/3.png",
    category: "Беседки,перголы",
  },
  {
    name: "project 4",
    image: "/projects/4.png",
    category: "Беседки,перголы",
  },
  {
    name: "project 5",
    image: "/projects/5.png",
    category: "Светильники",
  },
  {
    name: "project 6",
    image: "/projects/6.png",
    category: "Кубообразный потолок",
  },
  {
    name: "projects 2",
    image: "/projects/2.png",
    category: "Термодревесина",
  },
  {
    name: "project 2",
    image: "/projects/3.png",
    category: "Декоративные рейки",
  },
  {
    name: "project 4",
    image: "/projects/4.png",
    category: "Беседки,перголы",
  },
];

export const prices = [
  {
    name: "Термососна",
    unit: "м",
    price: "от 1200 р",
  },
  {
    name: "Ясень",
    unit: "м",
    price: "от 1200 р",
  },
  {
    name: "Термоясень",
    unit: "м",
    price: "от 1200 р",
  },
  {
    name: "Дуб",
    unit: "м",
    price: "от 1200 р",
  },
  {
    name: "Лиственница",
    unit: "м",
    price: "от 1200 р",
  },
];

export const colors = [
  { img: 1, name: "Тёмный венге" },
  { img: 2, name: "Венге" },
  { img: 3, name: "Орех" },
  { img: 4, name: "Вишня" },
  { img: 5, name: "Золотой дуб" },
  { img: 6, name: "Тёмный дуб" },
  { img: 7, name: "Натурал. дуб" },
  { img: 8, name: "Светлый дуб" },
  { img: 9, name: "Беленый дуб" },
  { img: 10, name: "Белый дуб" },
  { img: 11, name: "Холодный дуб" },
  { img: 12, name: "Тёмный дуб" },
  { img: 13, name: "Дымчатый дуб" },
  { img: 14, name: "Америк. орех" },
  { img: 15, name: "Чёрный" },
  { img: 16, name: "Серый" },
  { img: 17, name: "Белый" },
  { img: 18, name: "Розовый" },
  { img: 19, name: "Серо-зелёный" },
  { img: 20, name: "Синий" },
];

export const advantages = [
  "Вы получаете скидки или бонусы на размещенные заказы",
  "Реализация под ключ: консультации, замер, производство, доставка, монтаж",
  "Можете быть уверены в натуральности и экологичности готовых изделий",
  "Поможем реализовать даже самые сложные и смелые ваши идеи",
  "Даем расширенную гарантию",
  "Получаете расширенную техническую консультацию на этапе проектирования",
  "Работаете напрямую с производителем с более чем 15-летним опытом работы в данной сфере",
  "Индивидуальный подбор цветовых решений по изделиям",
  "Строго соблюдаем сроки и взятые на себя обязательства",
  "Специализируемся на изготовлении изделий по индивидуальным эскизам архитекторов и дизайнеров, смело экспериментируем с материалами",
];

export const pricing = {
  list1: {
    title: "Рейки для стен",
    products: [
      {
        img: "prices/1.png",
        name: "Сухой ясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
      {
        img: "prices/2.png",
        name: "Термоясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
      {
        img: "prices/3.png",
        name: "Термососна",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
    ],
  },
  list2: {
    title: "Рейки для потолков",
    products: [
      {
        img: "prices/1.png",
        name: "Сухой ясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
      {
        img: "prices/2.png",
        name: "Термоясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
      {
        img: "prices/3.png",
        name: "Термососна",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
          { size: "20/50", price: "300 р", painted: "550 р" },
          { size: "40/30", price: "456 р", painted: "756 р" },
          { size: "40/40", price: "608 р", painted: "928 р" },
          { size: "40/60", price: "912 р", painted: "1262 р" },
          { size: "6/40", price: "140 р", painted: "220 р" },
          { size: "6/60", price: "210 р", painted: "310 р" },
        ],
      },
    ],
  },
  list3: {
    title: "Рейки для перегородок",
    products: [
      {
        img: "prices/1.png",
        name: "Сухой ясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
        ],
      },
      {
        img: "prices/2.png",
        name: "Термоясень",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
        ],
      },
      {
        img: "prices/3.png",
        name: "Термососна",
        desc: "Длина в размер (макс 3000 мм)",
        prices: [
          { size: "20/20", price: "120 р", painted: "270 р" },
          { size: "20/30", price: "180 р", painted: "360 р" },
          { size: "20/40", price: "280 р", painted: "480 р" },
        ],
      },
    ],
  },
};
