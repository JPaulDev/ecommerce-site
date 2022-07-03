import styled from 'styled-components';

const Heading = styled.li`
  color: #ff9110;
  font-weight: 700;
  font-size: 1.03rem;
  border-bottom: 1px solid #ff9110;
  margin-bottom: 10px;
  padding-bottom: 6px;
`;

function Category({ children }) {
  return <Heading>{children}</Heading>;
}

export default Category;
