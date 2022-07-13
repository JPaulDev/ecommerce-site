import styled from 'styled-components';

const Header = styled.h3`
  font-family: 'Ropa Sans', sans-serif;
  font-size: 1.7rem;
  line-height: 1.7rem;
  font-weight: 400;
  margin-bottom: 15px;
  margin-top: 5px;

  @media screen and (min-width: 925px) {
    margin: 0;
  }
`;

function RightHeader({ children }) {
  return <Header>{children}</Header>;
}

export default RightHeader;
