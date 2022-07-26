import styled from 'styled-components';
import useHover from '../../../../hooks/useHover';
import Wrapper from './Wrapper';
import Icon from './Icon';
import Header from './Header';

const StyledButton = styled.button`
  min-width: 85px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: none;

  @media screen and (min-width: 640px) {
    min-width: 95px;
  }
`;

export default function Button({ category, onChange }) {
  const [isHovered, ref] = useHover();

  return (
    <StyledButton ref={ref} onClick={onChange}>
      <Wrapper isHovered={isHovered}>
        <Icon categoryIcon={category.icon} />
      </Wrapper>
      <Header isHovered={isHovered}>{category.title}</Header>
    </StyledButton>
  );
}
