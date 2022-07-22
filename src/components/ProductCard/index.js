import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const Container = styled.div`
  position: relative;
  height: 350px;
  background-color: white;
  flex-direction: column;
  z-index: ${(props) => props.hover && '100'};

/* 
  @media screen and (min-width: 720px){
    width: calc(33% - 5px);
  }

  @media screen and (min-width: 940px){
    width: calc(25% - 5px);
  }

  @media screen and (min-width: 1165px){
    width: calc(20% - 5px);
  } */
`;

const Image = styled.img`
  width: 160px;
  z-index: 50;
`;

const Para = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  z-index: 50;
`;

const Price = styled.p`
  font-size: 31.5px;
  color: #3d70b7;
  z-index: 50;
`;

const Small = styled.span`
  font-size: 22px;
  color: #3d70b7;
`;

const Was = styled.p`
  display: inline-block;
  font-size: 14px;
  color: #9e9e9e;
  text-decoration: line-through;
  z-index: 50;
`;

const Saving = styled.p`
  display: inline-block;
  font-size: 14px;
  color: red;
  z-index: 50;
`;

const Grow = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  border: 1px solid var(--border-light-grey);
  transition: transform 200ms ease-in-out;
  transform: ${(props) => props.hover && 'scale(1.05)'};
  box-shadow: ${(props) => props.hover && '0 4px 11px -5px rgba(0,0,0,.75)'};
`;

const Wrapper2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  height: ${(props) => !props.hover && '100%'};
`;

const List = styled.ul`
  z-index: 50;
  font-size: 14px;
  text-align: left;
`;

export default function ProductCard({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <Wrapper2 hover={hover}>
        <Grow hover={hover} />
        <Image src={item.image} />
        <Para>{item.name}</Para>
        {hover && (
          <List>
            {item.array.map((text) => (
              <li>{text}</li>
            ))}
          </List>
        )}
        <Price>
          <Small>£</Small>
          389.
          <Small>99</Small>
        </Price>
        <Was>Was: £409.99</Was>
        <Saving>save £20.00</Saving>
      </Wrapper2>
    </Container>
  );
}
