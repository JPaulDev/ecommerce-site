import styled from 'styled-components';
import carouselAd1 from '../../assets/images/carousel-ad1.jpg';
import carouselAd2 from '../../assets/images/carousel-ad2.jpg';
import carouselAd3 from '../../assets/images/carousel-ad3.jpg';
import carouselAd4 from '../../assets/images/carousel-ad4.jpg';

const images = [carouselAd1, carouselAd2, carouselAd3, carouselAd4];

const ListItem = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity ease-in-out 1000ms;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function Slides({ slideIndex }) {
  return (
    <>
      {images.map((img, index) => {
        return (
          <ListItem key={index} active={slideIndex === index + 1}>
            <Image src={img} />
          </ListItem>
        );
      })}
    </>
  );
}

export default Slides;
