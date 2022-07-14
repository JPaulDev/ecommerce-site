import styled from 'styled-components';

const Header = styled.h3`
  font-family: 'Uni Sans', sans-serif;
  color: white;
  font-size: 1.85rem;
  line-height: 1.85rem;
  font-weight: 600;
  z-index: 10;

  @media screen and (min-width: 576px) {
    font-size: 1.95rem;
    line-height: 1.95rem;
    margin-right: 30px;
  }
`;

export default function LeftHeader({ children }) {
  return <Header>{children}</Header>;
}
