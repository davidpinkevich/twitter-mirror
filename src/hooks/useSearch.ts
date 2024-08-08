import { useEffect, useState } from 'react';

import { serviceCollections } from 'services/collections';
import { getTheme, getUID } from 'data/slices/sliceMemory';
import { type TypeTweet, type TypeUser } from 'types';

import { useAppSelector } from './useRedux';

const useSearch = (type: string, targetTweet?: TypeTweet | null) => {
  const uid = useAppSelector(getUID) as string;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState<Array<TypeTweet> | null>(null);

  const [users, setUsers] = useState<Array<TypeUser> | null>(null);

  const [page, setPage] = useState(1);

  const theme = useAppSelector(getTheme);

  useEffect(() => {
    if (type === 'tweets') {
      setLoading(true);
      const fetchData = async () => {
        const data = await serviceCollections.searchTweet(value);
        setTweets(data);
        setLoading(false);
      };

      const timer = setTimeout(() => {
        fetchData();
      }, 750);

      return () => clearTimeout(timer);
    } else if (type === 'users') {
      setLoading(true);
      const fetchData = async () => {
        const data = await serviceCollections.getAllUsers(uid, value);
        setUsers(data);
        setLoading(false);
      };

      const timer = setTimeout(() => {
        fetchData();
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [value]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceCollections.searchTweet(value);
      setTweets(data);
    };
    fetchData();
  }, [targetTweet]);

  return { value, setValue, loading, page, setPage, theme, tweets, setTweets, users, setUsers };
};

export { useSearch };
