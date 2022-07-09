import styled from 'styled-components';

const ListItem = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity ease-in-out 1000ms;
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
      {images.map((img, index) => {
        return (
          <ListItem key={index} active={slideIndex === index + 1}>
            <Image src={img} />
          </ListItem>
        );
      })}
    </>
  );
}

export default Slides;
