import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
`;

function Carousel() {
  const [previous, active, handleChange] = useCarousel(images.length, 5000);
  //  nest both the prev and next image, then only need one motion div
  return (
    <Section>
      <NavArrow direction="next" onChangeSlide={handleChange} />
      <Inner>
        {images.map((image, index) => {
          return (
            <>
              {/* THIS SLIDE MOVES OUT */}
              {index === previous && (
                <motion.div
                  initial={{ translateX: '0%' }}
                  animate={{ translateX: '-100%' }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                >
                  <CarouselItem key={index}>
                    <Image src={image} />
                  </CarouselItem>
                </motion.div>
              )}
              {/* THIS SLIDE MOVES IN */}
              {index === active && (
                <motion.div
                  initial={{ translateX: '100%' }}
                  animate={{ translateX: '0%' }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                >
                  <CarouselItem key={index}>
                    <Image src={image} />
                  </CarouselItem>
                </motion.div>
              )}
            </>
          );
        })}
      </Inner>
    </Section>
  );
}

export default Carousel;
