import styled from 'styled-components';

const Strong = styled.strong`
  display: block;
  font-size: 0.87rem;
`;

const Span = styled.span`
  color: var(--text-dark-grey);
  font-size: 0.7rem;
`;

export default function Text({ item }) {
  return (
    <Span>
      <Strong>{item.boldText}</Strong>
      {item.text}
    </Span>
  );
}
