import styled from 'styled-components';
import pc from './right-pc.png';

const Div = styled.div`
  padding: 20px 220px 20px 20px;
  margin: 15px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-light-grey);
  background-color: #d72140;
  background-image: url(${pc});
  background-size: 190px;
  background-repeat: no-repeat;
  background-position: 96% 60%;

  @media screen and (min-width: 940px) {
    display: flex;
    align-items: center;
    column-gap: 30px;
    background-image: none;
    background-color: white;
    padding: 25px 30px;
  }
`;

export default function Container({ children }) {
  return <Div>{children}</Div>;
}
