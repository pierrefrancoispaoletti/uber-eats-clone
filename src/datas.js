export const MerchantType = [
  // merchants type
  {
    name: "Burger",
    image: "/assets/images/burger.png",
    route: "burger",
  },
  {
    name: "Fast-Food",
    image: "/assets/images/fastfood.png",
    route: "fast-food",
  },
  {
    name: "Americain",
    image: "/assets/images/american.png",
    route: "american",
  },
  {
    name: "Barbecue",
    image: "/assets/images/bbq.png",
    route: "barbecue",
  },
  {
    name: "Ailes de poulet",
    image: "/assets/images/wings.png",
    route: "wings",
  },
  {
    name: "Sushi",
    image: "/assets/images/sushi.png",
    route: "sushi",
  },
  {
    name: "Japonais",
    image: "/assets/images/japanese.png",
    route: "japanese",
  },
  {
    name: "Asiatique",
    image: "/assets/images/asian.png",
    route: "asian",
  },
  {
    name: "Burger",
    image: "/assets/images/thai.png",
    route: "thai",
  },
  {
    name: "Italien",
    image: "/assets/images/italian.png",
    route: "italian",
  },
  {
    name: "Pizza",
    image: "/assets/images/pizza.png",
    route: "pizza",
  },
  {
    name: "Français",
    image: "/assets/images/french.png",
    route: "french",
  },
  {
    name: "Halal",
    image: "/assets/images/halal.png",
    route: "halal",
  },
];

// merchant
export const Shops = [
  {
    id: 1,
    siret: "123456",
    name: "Le temps des cerises",
    adress: "123 rue du soleil",
    image: "https://kants-merchants.s3.eu-west-2.amazonaws.com/kants.png",
    // rate:'4.2',
    merchantType: ["american", "burger", "fast-food"],
    open: true,
  },
  {
    id: 2,
    siret: "123456",
    name: "shop test 1",
    adress: "123 rue du soleil",
    image: "https://kants-merchants.s3.eu-west-2.amazonaws.com/kants.png",
    // rate: "5",
    merchantType: ["fast-food"],
    open: true,
  },
  {
    id: 3,
    siret: "123456",
    name: "shop test 2",
    adress: "123 rue du soleil",
    image: "https://kants-merchants.s3.eu-west-2.amazonaws.com/kants.png",
    rate: "2.5",
    merchantType: ["italian", "pizza"],
    open: false,
  },
];

export const merchantCategories = [
  {
    id: 11,
    merchantId: 1,
    name: "Poulet",
  },
  {
    id: 12,
    merchantId: 1,
    name: "Viande",
  },
  {
    id: 13,
    merchantId: 1,
    name: "Tortue",
  },
];

export const merchantSubcategories = [
  {
    id: 111,
    name: "simple",
    price: 18,
    description:
      "une tranche de pain , une tranche de viande , une tranche de pain",
    categoryId: 11,
    options: {
      Ingredients: [],
    },
  },
];

export const Products = [
  {
    name: "Burger de la mort",
    price: 18,
    description: "le burger ultime",
    urlImage: "/assets/images/burger-de-la-mort.jpeg",
    options: {
      taille: "XXXXL",
    },
    status: true,
    subCategory: "Triple",
  },
  {
    name: "Turtle Burger",
    price: 36,
    description: "Fan des tortues ninja ? ce burger est fait pour vous !",
    urlImage: "/assets/images/turtle-burger.jpg",
    options: {
      taille: "L",
    },
    status: true,
    subCategory: "Double",
  },
];
