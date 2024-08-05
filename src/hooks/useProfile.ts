import { useState } from 'react';

import { getUID } from 'data/slices/sliceMemory';
import { type TypeTweet,type TypeUser } from 'types';

import { useAppSelector } from './useRedux';

const useProfile = () => {
  const uid = useAppSelector(getUID);
  const [viewModal, setViewModal] = useState(false);
  const [user, setUser] = useState<TypeUser>({ gender: 'secret', tweets: [], uid: '' });

  const [tweets, setTweets] = useState<TypeTweet[]>([]);

  const [observerLikes, setObserverLikes] = useState(0);

  return {
    uid,
    viewModal,
    setViewModal,
    user,
    setUser,
    tweets,
    setTweets,
    observerLikes,
    setObserverLikes,
  };
};

export { useProfile };
