import { ChangeEvent } from 'react';

import { PAGES } from 'constants/index';
import { ThemeMode } from 'constants/themeMode';
import { useSearch } from 'hooks/useSearch';
import glassBlack from 'assets/icons/glass-black.svg';
import glassWhite from 'assets/icons/glass-white.svg';
import { type PropsSearchUser } from 'types';

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
} from '../SearchTweet/styled';

const SearchUser: React.FC<PropsSearchUser> = ({ setTargetUser }) => {
  const { value, setValue, page, setPage, theme, loading, users, setUsers } = useSearch('users');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsers([]);
    setValue(event.target.value);
    setPage(1);
  };

  const handleClick = (uid: string) => {
    setTargetUser(uid);
  };

  return (
    <StyledSearchTweet>
      <StyledSearchTweetInputWrap $typeTheme={theme}>
        <StyledSearchTweetInput
          value={value}
          onChange={handleInput}
          placeholder="Search Profiles"
        />
        <StyledSearchTweetInputImg
          src={theme === ThemeMode.WHITE ? glassBlack : glassWhite}
          alt="glass"
        />
      </StyledSearchTweetInputWrap>
      {loading && <Loading text="Search" />}
      {!loading && !!value.length && (
        <StyledSearchTweetItems>
          {users &&
            users.slice(0, page * PAGES.search.value).map((item, index) => {
              return (
                <StyledSearchTweetItem
                  onClick={() => handleClick(item.uid)}
                  $typeTheme={theme}
                  key={index}
                >
                  {item.photo && <StyledSearchTweetItemAvatar src={item.photo} alt="avatar" />}
                  <StyledSearchTweetItemBlock>
                    <StyledSearchTweetName>{item.name}</StyledSearchTweetName>
                    <StyledSearchTweetText>{item.linkTG}</StyledSearchTweetText>
                  </StyledSearchTweetItemBlock>
                </StyledSearchTweetItem>
              );
            })}
        </StyledSearchTweetItems>
      )}
      {users &&
        value &&
        !loading &&
        users.length > users.slice(0, page * PAGES.search.value).length && (
          <StyledSearchTweetShow onClick={() => setPage(page + 1)}>Show more</StyledSearchTweetShow>
        )}
      {!loading && !users?.length && value && (
        <StyledSearchTweetNF>User not found</StyledSearchTweetNF>
      )}
    </StyledSearchTweet>
  );
};

export { SearchUser };
