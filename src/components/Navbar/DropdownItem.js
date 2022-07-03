import styled from 'styled-components';

const ListItem = styled.li`
  padding-bottom: 6px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333333;

  &:hover {
    text-decoration: underline;
    color: #7e7e7e;
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
