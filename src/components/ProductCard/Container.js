/* eslint-disable no-else-return */
import { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import uniqid from 'uniqid';
import ProductCard from '.';
import ryzen from './ryzen.webp';
import useMedia from '../../hooks/useMedia';

const products = [
  {
    id: uniqid(),
    image: ryzen,
    name: 'AMD Ryzen™ 9 59001',
    price: '389',
    array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  },
  {
    id: uniqid(),
    image: ryzen,
    name: 'AMD Ryzen™ 9 59002',
    price: '£389.99',
    array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  },
  {
    id: uniqid(),
    image: ryzen,
    name: 'AMD Ryzen™ 9 59003',
    price: '£389.99',
    array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59004',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59005',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59006',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59007',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59008',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 59009',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
  // {
  //   id: uniqid(),
  //   image: ryzen,
  //   name: 'AMD Ryzen™ 9 590010',
  //   price: '£389.99',
  //   array: ['12 Core, 24 Thread', 'AM4 Zen 3', '4.5GHz Turbo', '70MB Cache'],
  // },
];

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 5px;
  margin-top: 15px;

  @media screen and (max-width: 1310px) {
    padding: 0 10px;
  }
`;

export default function Container() {
  const match = useMedia('(min-width: 1157px)');
  const match2 = useMedia('(min-width: 700px)');
  const match3 = useMedia('(min-width: 700px)');

  return (
    <Div>
      <AnimatePresence>
        {products.map((item, index) => {
          if (!match && index === 2) {
            return null;
          } else if (!match && index === 8) {
            return <div>LOL</div>;
          }
          return (
            <motion.div
              key={item.id}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Div>
  );
}
