import uniqid from 'uniqid';
import ryzen3 from '../assets/images/products/processors/ryzen3.webp';
import ryzen5 from '../assets/images/products/processors/ryzen5.webp';
import ryzen7 from '../assets/images/products/processors/ryzen7.webp';
import ryzen9 from '../assets/images/products/processors/ryzen9.webp';
import inteli3 from '../assets/images/products/processors/intel-i3.webp';
import inteli5 from '../assets/images/products/processors/intel-i5.webp';
import inteli7 from '../assets/images/products/processors/intel-i7.webp';
import inteli9 from '../assets/images/products/processors/intel-i9.webp';

const processors = [
  [
    {
      id: uniqid(),
      image: inteli5,
      name: 'Intel Core i5 10400F',
      price: '129.99',
      salePrice: '114.99',
      array: [
        '6 Cores, 12 Threads',
        'S1200 Comet Lake',
        '2.9GHz, 4.3GHz Turbo',
        '12MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: ryzen5,
      name: 'AMD Ryzen™ 5 4500',
      price: '124.99',
      salePrice: '104.99',
      array: [
        '6 Core, 12 Thread',
        'AM4 Zen 2',
        '3.6GHz, 4.1GHz Turbo',
        '11MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: inteli9,
      name: 'Intel Core i9 12900KS',
      price: '699.99',
      salePrice: '649.99',
      array: [
        '16 Cores, 24 Threads',
        'S1700 Alder Lake',
        '3.4GHz, 5.5GHz Turbo',
        '30MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: inteli3,
      name: 'Intel Core i3 12100',
      price: '131.99',
      salePrice: '125.99',
      array: [
        '4 Cores, 8 Threads',
        'S1700 Alder Lake',
        '3.3GHz, 4.3GHz Turbo',
        '12MB Cache',
      ],
    },
  ],
  [
    {
      id: uniqid(),
      image: ryzen9,
      name: 'AMD Ryzen™ 9 5900x',
      price: '389.99',
      salePrice: '344.99',
      array: [
        '12 Core, 24 Thread',
        'AM4 Zen 3',
        '3.7GHz, 4.8GHz Turbo',
        '70MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: ryzen7,
      name: 'AMD Ryzen™ 7 5700X',
      price: '274.99',
      salePrice: '238.99',
      array: [
        '8 Core, 16 Thread',
        'AM4 Zen 3',
        '3.4GHz, 4.6GHz Turbo',
        '36MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: inteli7,
      name: 'Intel Core i7 12700K',
      price: '434.99',
      salePrice: '419.99',
      array: [
        '12 Cores, 20 Threads',
        'S1700 Alder Lake',
        '3.6GHz, 4.9GHz Turbo',
        '25MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: ryzen7,
      name: 'AMD Ryzen 7 5800X3D',
      price: '439.99',
      salePrice: '399.99',
      array: [
        '8 Core, 16 Thread',
        'AM4 Zen 3',
        '3.4GHz, 4.5GHz Turbo',
        '100MB Cache',
      ],
    },
  ],
  [
    {
      id: uniqid(),
      image: inteli5,
      name: 'Intel Core i5 12600KF',
      price: '279.99',
      salePrice: '268.99',
      array: [
        '10 Cores, 16 Threads',
        'S1700 Alder Lake',
        '3.7GHz, 4.9GHz Turbo',
        '20MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: inteli3,
      name: 'Intel Core i3 12100F',
      price: '97.99',
      salePrice: '94.99',
      array: [
        '4 Cores, 8 Threads',
        'S1700 Alder Lake',
        '3.3GHz, 4.3GHz Turbo',
        '12MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: ryzen3,
      name: 'AMD Ryzen™ 3 4100',
      price: '94.99',
      salePrice: '89.99',
      array: [
        '4 Core, 8 Thread',
        'AM4 Zen 3',
        '3.8GHz, 4.0GHz Turbo',
        '6MB Cache',
      ],
    },
    {
      id: uniqid(),
      image: ryzen5,
      name: 'AMD Ryzen™ 5 5600G',
      price: '199.99',
      salePrice: '129.99',
      array: [
        '6 Core, 12 Thread',
        'AM4 Zen 3',
        '3.9GHz, 4.4GHz Turbo',
        '16MB Cache',
      ],
    },
  ],
];

export default processors;
