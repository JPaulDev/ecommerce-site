import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  display: flex;
  z-index: 10;
`;

const Button = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid #d4d4d4;
  margin: 0 5px;
  background: ${(props) => (props.active ? 'black' : 'white')};
`;

export default function NavDots({ length, current, onChange }) {
  return (
    <Container>
      {Array.from({ length }).map((_, index) => (
        <Button
          key={index}
          onClick={() => onChange('jump', index)}
          active={current === index}
        />
      ))}
    </Container>
  );
}
