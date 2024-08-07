import { ChangeEvent } from 'react';

import { PAGES } from 'constants/index';
import { ThemeMode } from 'constants/themeMode';
import { useSearch } from 'hooks/useSearch';
import glassBlack from 'assets/icons/glass-black.svg';
import glassWhite from 'assets/icons/glass-white.svg';
import { type PropsSearch } from 'types';

import { Loading } from 'components/Loading';

import {
  StyledSearchTweet,
  StyledSearchTweetInput,
  StyledSearchTweetInputImg,
  StyledSearchTweetInputWrap,
  StyledSearchTweetItem,
  StyledSearchTweetItemAvatar,
  StyledSearchTweetItemBlock,
  StyledSearchTweetItems,
  StyledSearchTweetName,
  StyledSearchTweetNF,
  StyledSearchTweetShow,
  StyledSearchTweetText,
} from './styled';

const SearchTweet: React.FC<PropsSearch> = ({ targetTweet, setTargetTweet }) => {
  const { value, setValue, page, setPage, theme, loading, tweets } = useSearch(
    'tweets',
    targetTweet
  );

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setPage(1);
  };

  return (
    <StyledSearchTweet>
      <StyledSearchTweetInputWrap $typeTheme={theme}>
        <StyledSearchTweetInput value={value} onChange={handleInput} placeholder="Search Twitter" />
        <StyledSearchTweetInputImg
          src={theme === ThemeMode.WHITE ? glassBlack : glassWhite}
          alt="glass"
        />
      </StyledSearchTweetInputWrap>
      {loading && <Loading text="Search" />}
      {!loading && !!value.length && (
        <StyledSearchTweetItems>
          {tweets &&
            tweets.slice(0, page * PAGES.search.value).map((item, index) => {
              return (
                <StyledSearchTweetItem
                  $typeTheme={theme}
                  onClick={() => setTargetTweet(item)}
                  key={index}
                >
                  {item.photo && <StyledSearchTweetItemAvatar src={item.photo} alt="avatar" />}
                  <StyledSearchTweetItemBlock>
                    <StyledSearchTweetName>{item.name}</StyledSearchTweetName>
                    <StyledSearchTweetText>
                      {item.text.length > PAGES.search.text
                        ? item.text.slice(0, PAGES.search.text) + '...'
                        : item.text}
                    </StyledSearchTweetText>
                  </StyledSearchTweetItemBlock>
                </StyledSearchTweetItem>
              );
            })}
        </StyledSearchTweetItems>
      )}
      {tweets &&
        value &&
        !loading &&
        tweets.length > tweets.slice(0, page * PAGES.search.value).length && (
          <StyledSearchTweetShow onClick={() => setPage(page + 1)}>Show more</StyledSearchTweetShow>
        )}
      {!tweets?.length && !loading && value && (
        <StyledSearchTweetNF>Tweet not found</StyledSearchTweetNF>
      )}
    </StyledSearchTweet>
  );
};

export { SearchTweet };
