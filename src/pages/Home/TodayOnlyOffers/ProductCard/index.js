import styled from 'styled-components';
import { useState, useRef, useCallback } from 'react';
import useHover from '../../../../hooks/useHover';

const Container = styled.div`
  position: relative;
  min-height: 370px;
  z-index: ${(props) => props.isHovered && '20'};
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  z-index: 10;
`;

const ProductName = styled.p`
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  margin: 10px 0;
  z-index: 10;
`;

const Price = styled.p`
  font-size: 32px;
  line-height: 31px;
  color: #3d70b7;
  z-index: 10;
`;

const SmallText = styled.span`
  font-size: 22px;
  color: #3d70b7;
`;

const PreviousPrice = styled.p`
  display: inline-block;
  font-size: 14px;
  color: #9e9e9e;
  text-decoration: line-through;
  z-index: 10;
`;

const Saving = styled.p`
  display: inline-block;
  font-size: 14px;
  color: red;
  z-index: 10;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  border: 1px solid var(--border-light-grey);
  transition: transform 200ms ease-in-out;
  transform: ${(props) => props.isHovered && 'scale(1.05)'};
  box-shadow: ${(props) => props.isHovered && '0 4px 11px -5px rgba(0, 0, 0, 0.9)'};
`;

const InnerContainer = styled.div`
  width: 100%;
  min-width: 220px;
  padding: 0 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: ${(props) => !props.isHovered && '100%'};
`;

const List = styled.ul`
  font-size: 14px;
  text-align: center;
  list-style: none;
  margin-bottom: 10px;
  z-index: 10;

  & > * {
    margin: 1px 0;
  }
`;

const Button = styled.button`
  width: 135px;
  height: 35px;
  font-weight: 700;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 10px;
  border: none;
  z-index: 10;
  color: white;
  cursor: pointer;
  background: linear-gradient(to top, #3b7739, #55a952);

  &:hover {
    background: linear-gradient(to top, #326830, #4a9b47);
  }
`;

export default function ProductCard({ product }) {
  const [isHovered, ref] = useHover();
  const saving = Math.trunc(product.price - product.salePrice);
  const price = product.salePrice.split('.');

  return (
    <Container ref={ref} isHovered={isHovered}>
      <InnerContainer isHovered={isHovered}>
        <Background isHovered={isHovered} />
        <Image src={product.image} />
        <ProductName>{product.name}</ProductName>
        {isHovered && (
          <List>
            {product.details.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </List>
        )}
        <Price>
          <SmallText>£</SmallText>
          {price[0]}
          <SmallText>{`.${price[1]}`}</SmallText>
        </Price>
        <PreviousPrice>{`Was: ${product.price}`}</PreviousPrice>
        <Saving>{`Save £${saving}`}</Saving>
        <Button>ADD TO BASKET</Button>
      </InnerContainer>
    </Container>
  );
}
