import styled from 'styled-components';
import { useState } from 'react';
import NavArrow from './NavArrow';
import Slides from './Slides';
import NavDots from './NavDots';
import carouselAd1 from '../../assets/images/carousel-ad1.jpg';
import carouselAd2 from '../../assets/images/carousel-ad2.jpg';
import carouselAd3 from '../../assets/images/carousel-ad3.jpg';
import carouselAd4 from '../../assets/images/carousel-ad4.jpg';

const images = [carouselAd1, carouselAd2, carouselAd3, carouselAd4];

const Section = styled.section`
  max-width: 1800px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  aspect-ratio: 18/5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const List = styled.ul`
  list-style: none;
`;

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleChangeNext = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const handleChangePrev = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const handleChangeSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <Section>
      <NavArrow onChangeSlide={handleChangePrev} direction="prev" />
      <NavArrow onChangeSlide={handleChangeNext} direction="next" />
      <List>
        <Slides slideIndex={slideIndex} images={images} />
      </List>
      <NavDots
        slides={images.length}
        slideIndex={slideIndex}
        onChangeSlide={handleChangeSlide}
      />
    </Section>
  );
}

export default Carousel;
