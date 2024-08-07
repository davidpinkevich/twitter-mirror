import { useEffect } from 'react';

import { serviceCollections } from 'services/collections';
import { useProfile } from 'hooks/useProfile';
import { type TypeTweet } from 'types';

import { SearchTweet } from 'components/SearchTweet';
import { Sidebar } from 'components/Sidebar';
import { CreateTweet } from 'components/Tweets/CreateTweet';
import { Tweet } from 'components/Tweets/Tweet';
import { UserHeader } from 'components/User/UserHeader';
import { UserInfo } from 'components/User/UserInfo';

import { StyledPofile, StyledUser } from './styled';

const Profile: React.FC = () => {
  const {
    uid,
    viewModal,
    setViewModal,
    user,
    setUser,
    tweets,
    setTweets,
    observerLikes,
    setObserverLikes,
    targetTweet,
    setTargetTweet,
  } = useProfile();

  const changeViewModal = () => {
    setViewModal(!viewModal);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceCollections.viewUser(uid);
      setTweets(data.tweets);
      setUser(data);
    };
    fetchData();
  }, [viewModal, uid, tweets.length, observerLikes, targetTweet]);

  return (
    <StyledPofile>
      <Sidebar user={user} uid={uid} addNewTweet={addNewTweet} />
      <StyledUser>
        <UserHeader name={user?.name} targetTweet={targetTweet} setTargetTweet={setTargetTweet} />
        {!targetTweet ? (
          <>
            <UserInfo user={user} viewModal={viewModal} changeViewModal={changeViewModal} />
            <CreateTweet user={user} uid={uid} addNewTweet={addNewTweet} />
            {[...tweets].reverse().map((item) => (
              <Tweet
                key={item.id}
                tweet={item}
                user={user}
                targetUID={uid}
                deleteTweet={deleteTweet}
                changeLike={changeLike}
              />
            ))}
          </>
        ) : (
          <Tweet
            tweet={targetTweet}
            targetUID={uid}
            user={user}
            deleteTweet={deleteTweet}
            changeLike={() => changeLike(targetTweet, 'target')}
          />
        )}
      </StyledUser>
      <SearchTweet targetTweet={targetTweet} setTargetTweet={setTargetTweet} />
    </StyledPofile>
  );
};

export { Profile };
