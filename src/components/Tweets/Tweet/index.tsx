import { ThemeMode } from 'constants/themeMode';
import { getTime } from 'utils/createDateTweet';
import { useAppSelector } from 'hooks/useRedux';
import crossGray from 'assets/icons/cross-gray.svg';
import crossWhite from 'assets/icons/cross-white.svg';
import plug from 'assets/images/plug.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { type PropsTweet } from 'types';

import { ButtonLike } from '../ButtonLike';

import { StyledTweet } from './styled';
import {
  StyledDeleteImage,
  StyledTweetAvatar,
  StyledTweetImage,
  StyledTweetInfo,
  StyledTweetText,
  StyledTweetUser,
  StyledTweetUserName,
  StyledTweetUserP,
} from './styled';

const Tweet: React.FC<PropsTweet> = ({ tweet, user, deleteTweet, changeLike, targetUID }) => {
  const { image, text, timestamp, id, linkTG, name, photo } = tweet;

  const theme = useAppSelector(getTheme);

  return (
    <StyledTweet>
      <StyledTweetAvatar src={photo ?? plug} />
      <StyledTweetInfo>
        <StyledTweetUser>
          {name && <StyledTweetUserName>{name}</StyledTweetUserName>}
          {linkTG && <StyledTweetUserP>{linkTG}</StyledTweetUserP>}
          <StyledTweetUserP>{getTime(timestamp)}</StyledTweetUserP>
        </StyledTweetUser>
        <StyledTweetText>{text}</StyledTweetText>
        {image && <StyledTweetImage src={image} />}
        <ButtonLike changeLike={changeLike} tweet={tweet} user={user} />
      </StyledTweetInfo>
      {targetUID === tweet.uid && (
        <StyledDeleteImage
          onClick={() => deleteTweet(id)}
          src={theme === ThemeMode.WHITE ? crossGray : crossWhite}
          alt="cross"
        />
      )}
    </StyledTweet>
  );
};

export { Tweet };
