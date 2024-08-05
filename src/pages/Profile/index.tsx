import { useEffect } from 'react';

import { serviceCollections } from 'services/collections';
import { useProfile } from 'hooks/useProfile';
import { type TypeTweet } from 'types';

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
  };

  const addLike = async (id: number) => {
    const tweets = await serviceCollections.changeLike(user, uid, id);
    setObserverLikes(tweets);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceCollections.viewUser(uid);
      setTweets(data.tweets);
      setUser(data);
    };
    fetchData();
  }, [viewModal, uid, tweets.length, observerLikes]);

  return (
    <StyledPofile>
      <Sidebar user={user} uid={uid} addNewTweet={addNewTweet} />
      <StyledUser>
        <UserHeader name={user?.name} />
        <UserInfo user={user} viewModal={viewModal} changeViewModal={changeViewModal} />
        <CreateTweet user={user} uid={uid} addNewTweet={addNewTweet} />
        {[...tweets].reverse().map((item) => (
          <Tweet
            key={item.id}
            tweet={item}
            user={user}
            deleteTweet={deleteTweet}
            addLike={addLike}
          />
        ))}
      </StyledUser>
      <div>right</div>
    </StyledPofile>
  );
};

export { Profile };
