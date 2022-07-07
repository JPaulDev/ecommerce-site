import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  display: flex;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: ${(props) => (props.active ? 'black' : 'white')};
`;

function NavDots({ slides, slideIndex, onChangeSlide }) {
  return (
    <Container>
      {Array.from({ length: slides }).map((items, index) => (
        <Button
          onClick={() => onChangeSlide(index + 1)}
          active={slideIndex === index + 1}
        ></Button>
      ))}
    </Container>
  );
}

export default NavDots;
