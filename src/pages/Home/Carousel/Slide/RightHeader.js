import styled from 'styled-components';

const Header = styled.span`
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  display: block;
  margin-left: 11px;
`;

export default function RightHeader({ children }) {
  return <Header>{children}</Header>;
}
