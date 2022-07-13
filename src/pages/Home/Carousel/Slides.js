import styled from 'styled-components';

const ListItem = styled.li`
  position: absolute;
  transition: opacity ease-in-out 1s;
  opacity: ${(props) => (props.active ? '1' : '0')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Slides({ slideIndex, images }) {
  return (
    <>
      {images.map((image, index) => {
        return (
          <ListItem key={index} active={slideIndex === index}>
            <Image src={image} />
          </ListItem>
        );
      })}
    </>
  );
}

export default Slides;
