import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  display: flex;
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

function NavDots({ slides, slideIndex, onChangeSlide }) {
  return (
    <Container>
      {Array.from({ length: slides }).map((items, index) => (
        <Button
          key={index}
          onClick={() => onChangeSlide(index + 1)}
          active={slideIndex === index + 1}
        ></Button>
      ))}
    </Container>
  );
}

export default NavDots;
