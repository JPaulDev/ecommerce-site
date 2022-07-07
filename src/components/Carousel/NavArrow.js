import styled from 'styled-components';
import { ReactComponent as RightIcon } from '../../assets/svg/chevron-right.svg';
import { ReactComponent as LeftIcon } from '../../assets/svg/chevron-left.svg';

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  position: absolute;
  cursor: pointer;
  z-index: 20;
  top: 50%;
  left: ${(props) => props.prev && '20px'};
  right: ${(props) => !props.prev && '20px'};
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  padding-right: 4px;
  align-items: center;
`;

const Icon = styled.svg`
  width: 40%;
  height: auto;
  fill: white;
`;

function NavArrow({ direction, onChangeSlide }) {
  return (
    <StyledButton onClick={onChangeSlide} prev={direction === 'prev'}>
      <Icon as={direction === 'prev' ? LeftIcon : RightIcon} />
    </StyledButton>
  );
}

export default NavArrow;
