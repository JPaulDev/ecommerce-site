import styled from 'styled-components';

const Div = styled.div`
  min-height: 80px;
  padding: 20px;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
  background-color: #d72140;
  border: 1px solid var(--border-light-grey);

  @media screen and (min-width: 925px) {
    display: flex;
    align-items: center;
    column-gap: 30px;
    background-color: white;
    padding: 20px 30px;
  }
`;

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
