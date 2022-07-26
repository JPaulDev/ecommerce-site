import styled from 'styled-components';

const Wrapper = styled.div`
  width: 65px;
  height: 65px;
  display: grid;
  border-radius: 50%;
  margin-bottom: 5px;
  position: relative;
  box-shadow: 0 0 0 1px var(--main-orange);

  &::after {
    width: 100%;
    height: 100%;
    content: '';
    border-radius: inherit;
    position: absolute;
    box-shadow: 0 0 0 2px var(--main-orange);
    opacity: ${(props) => (props.isHovered ? 1 : 0)};
    transition: opacity 200ms ease-in-out;
  }

  @media screen and (min-width: 550px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 640px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledIcon = styled.svg`
  width: 60%;
  height: auto;
  margin: auto;
`;

export default function Icon({ isHovered, categoryIcon }) {
  return (
    <Wrapper isHovered={isHovered}>
      <StyledIcon as={categoryIcon} />
    </Wrapper>
  );
}
