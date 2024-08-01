import { useEffect, useState } from 'react';

import { serviceCollections } from 'services/collections';
import { useAppSelector } from 'hooks/useRedux';
import { getUID } from 'data/slices/sliceMemory';
import { TypeUser } from 'types';

import { StyledUser } from './styled';
import { UserHeader } from 'components/User/UserHeader';
import { UserInfo } from 'components/User/UserInfo';

const Profile: React.FC = () => {
  const uid = useAppSelector(getUID);
  const [viewModal, setViewModal] = useState(false);
  const [user, setUser] = useState<TypeUser>({ gender: 'secret' });

  const changeViewModal = () => {
    setViewModal(!viewModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceCollections.viewUser(uid);
      setUser(data);
    };

    fetchData();
  }, [viewModal]);

  return (
    <StyledUser>
      <UserHeader name={user?.name} />
      <UserInfo user={user} viewModal={viewModal} changeViewModal={changeViewModal} />
    </StyledUser>
  );
};

export { Profile };
