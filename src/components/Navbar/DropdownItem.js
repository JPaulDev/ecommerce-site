import styled from 'styled-components';

const ListItem = styled.li`
  padding-bottom: 6px;
`;

const Link = styled.a`
  cursor: pointer;
  color: var(--text-black);

  &:hover {
    text-decoration: underline;
    color: var(--text-hover-grey);
  }
`;

function DropdownItem({ children }) {
  return (
    <ListItem>
      <Link>{children}</Link>
    </ListItem>
  );
}

export default DropdownItem;
