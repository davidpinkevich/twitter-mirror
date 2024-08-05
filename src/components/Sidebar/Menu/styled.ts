import { ThemeMode } from 'constants/themeMode';
import styled from 'styled-components';

const StyledMenu = styled.div`
  font-size: ${(props) => props.theme.fontSizes.menu};
  padding-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  & a {
    color: inherit;
  }
`;

const StyledMenuLogo = styled.img`
  width: 40px;
  height: 33px;
`;

const StyledMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledMenuItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.mainBlue};
  }
`;

const StyledMenuItemName = styled.p<{ $target: boolean }>`
  font-weight: ${(props) => (props.$target ? 700 : 400)};
`;

const StyledMenuItemImg = styled.img<{
  $typeTheme: ThemeMode.WHITE | ThemeMode.DARK;
}>`
  display: flex;
  gap: 20px;
  align-items: center;
  filter: ${(props) => (props.$typeTheme === ThemeMode.WHITE ? 'none' : 'invert(100%)')};
`;

export {
  StyledMenu,
  StyledMenuLogo,
  StyledMenuUl,
  StyledMenuItem,
  StyledMenuItemImg,
  StyledMenuItemName,
};
