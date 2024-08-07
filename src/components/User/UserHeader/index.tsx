import { ThemeMode } from 'constants/themeMode';
import { useAppSelector } from 'hooks/useRedux';
import arrowDark from 'assets/icons/arrow-left-black.svg';
import arrowWhite from 'assets/icons/arrow-left-white.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { type PropsUserHeader } from 'types';

import { Swiper } from 'components/Swiper';

import {
  StyledUserHeader,
  StyledUserHeaderBack,
  StyledUserHeaderBackImg,
  StyledUserHeaderBackText,
  StyledUserHeaderName,
} from './styled';

const UserHeader: React.FC<PropsUserHeader> = ({ name, targetTweet, setTargetTweet }) => {
  const theme = useAppSelector(getTheme);

  return (
    <StyledUserHeader>
      {!targetTweet && <StyledUserHeaderName>{name}</StyledUserHeaderName>}
      {targetTweet && (
        <StyledUserHeaderBack onClick={() => setTargetTweet(null)}>
          <StyledUserHeaderBackImg
            src={theme === ThemeMode.WHITE ? arrowDark : arrowWhite}
            alt="back"
          />
          <StyledUserHeaderBackText>Home</StyledUserHeaderBackText>
        </StyledUserHeaderBack>
      )}
      <Swiper />
    </StyledUserHeader>
  );
};

export { UserHeader };
