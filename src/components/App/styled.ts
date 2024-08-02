import styled from 'styled-components';

import { ThemeMode } from 'constants/themeMode';

const StyledApp = styled.div<{ $themeType: ThemeMode.DARK | ThemeMode.WHITE }>`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: 'Roboto', sans-serif;
  display: flex;
  min-height: 100vh;
  padding: 0px 20px 20px 20px;

  background-color: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? props.theme.colors.mainWhite
      : props.theme.colors.mainBlack};
  color: ${(props) =>
    props.$themeType === ThemeMode.WHITE
      ? props.theme.colors.mainBlack
      : props.theme.colors.mainWhite};
  justify-content: center;
`;

export { StyledApp };
