import styled from 'styled-components';
import useHover from '../../../../hooks/useHover';
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

export default function Button({ item, onChange }) {
  const [isHovered, ref] = useHover();

  return (
    <StyledButton ref={ref} onClick={onChange}>
      <Icon isHovered={isHovered} categoryIcon={item.icon} />
      <Header isHovered={isHovered}>{item.category}</Header>
    </StyledButton>
  );
}
