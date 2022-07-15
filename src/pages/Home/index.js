import styled from 'styled-components';
import TopBanner from './TopBanner';
import Carousel from './Carousel/Carousel';
import ProShopCards from './ProShopCards';
import TodayOnlyBanner from './TodayOnlyBanner';
import HomeCategories from './HomeCategories';

const Main = styled.main`
  width: 98%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Main>
      <TopBanner />
      <Carousel />
      <ProShopCards />
      <TodayOnlyBanner />
      <HomeCategories />
    </Main>
  );
}
