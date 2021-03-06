import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  user-select: none;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
