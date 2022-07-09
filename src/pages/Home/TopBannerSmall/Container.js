import styled from 'styled-components';

const Div = styled.div`
  min-height: 52px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid #e1e1e1;
  margin-top: 15px;
`;

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
