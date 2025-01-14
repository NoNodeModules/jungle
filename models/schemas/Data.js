const bcrypt = require ("bcryptjs");

const data = {
  users: [
    {
      name: 'smgcknt',
      email: 'admin@example.com',
      password: bcrypt.hashSync('0000', 5),
      isAdmin: true,
    },
    {
      name: 'sampleman1',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: '1',
      name: 'aaa Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 1200,
      countInStock: 3,
      brand: 'Nike',
      rating: 0.8,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'bbb Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 1000,
      countInStock: 5,
      brand: 'Adidas',
      rating: 2.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'ccc Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 2200,
      countInStock: 5,
      brand: 'Lacoste',
      rating: 2.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'ddd Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 780,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'eee Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 650,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'fff Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 1390,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
module.exports = data;