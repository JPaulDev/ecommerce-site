import styled from 'styled-components';
import { ReactComponent as RightArrow } from '../../assets/svg/chevron-right.svg';
import { ReactComponent as LeftArrow } from '../../assets/svg/chevron-left.svg';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.prev && '10px'};
  padding-right: ${(props) => props.prev && '3px'};
  right: ${(props) => !props.prev && '10px'};
  padding-left: ${(props) => !props.prev && '3px'};
`;

const Icon = styled.svg`
  width: 40%;
  height: auto;
  fill: white;
`;

function NavArrow({ direction, onChangeSlide }) {
  return (
    <StyledButton onClick={onChangeSlide} prev={direction === 'prev'}>
      <Icon as={direction === 'prev' ? LeftArrow : RightArrow} />
    </StyledButton>
  );
}

export default NavArrow;
