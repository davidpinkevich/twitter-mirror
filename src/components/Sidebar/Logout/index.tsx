import { useAppDispatch } from 'hooks/useRedux';
import plug from 'assets/images/plug.svg';
import { logOut } from 'data/slices/sliceMemory';
import { type TypeUser } from 'types';

import {
  StyledLogout,
  StyledLogoutAvatar,
  StyledLogoutBtn,
  StyledLogoutInfo,
  StyledLogoutInfoTg,
  StyledLogoutInfoTitle,
  StyledLogoutProfile,
} from './styled';

const Logout: React.FC<{ user: TypeUser }> = ({ user }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledLogout>
      <StyledLogoutProfile>
        <StyledLogoutAvatar src={user?.photo ?? plug} alt="avatar" />
        <StyledLogoutInfo>
          <StyledLogoutInfoTitle>{user?.name}</StyledLogoutInfoTitle>
          <StyledLogoutInfoTg>{user?.linkTG}</StyledLogoutInfoTg>
        </StyledLogoutInfo>
      </StyledLogoutProfile>
      <StyledLogoutBtn onClick={handleLogOut}>Log out</StyledLogoutBtn>
    </StyledLogout>
  );
};

export { Logout };
