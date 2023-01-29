export interface Shipping {
  type: string;
  price: number;
}

export const shipping: Shipping[] = [
  {
    type: 'Overnight',
    price: 19.99,
  },
  {
    type: '3-Day',
    price: 9.99,
  },
  {
    type: 'Postal',
    price: 2.99,
  },
];
