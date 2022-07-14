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
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  @media screen and (min-width: 640px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 60%;
  height: auto;
  margin: auto;
`;

export default function Icon({ componentIcon }) {
  return (
    <Wrapper>
      <StyledIcon as={componentIcon} />
    </Wrapper>
  );
}
