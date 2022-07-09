import styled from 'styled-components';

const Strong = styled.strong`
  display: block;
  font-size: 0.87rem;
`;

const Span = styled.span`
  color: #5b5b5b;
  font-size: 0.7rem;
`;

function Text({ item }) {
  return (
    <Span>
      <Strong>{item.boldText}</Strong>
      {item.text}
    </Span>
  );
}

export default Text;
