import styled from 'styled-components';

const StyledIcon = styled.svg`
  width: ${(props) => props.width};
  height: auto;
  fill: #ff9110;
`;

function Icon({ icon, width }) {
  return <StyledIcon as={icon} width={width} />;
}

export default Icon;
