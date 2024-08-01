import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { changeTheme, getTheme } from 'data/slices/sliceMemory';

import { StyledSwiper, StyledSwiperBtn } from './styled';

const Swiper: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  const handleButton = () => {
    dispatch(changeTheme());
  };

  return (
    <StyledSwiper $themeType={theme} onClick={handleButton}>
      <StyledSwiperBtn $themeType={theme} />
    </StyledSwiper>
  );
};

export { Swiper };
