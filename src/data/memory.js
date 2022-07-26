import uniqid from 'uniqid';
import corsairFan from '../assets/images/products/graphics-cards/asus-3080.webp';

const graphicsCards = [
  [
    {
      id: uniqid(),
      image: asus3080,
      name: 'ASUS ROG Strix GeForce RTX 3080 V2 OC',
      price: '932.99',
      salePrice: '914.99',
      details: ['1440MHz, 1905MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: uniqid(),
      image: evga3080,
      name: 'EVGA NVIDIA GeForce RTX 3080 FTW3',
      price: '898.99',
      salePrice: '849.99',
      details: ['1440MHz, 1800MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: uniqid(),
      image: msi3080,
      name: 'MSI NVIDIA GeForce RTX 3080 GAMING',
      price: '819.99',
      salePrice: '799.99',
      details: ['1440MHz, 1830MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: uniqid(),
      image: gigabyte3070,
      name: 'Gigabyte AORUS NVIDIA GeForce RTX 3070',
      price: '749.99',
      salePrice: '709.99',
      details: ['1500MHz, 1845MHz Boost', '5888 CUDA Cores', '8GB GDDR6'],
    },
  ],
  [
    {
      id: uniqid(),
      image: evga3060,
      name: 'EVGA NVIDIA GeForce RTX 3060 OC',
      price: '448.99',
      salePrice: '435.99',
      details: ['1320MHz, 1777MHz Boost', '3584 CUDA Cores', '12GB GDDR6'],
    },
    {
      id: uniqid(),
      image: zotac3060,
      name: 'ZOTAC NVIDIA GeForce RTX 3060',
      price: '435.99',
      salePrice: '409.99',
      details: ['1320MHz, 1837MHz Boost', '3584 CUDA Cores', '12GB GDDR6'],
    },
    {
      id: uniqid(),
      image: msi6800xt,
      name: 'MSI Radeon RX 6800XT GAMING',
      price: '909.99',
      salePrice: '849.99',
      details: [
        '2065MHz, 2310MHz Boost',
        '4608 Stream Processors',
        '16GB GDDR6',
      ],
    },
    {
      id: uniqid(),
      image: color6800,
      name: 'PowerColor Radeon RX 6800 Fighter',
      price: '647.99',
      salePrice: '630.99',
      details: [
        '1815MHz, 2105MHz Boost',
        '3840 Stream Processors',
        '16GB GDDR6',
      ],
    },
  ],
  [
    {
      id: uniqid(),
      image: asus6800,
      name: 'ASUS Radeon RX 6800 ROG Strix OC',
      price: '854.99',
      salePrice: '848.99',
      details: [
        '1980MHz, 2190MHz Boost',
        '3840 Stream Processors',
        '16GB GDDR6',
      ],
    },
    {
      id: uniqid(),
      image: asrock6750xt,
      name: 'Asrock Radeon RX 6750XT Phantom',
      price: '599.99',
      salePrice: '589.99',
      details: [
        '2554MHz, 2630MHz Boost',
        '2560 Stream Processors',
        '12GB GDDR6',
      ],
    },
    {
      id: uniqid(),
      image: msi6750xt,
      name: 'MSI Radeon RX 6750XT',
      price: '589.99',
      salePrice: '569.99',
      details: [
        '2512MHz, 2618MHz Boost',
        '2560 Stream Processors',
        '12GB GDDR6',
      ],
    },
    {
      id: uniqid(),
      image: sapphire6750xt,
      name: 'Sapphire Radeon RX 6750XT NITRO+',
      price: '624.99',
      salePrice: '609.99',
      details: [
        '2554MHz, 2623MHz Boost',
        '2560 Stream Processors',
        '12GB GDDR6',
      ],
    },
  ],
];

export default graphicsCards;
