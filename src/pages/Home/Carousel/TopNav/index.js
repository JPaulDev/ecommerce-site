import Container from './Container';
import List from './List';
import NavItem from './NavItem';

export default function TopNav({ slides, currentSlide, onChangeSlide }) {
  return (
    <Container>
      <List>
        {slides.map((slide, index) => (
          <NavItem
            key={slide.id}
            active={index === currentSlide}
            onChangeSlide={() => onChangeSlide('jump', index)}
          >
            {slide.navText}
          </NavItem>
        ))}
      </List>
    </Container>
  );
}
