import styled from 'styled-components';

const StyledButton = styled.button`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: none;
  position: absolute;
  background-color: white;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  left: ${(props) => props.prev && '15px'};
  padding-right: ${(props) => props.prev && '2px'};
  right: ${(props) => !props.prev && '15px'};
  padding-left: ${(props) => !props.prev && '2px'};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
`;

const Icon = styled.span.attrs({ className: 'material-icons' })`
  font-size: 32px;
  color: black;
`;

export default function NavArrow({ direction, onChangeSlide }) {
  return (
    <StyledButton prev={direction === 'prev'} onClick={onChangeSlide}>
      {direction === 'prev' ? (
        <Icon>chevron_left</Icon>
      ) : (
        <Icon>chevron_right</Icon>
      )}
    </StyledButton>
  );
}
