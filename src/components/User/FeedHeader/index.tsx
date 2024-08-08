import { ThemeMode } from 'constants/index';
import { useAppSelector } from 'hooks/useRedux';
import arrowDark from 'assets/icons/arrow-left-black.svg';
import arrowWhite from 'assets/icons/arrow-left-white.svg';
import back from 'assets/images/back-profile.webp';
import plug from 'assets/images/plug.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { type PropsFeedHeader } from 'types';

import { Swiper } from 'components/Swiper';

import {
  StyledUserHeader,
  StyledUserHeaderBack,
  StyledUserHeaderBackImg,
  StyledUserHeaderBackText,
  StyledUserHeaderBody,
  StyledUserHeaderWrapAvatar,
  StyledUserHeaderWrapImg,
} from './styled';

const FeedHeader: React.FC<PropsFeedHeader> = ({ targetUser, tweets, setTargetUser }) => {
  const theme = useAppSelector(getTheme);
  const tweet = tweets.filter((item) => item.uid === targetUser)[0];

  return (
    <StyledUserHeaderBody>
      <StyledUserHeader>
        {targetUser && (
          <StyledUserHeaderBack onClick={() => setTargetUser('')}>
            <StyledUserHeaderBackImg
              src={theme === ThemeMode.WHITE ? arrowDark : arrowWhite}
              alt="back"
            />
            <StyledUserHeaderBackText>Home</StyledUserHeaderBackText>
          </StyledUserHeaderBack>
        )}
        {!targetUser && <StyledUserHeaderBackText>Home</StyledUserHeaderBackText>}
        <Swiper />
      </StyledUserHeader>
      {targetUser && (
        <>
          <StyledUserHeaderWrapImg src={back} alt="back" />
          <StyledUserHeaderWrapAvatar src={tweet?.photo ?? plug} alt="avatar" />
        </>
      )}
    </StyledUserHeaderBody>
  );
};

export { FeedHeader };
