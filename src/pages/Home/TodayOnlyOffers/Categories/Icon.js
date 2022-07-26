import styled from 'styled-components';

const StyledIcon = styled.svg`
  width: 60%;
  height: auto;
  margin: auto;
`;

export default function Icon({ categoryIcon }) {
  return <StyledIcon as={categoryIcon} />;
}
