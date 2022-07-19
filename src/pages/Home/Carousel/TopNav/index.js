import uniqid from 'uniqid';
import Container from './Container';
import List from './List';
import NavItem from './NavItem';

const content = [
  {
    id: uniqid(),
    text: '30 SERIES 3XS PCs',
  },
  {
    id: uniqid(),
    text: 'INTEL 3XS PCs',
  },
  {
    id: uniqid(),
    text: 'AMD POWERED GAMING',
  },
  {
    id: uniqid(),
    text: 'PC OF THE MONTH',
  },
];

export default function TopNav({ currentSlide, onChange }) {
  return (
    <Container>
      <List>
        {content.map((element, index) => (
          <NavItem
            key={element.id}
            active={index === currentSlide}
            onChange={() => onChange('jump', index)}
          >
            {element.text}
          </NavItem>
        ))}
      </List>
    </Container>
  );
}
