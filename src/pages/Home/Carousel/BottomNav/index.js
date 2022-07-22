import Container from './Container';
import List from './List';
import NavItem from './NavItem';

export default function BottomNav({ length, currentSlide, onChangeSlide }) {
  return (
    <Container>
      <List>
        {Array.from({ length }).map((_, index) => (
          <NavItem
            key={index}
            active={index === currentSlide}
            onChangeSlide={() => onChangeSlide('jump', index)}
          />
        ))}
      </List>
    </Container>
  );
}
