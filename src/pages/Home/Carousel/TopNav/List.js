import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export default function List({ children }) {
  return <StyledList>{children}</StyledList>;
}
