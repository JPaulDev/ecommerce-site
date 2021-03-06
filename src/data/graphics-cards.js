import asus3080 from '../assets/images/products/graphics-cards/asus-3080.webp';
import evga3080 from '../assets/images/products/graphics-cards/evga-3080.webp';
import msi3080 from '../assets/images/products/graphics-cards/msi-3080.webp';
import gigabyte3070 from '../assets/images/products/graphics-cards/gigabyte-3070.webp';
import evga3060 from '../assets/images/products/graphics-cards/evga-3060.webp';
import zotac3060 from '../assets/images/products/graphics-cards/zotac-3060.webp';
import msi6800xt from '../assets/images/products/graphics-cards/msi-6800xt.webp';
import color6800 from '../assets/images/products/graphics-cards/color-6800.webp';
import asus6800 from '../assets/images/products/graphics-cards/asus-6800.webp';
import asrock6750xt from '../assets/images/products/graphics-cards/asrock-6750xt.webp';
import msi6750xt from '../assets/images/products/graphics-cards/msi-6750xt.webp';
import sapphire6750xt from '../assets/images/products/graphics-cards/sapphire-6750xt.webp';

const graphicsCards = [
  [
    {
      id: 'GFX-ASU-3080',
      image: asus3080,
      name: 'ASUS ROG Strix GeForce RTX 3080 V2 OC',
      price: '932.99',
      salePrice: '914.99',
      details: ['1440MHz, 1905MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: 'GFX-EVG-3080',
      image: evga3080,
      name: 'EVGA NVIDIA GeForce RTX 3080 FTW3',
      price: '898.99',
      salePrice: '849.99',
      details: ['1440MHz, 1800MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: 'GFX-MSI-3080',
      image: msi3080,
      name: 'MSI NVIDIA GeForce RTX 3080 GAMING',
      price: '819.99',
      salePrice: '799.99',
      details: ['1440MHz, 1830MHz Boost', '8704 CUDA Cores', '10GB GDDR6X'],
    },
    {
      id: 'GFX-GIG-3070',
      image: gigabyte3070,
      name: 'Gigabyte AORUS NVIDIA GeForce RTX 3070',
      price: '749.99',
      salePrice: '709.99',
      details: ['1500MHz, 1845MHz Boost', '5888 CUDA Cores', '8GB GDDR6'],
    },
  ],
  [
    {
      id: 'GFX-EVG-3060',
      image: evga3060,
      name: 'EVGA NVIDIA GeForce RTX 3060 OC',
      price: '448.99',
      salePrice: '435.99',
      details: ['1320MHz, 1777MHz Boost', '3584 CUDA Cores', '12GB GDDR6'],
    },
    {
      id: 'GFX-ZOT-3060',
      image: zotac3060,
      name: 'ZOTAC NVIDIA GeForce RTX 3060',
      price: '435.99',
      salePrice: '409.99',
      details: ['1320MHz, 1837MHz Boost', '3584 CUDA Cores', '12GB GDDR6'],
    },
    {
      id: 'GFX-MSI-6800XT',
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
      id: 'GFX-COL-6800',
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
      id: 'GFX-ASU-6800',
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
      id: 'GFX-ASR-6750XT',
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
      id: 'GFX-MSI-6750XT',
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
      id: 'GFX-SAP-6750XT',
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
