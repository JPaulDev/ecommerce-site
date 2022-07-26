import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from '../../../hooks/useMedia';
import processors from '../../../data/processors';
import graphicsCards from '../../../data/graphics-cards';
import ProductCard from './ProductCard';
import Categories from './Categories';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px auto 0;

  @media screen and (max-width: 1310px) {
    padding: 0 11px;
  }
`;

const products = { processors, graphicsCards };

export default function TodayOnlyOffers() {
  const [category, setCategory] = useState('processors');
  const [numberOfProducts, setNumberOfProducts] = useState(4);
  const match785 = useMedia('(min-width: 785px)');
  const match1030 = useMedia('(min-width: 1030px)');

  useEffect(() => {
    if (!match785) {
      setNumberOfProducts(2);
    } else if (!match1030) {
      setNumberOfProducts(3);
    } else {
      setNumberOfProducts(4);
    }
  }, [match785, match1030]);

  const handleChange = (productsCategory) => {
    const formattedCategory = productsCategory
      .toLowerCase()
      .replace(/ ./g, (str) => str[1].toUpperCase());

    setCategory(formattedCategory);
  };

  const variants = {
    hidden: {
      opacity: 0,
      flex: 0,
      marginRight: '0px',
      marginLeft: '0px',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
    visible: {
      opacity: 1,
      flex: 1,
      marginRight: '4px',
      marginLeft: '4px',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  };

  return (
    <section>
      <Categories onChange={handleChange} />
      {products[category].map((row, index) => (
        <Container key={index}>
          <AnimatePresence initial={false}>
            {row.map((product, productIndex) => {
              if (productIndex < numberOfProducts) {
                return (
                  <motion.div
                    key={product.id}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <ProductCard product={product} />
                  </motion.div>
                );
              }
              return undefined;
            })}
          </AnimatePresence>
        </Container>
      ))}
    </section>
  );
}
