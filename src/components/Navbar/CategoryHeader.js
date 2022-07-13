import styled from 'styled-components';

const ListItem = styled.li`
  color: var(--main-orange);
  font-weight: bold;
  font-size: 1.03rem;
  border-bottom: 1px solid var(--main-orange);
  margin-bottom: 10px;
  padding-bottom: 6px;
`;

function CategoryHeader({ children }) {
  return <ListItem>{children}</ListItem>;
}

export default CategoryHeader;
