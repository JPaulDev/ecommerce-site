import styled from 'styled-components';

const ListItem = styled.li`
  padding-bottom: 6px;
`;

const Link = styled.a`
  cursor: pointer;
  color: var(--text-dark);

  &:hover {
    text-decoration: underline;
    color: var(--text-hover-grey);
  }
`;

export default function DropdownItem({ children }) {
  return (
    <ListItem>
      <Link>{children}</Link>
    </ListItem>
  );
}
