import { BREAKPOINTS } from 'constants/index';

import styled from 'styled-components';

const StyledEnter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledEnterTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.enter.h1};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.lg}) {
    font-size: 30px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 24px;
  }
`;

const StyledEnterH2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.enter.h2};
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS.lg}) {
    align-self: center;
    font-size: 36px;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    font-size: 30px;
  }
`;

const StyledEnterP = styled.p`
  font-size: ${(props) => props.theme.fontSizes.enter.p};
`;

const StyledEnterTitleImg = styled.img`
  display: block;
  width: 50px;
  height: 40px;
`;

const StyledEnterImgGoogle = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;

const StyledEnterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.enter.btn};
  background-color: inherit;
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  gap: 10px;
  border-radius: 42px;
  padding: 20px;
  width: 403px;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.mainBlack};
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;

export {
  StyledEnter,
  StyledEnterTitle,
  StyledEnterTitleImg,
  StyledEnterH2,
  StyledEnterP,
  StyledEnterBtn,
  StyledEnterImgGoogle,
};
