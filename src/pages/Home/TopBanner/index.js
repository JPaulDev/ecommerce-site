import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import useMedia from '../../../hooks/useMedia';
import trophyLogo from '../../../assets/images/top-banner-small/trophy-logo.png';
import trustpilotLogo from '../../../assets/images/top-banner-small/trustpilot-logo.png';
import paypalLogo from '../../../assets/images/top-banner-small/paypal-logo.png';
import Container from './Container';
import InnerContainer from './InnerContainer';
import Image from './Image';
import Text from './Text';

const content = [
  {
    id: uniqid(),
    image: trophyLogo,
    width: '60px',
    boldText: 'Award winning',
    text: 'Systems and customer services',
  },
  {
    id: uniqid(),
    image: trustpilotLogo,
    width: '73px',
    boldText: '4.8 stars on Trustpilot',
    text: 'From over 35000 customer reviews',
  },
  {
    id: uniqid(),
    image: paypalLogo,
    width: '80px',
    boldText: '0% interest up to 4 months',
    text: 'Minimum spend applies from £99',
  },
];

export default function TopBanner() {
  const [slideIndex, setSlideIndex] = useState(1);
  const match = useMedia('(min-width: 1000px)');

  useEffect(() => {
    let timeout;

    if (!match) {
      timeout = setTimeout(() => {
        if (slideIndex === content.length) {
          setSlideIndex(1);
        } else {
          setSlideIndex(slideIndex + 1);
        }
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [match, slideIndex]);

  return (
    <Container>
      {content.map((item, index) => (
        <InnerContainer key={item.id} active={slideIndex === index + 1}>
          <Image src={item.image} width={item.width} />
          <Text item={item} />
        </InnerContainer>
      ))}
    </Container>
  );
}
