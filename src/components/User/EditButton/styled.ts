import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/index';
import { ThemeMode } from 'constants/themeMode';

const StyledEditButton = styled.button<{ $themeType: ThemeMode.DARK | ThemeMode.WHITE }>`
  position: absolute;
  top: 300px;
  right: 20px;

  @media (max-width: ${BREAKPOINTS.md}) {
    top: 135px;
  }

  color: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? props.theme.colors.mainBlack
      : props.theme.colors.mainWhite};
  border: ${(props) => `2px solid ${props.theme.colors.ligthGray}`};
  background-color: inherit;
  font-size: ${(props) => props.theme.fontSizes.user.editBtn};
  width: 120px;
  padding: 10px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.2s;
  &:hover {
    color: ${(props) =>
      props.$themeType === ThemeMode.WHITE
        ? props.theme.colors.mainWhite
        : props.theme.colors.mainBlack};
    background-color: ${(props) =>
      props.$themeType === ThemeMode.WHITE
        ? props.theme.colors.mainBlack
        : props.theme.colors.mainWhite};
  }
`;

export { StyledEditButton };
