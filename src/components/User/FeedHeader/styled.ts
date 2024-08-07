import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/index';

const StyledUserHeaderWrapImg = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: contain;
  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 550px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 100%;
  }
`;

const StyledUserHeaderWrapAvatar = styled.img`
  position: relative;
  bottom: 40px;
  left: 40px;
  z-index: 5;
  border-radius: 50%;
  width: 125px;
  height: 125px;
  object-fit: cover;

  @media (max-width: ${BREAKPOINTS.xl}) {
    width: 80px;
    height: 80px;
  }
`;

const StyledUserHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
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

const StyledUserHeaderWrap = styled.div`
  max-width: 750px;
  position: relative;
  padding-bottom: 20px;
  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 550px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export {
  StyledUserHeader,
  StyledUserHeaderBack,
  StyledUserHeaderBackImg,
  StyledUserHeaderBackText,
  StyledUserHeaderWrap,
  StyledUserHeaderWrapImg,
  StyledUserHeaderWrapAvatar,
};
