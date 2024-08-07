import styled from 'styled-components';

const StyledUserHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

const StyledUserHeaderName = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.user.headerName};
`;

const StyledUserHeaderBack = styled.button`
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;

  &:hover {
    & img {
      transform: scale(1.1);
    }

    & p {
      text-decoration: underline;
    }
  }
`;

const StyledUserHeaderBackImg = styled.img`
  display: inline-block;
  transition: all 0.2s;
`;

const StyledUserHeaderBackText = styled.p`
  transition: all 0.2s;
  font-size: 24px;
  font-weight: 700;
`;

export {
  StyledUserHeader,
  StyledUserHeaderName,
  StyledUserHeaderBack,
  StyledUserHeaderBackImg,
  StyledUserHeaderBackText,
};
