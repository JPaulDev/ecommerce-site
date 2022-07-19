import styled from 'styled-components';

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 700;
  font-size: 31px;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen and (min-width: 700px) {
    margin-top: 15px;
    margin-bottom: 7px;
  }
`;

export default function LeftHeader({ children }) {
  return <Header>{children}</Header>;
}
