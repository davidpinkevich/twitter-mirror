import { useState } from 'react';

import { ThemeMode } from 'constants/index';
import { useAppSelector } from 'hooks/useRedux';
import crossGray from 'assets/icons/cross-gray.svg';
import crossWhite from 'assets/icons/cross-white.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { type PropsCreateTweet } from 'types';

import { CreateTweet } from 'components/Tweets/CreateTweet';

import { Logout } from './Logout';
import { Menu } from './Menu';
import {
  StlyedSidebar,
  StlyedSidebarBtnTweet,
  StlyedSidebarModal,
  StlyedSidebarModalClouse,
  StlyedSidebarModalH2,
} from './styled';

const Sidebar: React.FC<PropsCreateTweet> = ({ user, uid, addNewTweet }) => {
  const [modal, setModal] = useState(false);

  const theme = useAppSelector(getTheme);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <StlyedSidebar $modal={modal} $typeTheme={theme}>
      <Menu />
      <StlyedSidebarBtnTweet onClick={handleModal}>Tweet</StlyedSidebarBtnTweet>
      {modal && (
        <StlyedSidebarModal>
          <StlyedSidebarModalH2>Create your tweet</StlyedSidebarModalH2>
          <CreateTweet user={user} uid={uid} addNewTweet={addNewTweet} />
          <StlyedSidebarModalClouse
            onClick={handleModal}
            src={theme === ThemeMode.WHITE ? crossGray : crossWhite}
            alt="cross"
          />
        </StlyedSidebarModal>
      )}
      <Logout user={user} />
    </StlyedSidebar>
  );
};

export { Sidebar };
