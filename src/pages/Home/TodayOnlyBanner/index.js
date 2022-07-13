import Link from './Link';
import Container from './Container';
import Background from './Background';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

function TodayOnlyBanner() {
  return (
    <Container>
      <Background />
      <LeftHeader>TODAY ONLY</LeftHeader>
      <RightHeader>Fantastic offers, updated every weekday</RightHeader>
      <Link />
    </Container>
  );
}

export default TodayOnlyBanner;
