import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from '../../../hooks/useMedia';
import processors from '../../../data/processors';
import ProductCard from './Prod';

const InnerContainer = styled.div`
  display: flex;
  margin-top: 7px;
  column-gap: 7px;
  justify-content: center;

  @media screen and (max-width: 1310px) {
    padding: 0 15px;
  }
`;

const Container = styled.div`
  margin-top: 15px;
`;

export default function TodayOnlyOffers() {
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

  const variants = {
    hidden: {
      opacity: 0,
      flex: 0,
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
    visible: {
      opacity: 1,
      flex: 1,
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  };

  return (
    <>
      {processors.map((row, index) => (
        <InnerContainer key={index}>
          <AnimatePresence>
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
        </InnerContainer>
      ))}
    </>
  );
}
