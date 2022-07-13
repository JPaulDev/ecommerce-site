import styled from 'styled-components';

const Header = styled.h3`
  font-family: 'Ropa Sans', sans-serif;
  color: white;
  font-size: 2.1rem;
  line-height: 2.1rem;
  margin-right: 30px;
  font-weight: 500;
  z-index: 10;
`;

function LeftHeader({ children }) {
  return <Header>{children}</Header>;
}

export default LeftHeader;
