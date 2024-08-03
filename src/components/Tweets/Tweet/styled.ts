import styled from 'styled-components';

const StyledTweet = styled.div`
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  display: flex;
  gap: 20px;
  padding: 20px 34px;
`;

const StyledTweetAvatar = styled.img`
  border-radius: 50%;
  box-shadow: ${(props) => `inset 0px 0px 2px 4px ${props.theme.colors.ligthGray}`};
  width: 50px;
  height: 50px;
`;

const StyledTweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const StyledTweetUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledTweetUserName = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.tweet.h2};
  font-weight: 700;
`;

const StyledTweetUserP = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
`;

const StyledTweetText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.tweet.p};
  width: 100%;
`;

const StyledTweetImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  max-height: 500px;
  object-fit: cover;
`;

const StyledDeleteImage = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;

export {
  StyledTweet,
  StyledTweetAvatar,
  StyledTweetUserP,
  StyledTweetUserName,
  StyledTweetInfo,
  StyledTweetUser,
  StyledTweetText,
  StyledTweetImage,
  StyledDeleteImage,
};
