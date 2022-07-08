import styled from 'styled-components';
import { useState, useEffect } from 'react';
import componentsAd1 from '../../assets/images/components-ad1.jpg';
import componentsAd2 from '../../assets/images/components-ad2.jpg';
import componentsAd3 from '../../assets/images/components-ad3.jpg';
import accessoriesAd1 from '../../assets/images/accessories-ad1.jpg';
import accessoriesAd2 from '../../assets/images/accessories-ad2.jpg';

const Container = styled.div`
  padding: 25px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.4);
`;

function Advertisements({ menu }) {
  const [match, setMatch] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 900px)');

    const handleMatch = (e) => {
      setMatch(e.matches);
    };

    mediaQuery.addEventListener('change', handleMatch);

    return () => mediaQuery.removeEventListener('change', handleMatch);
  }, []);

  let content = null;

  if (match && menu === 'Components') {
    content = (
      <Container>
        <Image src={componentsAd1} />
        <Image src={componentsAd2} />
        <Image src={componentsAd3} />
      </Container>
    );
  } else if (match && menu === 'Accessories') {
    content = (
      <Container>
        <Image src={accessoriesAd1} />
        <Image src={accessoriesAd2} />
      </Container>
    );
  }

  return <>{content}</>;
}

export default Advertisements;
