import { useState } from 'react';

import { getUID } from 'data/slices/sliceMemory';
import { type TypeTweet, type TypeUser } from 'types';

import { useAppSelector } from './useRedux';

const useProfile = () => {
  const uid = useAppSelector(getUID);
  const [viewModal, setViewModal] = useState(false);
  const [targetTweet, setTargetTweet] = useState<null | TypeTweet>(null);
  const [user, setUser] = useState<TypeUser>({ gender: 'secret', tweets: [], uid: '' });

  const [tweets, setTweets] = useState<TypeTweet[]>([]);

  const [observerLikes, setObserverLikes] = useState(false);

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
    targetTweet,
    setTargetTweet,
  };
};

export { useProfile };
