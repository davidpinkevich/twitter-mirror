import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { changeModal, getModal, getTheme } from 'data/slices/sliceMemory';

import { StyledBurger, StyledBurgerSpan } from './styled';

const Burger: React.FC = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector(getModal);
  const theme = useAppSelector(getTheme);

  const handlerButton = () => {
    dispatch(changeModal());
  };

  return (
    <StyledBurger $typeTheme={theme} open={open} onClick={handlerButton}>
      <StyledBurgerSpan $typeTheme={theme} open={open}></StyledBurgerSpan>
    </StyledBurger>
  );
};

export { Burger };
