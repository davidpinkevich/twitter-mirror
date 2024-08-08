import { Link, useLocation } from 'react-router-dom';

import { menuItems } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import twitter from 'assets/icons/twitter.svg';
import { changeModal, getTheme } from 'data/slices/sliceMemory';

import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemImg,
  StyledMenuItemName,
  StyledMenuLogo,
  StyledMenuUl,
} from './styled';

const Menu: React.FC = () => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    dispatch(changeModal());
  };

  return (
    <StyledMenu>
      <StyledMenuLogo src={twitter} alt="logo" />
      <StyledMenuUl>
        {menuItems.map((item) => {
          return (
            <Link onClick={handleClick} to={item?.path ? item.path : ''} key={item.name}>
              <StyledMenuItem>
                <StyledMenuItemImg $typeTheme={theme} src={item.img} alt={item.name} />
                <StyledMenuItemName $target={!!item?.path && item.path === pathname}>
                  {item.name}
                </StyledMenuItemName>
              </StyledMenuItem>
            </Link>
          );
        })}
      </StyledMenuUl>
    </StyledMenu>
  );
};

export { Menu };
