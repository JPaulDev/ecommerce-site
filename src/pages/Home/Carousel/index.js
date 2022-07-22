import { Fragment } from 'react';
import { motion } from 'framer-motion';
import useCarousel from '../../../hooks/useCarousel';
import useMedia from '../../../hooks/useMedia';
import useIsMounted from '../../../hooks/useIsMounted';
import slides from '../../../data/carouselSlides';
import Section from './Section';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import NavArrow from './NavArrow';
import Slide from './Slide';

export default function Carousel() {
  const [previous, current, moveLeft, handleChange] = useCarousel({
    length: slides.length,
    interval: 8000,
    transitionTime: 1000,
  });
  const isMounted = useIsMounted();
  const match = useMedia('(min-width: 700px)');

  return (
    <Section>
      {match ? (
        <TopNav
          slides={slides}
          currentSlide={current}
          onChangeSlide={handleChange}
        />
      ) : (
        <BottomNav
          length={slides.length}
          currentSlide={current}
          onChangeSlide={handleChange}
        />
      )}
      <NavArrow direction="prev" onChangeSlide={() => handleChange('prev')} />
      <NavArrow direction="next" onChangeSlide={() => handleChange('next')} />
      {slides.map((slide, index) => (
        <Fragment key={slide.id}>
          {index === previous && (
            <motion.div
              initial={{ translateX: '0%' }}
              animate={{ translateX: moveLeft ? '-100%' : '100%' }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              <Slide slide={slide} />
            </motion.div>
          )}
          {index === current && (
            <motion.div
              initial={{ translateX: moveLeft ? '100%' : '-100%' }}
              animate={{ translateX: '0%' }}
              transition={{ ease: 'easeInOut', duration: isMounted() ? 1 : 0 }}
            >
              <Slide slide={slide} />
            </motion.div>
          )}
        </Fragment>
      ))}
    </Section>
  );
}
