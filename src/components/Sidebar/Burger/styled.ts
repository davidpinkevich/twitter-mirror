import styled from 'styled-components';

import { BREAKPOINTS, ThemeMode } from 'constants/index';

const StyledBurger = styled.button<{ open: boolean; $typeTheme: ThemeMode.WHITE | ThemeMode.DARK }>`
  position: absolute;
  background-color: inherit;
  z-index: 20;
  top: 26px;
  right: 20px;
  align-items: center;
  width: 38px;
  height: 24px;
  display: none;

  @media (max-width: ${BREAKPOINTS.md}) {
    display: flex;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${(props) =>
      props.$typeTheme === ThemeMode.WHITE
        ? props.theme.colors.mainBlack
        : props.theme.colors.mainWhite};
    transition: 0.2s all;
  }
  &::before {
    top: ${(props) => (props.open ? '50%' : '0')};
    transform: ${(props) => (props.open ? 'rotate(-45deg) translate(0, -50%)' : 'none')};
  }
  &::after {
    bottom: ${(props) => (props.open ? '50%' : '0')};
    transform: ${(props) => (props.open ? 'rotate(45deg) translate(0, 50%)' : 'none')};
  }
`;

const StyledBurgerSpan = styled.span<{
  open: boolean;
  $typeTheme: ThemeMode.WHITE | ThemeMode.DARK;
}>`
  height: 2px;
  width: 100%;
  background-color: ${(props) =>
    props.$typeTheme === ThemeMode.WHITE
      ? props.theme.colors.mainBlack
      : props.theme.colors.mainWhite};
  transform: ${(props) => (props.open ? 'scale(0)' : 'scale(1)')};
`;

export { StyledBurger, StyledBurgerSpan };
