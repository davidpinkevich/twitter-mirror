import styled from 'styled-components';

import { ThemeMode } from 'constants/themeMode';

const StyledSearchTweet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledSearchTweetInputWrap = styled.div<{ $typeTheme: ThemeMode.WHITE | ThemeMode.DARK }>`
  position: relative;
  border-radius: 31px;
  background-color: ${(props) =>
    props.$typeTheme === ThemeMode.WHITE ? props.theme.colors.whiteGray : 'inherit'};
`;

const StyledSearchTweetInput = styled.input`
  padding: 20px 20px 20px 60px;
  background-color: inherit;
  font-size: 18px;
  border-radius: 15px;
  width: 100%;
  box-shadow: ${(props) => `inset 0px 0px 1px 1px ${props.theme.colors.mainWhite}`};
  color: inherit;
  transition: all 0.2s;

  &:focus {
    box-shadow: ${(props) => `inset 0px 0px 2px 2px ${props.theme.colors.mainWhite}`};
  }
`;

const StyledSearchTweetInputImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const StyledSearchTweetNF = styled.p`
  font-size: 20px;
  padding-left: 20px;
`;

const StyledSearchTweetItems = styled.ul`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${(props) => `inset 0px 0px 1px 1px ${props.theme.colors.mainWhite}`};
`;

const StyledSearchTweetItem = styled.li<{ $typeTheme: ThemeMode.WHITE | ThemeMode.DARK }>`
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.$typeTheme === ThemeMode.WHITE ? props.theme.colors.whiteGray : 'inherit'};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) =>
      props.$typeTheme === ThemeMode.WHITE ? props.theme.colors.mainWhite : 'inherit'};
  }
`;

const StyledSearchTweetItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledSearchTweetName = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const StyledSearchTweetText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const StyledSearchTweetItemAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const StyledSearchTweetShow = styled.button`
  font-size: 18px;
  background-color: inherit;
  text-align: left;
  color: ${(props) => props.theme.colors.mainBlue};

  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledSearchTweet,
  StyledSearchTweetNF,
  StyledSearchTweetItem,
  StyledSearchTweetText,
  StyledSearchTweetShow,
  StyledSearchTweetName,
  StyledSearchTweetItems,
  StyledSearchTweetInput,
  StyledSearchTweetInputImg,
  StyledSearchTweetItemBlock,
  StyledSearchTweetInputWrap,
  StyledSearchTweetItemAvatar,
};
