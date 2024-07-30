import styled from 'styled-components';

import { ThemeMode } from 'constants/themeMode';

const StyledSwiper = styled.button<{ $themeType: ThemeMode.DARK | ThemeMode.WHITE }>`
  position: relative;
  background-color: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? props.theme.colors.mainWhite
      : props.theme.colors.mainBlack};
  width: 50px;
  height: 25px;
  border-radius: 14px;
  border: 2px $ColorWhite solid;
  border: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? `2px ${props.theme.colors.mainBlack} solid`
      : `2px ${props.theme.colors.mainWhite} solid`};
`;

const StyledSwiperBtn = styled.div<{ $themeType: ThemeMode.DARK | ThemeMode.WHITE }>`
  position: absolute;
  transition: all 0.2s;
  height: 25px;
  width: 25px;
  z-index: 2;
  background-color: inherit;
  border-radius: 50%;
  top: -1.5px;
  left: -2px;
  left: ${(props) => (props.$themeType === ThemeMode.WHITE ? '23px' : '-2px')};
  border: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? `2px ${props.theme.colors.mainBlack} solid`
      : `2px ${props.theme.colors.mainWhite} solid`};
`;

export { StyledSwiper, StyledSwiperBtn };
