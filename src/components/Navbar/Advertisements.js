import styled from 'styled-components';
import useMedia from '../../hooks/useMedia';
import componentsAd1 from '../../assets/images/components-ad1.jpg';
import componentsAd2 from '../../assets/images/components-ad2.jpg';
import componentsAd3 from '../../assets/images/components-ad3.jpg';
import accessoriesAd1 from '../../assets/images/accessories-ad1.jpg';
import accessoriesAd2 from '../../assets/images/accessories-ad2.jpg';

const Container = styled.div`
  padding: 25px;
  background-color: var(--background-grey);
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

export default function Advertisements({ menu }) {
  let content = null;

  if (menu === 'Components') {
    content = (
      <>
        <Image src={componentsAd1} />
        <Image src={componentsAd2} />
        <Image src={componentsAd3} />
      </>
    );
  } else if (menu === 'Accessories') {
    content = (
      <>
        <Image src={accessoriesAd1} />
        <Image src={accessoriesAd2} />
      </>
    );
  }

  return <Container>{content}</Container>;
}
