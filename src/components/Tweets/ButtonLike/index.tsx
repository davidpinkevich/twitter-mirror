import { ThemeMode } from 'constants/themeMode';
import { useAppSelector } from 'hooks/useRedux';
import blackLike from 'assets/icons/black-like.svg';
import redLike from 'assets/icons/red-like.svg';
import whiteLike from 'assets/icons/white-like.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { PropsButtonLike } from 'types';

import { StyledButtonLike, StyledButtonLikeCount, StyledButtonLikeImg } from './styled';

const ButtonLike: React.FC<PropsButtonLike> = ({ tweet, user, changeLike }) => {
  const theme = useAppSelector(getTheme);

  return (
    <StyledButtonLike onClick={() => changeLike(tweet)}>
      <StyledButtonLikeImg
        src={
          tweet.likes.includes(user.uid)
            ? redLike
            : theme === ThemeMode.WHITE
            ? blackLike
            : whiteLike
        }
        alt="like"
      />
      <StyledButtonLikeCount $target={tweet.likes.includes(user.uid)}>
        {tweet.likes.length ? tweet.likes.length : ''}
      </StyledButtonLikeCount>
    </StyledButtonLike>
  );
};

export { ButtonLike };
