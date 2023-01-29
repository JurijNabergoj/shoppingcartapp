export interface Product {
  id: number;
  name: string;
  price: number;
  descriptionShort: string;
  description: string;
  photo: string;
}

export const products: Product[] = [
  {
    id: 0,
    name: 'Smad 36" French Door Refrigerator',
    price: 1749.99,
    descriptionShort:
      'Sleek design, spacious, with built-in water dispenser/ice maker and dual door for freshness',
    description:
      "The French door refrigerator is the perfect addition to any modern kitchen. With its sleek design and spacious interior, you'll have plenty of room for all your fresh and frozen food. The built-in water dispenser and ice maker make it easy to stay hydrated, and the dual door design ensures that your food stays fresh for longer.",
    photo: './assets/img1.jpg',
  },
  {
    id: 1,
    name: 'LG Side-By-Side Refrigerator XXXL',
    price: 2499.99,
    descriptionShort:
      'Ample storage, built-in water dispenser/ice maker, easy access',
    description:
      "If you're looking for a refrigerator that offers plenty of storage space, look no further than the side-by-side model. With its large capacity and smart organization, you'll be able to easily store and access all your food. The built-in water dispenser and ice maker make it easy to stay hydrated, and the side-by-side design makes it easy to find what you're looking for.",
    photo: './assets/img2.jpg',
  },
  {
    id: 2,
    name: 'LG 20 cu. ft. Top Freezer Refrigerator',
    price: 1199.99,
    descriptionShort:
      'Budget-friendly, simple design, easy-to-clean, easy access to frozen food, large capacity for fresh food, energy efficient',
    description:
      "The top-freezer refrigerator is a great option for those on a budget. With its simple design and easy-to-clean interior, it's perfect for any kitchen. The top-freezer design allows for easy access to your frozen food, and the large capacity makes it easy to store all your fresh food. Plus, it is energy efficient which will help you save money on your energy bill.",
    photo: './assets/img3.jpg',
  },
];
