import { useEffect, useState } from 'react';

import { serviceCollections } from 'services/collections';
import { useAppSelector } from 'hooks/useRedux';
import { getUID } from 'data/slices/sliceMemory';
import { type TypeTweet, type TypeUser } from 'types';

import { Sidebar } from 'components/Sidebar';
import { CreateTweet } from 'components/Tweets/CreateTweet';
import { Tweet } from 'components/Tweets/Tweet';
import { UserHeader } from 'components/User/UserHeader';
import { UserInfo } from 'components/User/UserInfo';

import { StyledPofile,StyledUser } from './styled';

const Profile: React.FC = () => {
  const uid = useAppSelector(getUID);
  const [viewModal, setViewModal] = useState(false);
  const [user, setUser] = useState<TypeUser>({ gender: 'secret', tweets: [] });

  const [tweets, setTweets] = useState<TypeTweet[]>([]);

  const changeViewModal = () => {
    setViewModal(!viewModal);
  };

  const addNewTweet = (tweet: TypeTweet) => {
    setTweets([...tweets, tweet]);
  };

  const fetchData = async () => {
    const data = await serviceCollections.viewUser(uid);
    setTweets(data.tweets);
    setUser(data);
  };

  const deleteTweet = async (id: number) => {
    await serviceCollections.deleteTweet(user, uid, id);
    setTweets([...tweets].filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, [viewModal, uid, tweets.length]);

  return (
    <StyledPofile>
      <Sidebar user={user} uid={uid} addNewTweet={addNewTweet} />
      <StyledUser>
        <UserHeader name={user?.name} />
        <UserInfo user={user} viewModal={viewModal} changeViewModal={changeViewModal} />
        <CreateTweet user={user} uid={uid} addNewTweet={addNewTweet} />
        {[...tweets].reverse().map((item) => (
          <Tweet key={item.id} tweet={item} user={user} deleteTweet={deleteTweet} />
        ))}
      </StyledUser>
      <div>right</div>
    </StyledPofile>
  );
};

export { Profile };
