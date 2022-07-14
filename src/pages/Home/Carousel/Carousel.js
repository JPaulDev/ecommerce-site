import styled from 'styled-components';
import { Fragment } from 'react';
import { useCarousel } from './useCarousel';
import { motion } from 'framer-motion';
import carouselAd1 from '../../../assets/images/carousel/carousel1.jpg';
import carouselAd2 from '../../../assets/images/carousel/carousel2.jpg';
import carouselAd3 from '../../../assets/images/carousel/carousel3.jpg';
import carouselAd4 from '../../../assets/images/carousel/carousel4.jpg';
import NavArrow from './NavArrow';
import NavDots from './NavDots';

const images = [carouselAd1, carouselAd2, carouselAd3, carouselAd4];

const Section = styled.section`
  width: 100%;
  margin: 15px auto;
  position: relative;
  max-width: 1800px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const CarouselItem = styled.div`
  float: left;
  width: 100%;
  margin-right: -100%;
`;

const Inner = styled.div`
  width: 100%;

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default function Carousel() {
  const [previous, current, moveLeft, dispatch] = useCarousel(
    images.length,
    5000
  );

  return (
    <Section>
      <NavArrow
        direction="prev"
        onChangeSlide={() => dispatch({ type: 'prev' })}
      />
      <NavArrow
        direction="next"
        onChangeSlide={() => dispatch({ type: 'next' })}
      />
      <Inner>
        {images.map((image, index) => (
          <Fragment key={index}>
            {index === previous && (
              <motion.div
                initial={{ translateX: '0%' }}
                animate={{ translateX: moveLeft ? '-100%' : '100%' }}
                transition={{ ease: 'easeInOut', duration: 1 }}
              >
                <CarouselItem>
                  <Image src={image} />
                </CarouselItem>
              </motion.div>
            )}
            {index === current && (
              <motion.div
                initial={{ translateX: moveLeft ? '100%' : '-100%' }}
                animate={{ translateX: '0%' }}
                transition={{ ease: 'easeInOut', duration: 1 }}
              >
                <CarouselItem>
                  <Image src={image} />
                </CarouselItem>
              </motion.div>
            )}
          </Fragment>
        ))}
      </Inner>
      <NavDots length={images.length} current={current} dispatch={dispatch} />
    </Section>
  );
}
