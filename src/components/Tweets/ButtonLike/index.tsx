import { ThemeMode } from 'constants/themeMode';
import { useAppSelector } from 'hooks/useRedux';
import blackLike from 'assets/icons/black-like.svg';
import redLike from 'assets/icons/red-like.svg';
import whiteLike from 'assets/icons/white-like.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { PropsButtonLike } from 'types';

import { StyledButtonLike, StyledButtonLikeCount,StyledButtonLikeImg } from './styled';

const ButtonLike: React.FC<PropsButtonLike> = ({ tweet, uid, addLike, id }) => {
  const theme = useAppSelector(getTheme);

  return (
    <StyledButtonLike onClick={() => addLike(id)}>
      <StyledButtonLikeImg
        src={
          tweet.likes.includes(uid) ? redLike : theme === ThemeMode.WHITE ? blackLike : whiteLike
        }
        alt="like"
      />
      <StyledButtonLikeCount $target={tweet.likes.includes(uid)}>
        {tweet.likes.length ? tweet.likes.length : ''}
      </StyledButtonLikeCount>
    </StyledButtonLike>
  );
};

export { ButtonLike };
