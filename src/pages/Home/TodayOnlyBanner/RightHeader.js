import styled from 'styled-components';

const Header = styled.h3`
  font-family: 'Uni Sans', sans-serif;
  font-size: clamp(20px, 3.48vw, 25px);
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 7px;

  @media screen and (min-width: 700px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  @media screen and (min-width: 940px) {
    margin: 0;
  }
`;

export default function RightHeader({ children }) {
  return <Header>{children}</Header>;
}
