import styled from 'styled-components';
import TopBanner from './TopBanner';
import Carousel from './Carousel';
import ProShopCards from './ProShopCards';
import TodayOnlyBanner from './TodayOnlyBanner';
import HomeCategories from './HomeCategories';
import AdvertBanner from './AdvertBanner';
import Container from '../../components/ProductCard/Container';

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: var(--background-grey);
  height: 2000px;
`;

export default function Home() {
  return (
    <Main>
      <TopBanner />
      <TodayOnlyBanner />
      <Container />
      {/* <Carousel />
      <ProShopCards />
      <AdvertBanner />
      <HomeCategories /> */}
    </Main>
  );
}
