import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/index';
import { ThemeMode } from 'constants/themeMode';

const StlyedSidebar = styled.div<{
  $openModal: boolean;
  $modal: boolean;
  $typeTheme: ThemeMode.WHITE | ThemeMode.DARK;
}>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: ${(props) =>
    props.$typeTheme === ThemeMode.WHITE
      ? props.theme.colors.mainWhite
      : props.theme.colors.mainBlack};
  min-width: 280px;
  ${({ $modal }) =>
    $modal &&
    `&::after {
        content: '';
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.7;
      }`}

  @media (max-width: ${BREAKPOINTS.xl}) {
    min-width: auto;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    position: absolute;
    padding: 20px;
    min-height: 100vh;
    z-index: 15;
    top: 0;
    transition: all 0.2s;
    padding-bottom: 60px;
    gap: 20px;
    left: ${(props) => (props.$openModal ? 0 : '-100%')};
    width: 100%;
  }
`;

const StlyedSidebarBtnTweet = styled.button`
  font-weight: 700;
  padding: 10px 30px;
  height: 50px;
  border-radius: 60px;
  font-size: ${(props) => props.theme.fontSizes.user.createTweet};
  color: ${(props) => props.theme.colors.mainWhite};
  background-color: ${(props) => props.theme.colors.mainBlue};
  transition: all 0.2s;

  @media (max-width: ${BREAKPOINTS.lg}) {
    width: auto;
  }

  &:disabled {
    background-color: #a5d9fa;
    pointer-events: none;
  }

  &:hover {
    background-color: #027ec9;
  }
`;

const StlyedSidebarModalH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`;

const StlyedSidebarModal = styled.div`
  position: fixed;
  z-index: 5;
  border-radius: 12px;
  box-shadow: ${(props) => `inset 0px 0px 2px 2px ${props.theme.colors.mainWhite}`};
  background-color: inherit;
  top: 20%;
  left: calc(50% - 250px);
  padding: 20px 20px 0px 20px;
  width: 500px;

  @media (max-width: ${BREAKPOINTS.lg}) {
    width: 320px;
    left: calc(50% - 160px);
  }
`;

const StlyedSidebarModalClouse = styled.img`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export {
  StlyedSidebar,
  StlyedSidebarBtnTweet,
  StlyedSidebarModalClouse,
  StlyedSidebarModalH2,
  StlyedSidebarModal,
};
