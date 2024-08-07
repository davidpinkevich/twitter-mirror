import { useEffect } from 'react';

import { serviceCollections } from 'services/collections';
import { useProfile } from 'hooks/useProfile';
import { type TypeTweet } from 'types';

import { SearchUser } from 'components/SearchUser';
import { Sidebar } from 'components/Sidebar';
import { CreateTweet } from 'components/Tweets/CreateTweet';
import { Tweet } from 'components/Tweets/Tweet';
import { FeedHeader } from 'components/User/FeedHeader';

import { StyledFeed, StyledFeedMain } from './styled';

const Feed: React.FC = () => {
  const {
    uid,
    user,
    setUser,
    setTweets,
    tweets,
    setTargetTweet,
    observerLikes,
    setObserverLikes,
    targetUser,
    setTargetUser,
  } = useProfile();

  useEffect(() => {
    const fetchData = async () => {
      const user = await serviceCollections.viewUser(uid);
      setUser(user);
      const tweets = await serviceCollections.getAllTweets();
      setTweets(tweets);
    };
    fetchData();
  }, [uid, tweets.length, observerLikes]);

  const addNewTweet = (tweet: TypeTweet) => {
    setTweets([...tweets, tweet]);
  };

  const deleteTweet = async (id: number) => {
    await serviceCollections.deleteTweet(user, uid, id);
    setTweets([...tweets].filter((item) => item.id !== id));
    setTargetTweet(null);
  };

  const changeLike = async (tweet: TypeTweet, type?: string) => {
    const target = await serviceCollections.changeLike(user, tweet);
    if (type === 'target') setTargetTweet(target);
    setObserverLikes(!observerLikes);
  };

  return (
    <StyledFeed>
      <Sidebar uid={uid} user={user} addNewTweet={addNewTweet} />
      <StyledFeedMain>
        <FeedHeader tweets={tweets} targetUser={targetUser} setTargetUser={setTargetUser} />
        {!targetUser && <CreateTweet user={user} uid={uid} addNewTweet={addNewTweet} />}
        {!targetUser &&
          [...tweets]
            .reverse()
            .map((item) => (
              <Tweet
                key={item.id}
                tweet={item}
                user={user}
                targetUID={uid}
                deleteTweet={deleteTweet}
                changeLike={changeLike}
              />
            ))}
        {targetUser &&
          [...tweets]
            .filter((item) => item.uid === targetUser)
            .reverse()
            .map((item) => (
              <Tweet
                key={item.id}
                tweet={item}
                user={user}
                targetUID={uid}
                deleteTweet={deleteTweet}
                changeLike={changeLike}
              />
            ))}
      </StyledFeedMain>
      <SearchUser setTargetUser={setTargetUser} />
    </StyledFeed>
  );
};

export { Feed };
