import { useEffect, useState } from 'react';

import { serviceCollections } from 'services/collections';
import { getTheme } from 'data/slices/sliceMemory';
import { type TypeTweet } from 'types';

import { useAppSelector } from './useRedux';

const useSearchTweet = (targetTweet: TypeTweet | null) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState<Array<TypeTweet> | null>(null);

  const [page, setPage] = useState(1);

  const theme = useAppSelector(getTheme);

  useEffect(() => {
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
  }, [value]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceCollections.searchTweet(value);
      setTweets(data);
    };
    fetchData();
  }, [targetTweet]);

  return { value, setValue, loading, page, setPage, theme, tweets };
};

export { useSearchTweet };
