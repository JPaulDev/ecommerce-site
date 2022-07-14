import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 15px;
  background-color: white;
  border: 1px solid var(--border-light-grey);
`;

const Div = styled.div`
  width: 98%;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  margin: 0 auto;
`;

export default function Container({ children }) {
  return (
    <Wrapper>
      <Div>{children}</Div>
    </Wrapper>
  );
}
