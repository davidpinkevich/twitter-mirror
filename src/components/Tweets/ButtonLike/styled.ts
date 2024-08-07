import styled from 'styled-components';

const StyledButtonLike = styled.button`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  background-color: inherit;
`;

const StyledButtonLikeImg = styled.img`
  width: 20px;
  height: 19px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButtonLikeCount = styled.p<{ $target: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.$target ? props.theme.colors.likeRed : 'inherit')};
`;

export { StyledButtonLike, StyledButtonLikeImg, StyledButtonLikeCount };
