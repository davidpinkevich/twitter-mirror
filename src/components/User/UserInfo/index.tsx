import back from 'assets/images/back-profile.webp';
import plug from 'assets/images/plug.svg';
import { type PropsUserInfo } from 'types';

import { EditButton } from '../EditButton';
import { UserModal } from '../UserModal';

import {
  StyledUserInfo,
  StyledUserInfoAvatar,
  StyledUserInfoAvatarWraper,
  StyledUserInfoBack,
  StyledUserInfoBackWrapper,
  StyledUserInfoBlock,
  StyledUserInfoBlockName,
  StyledUserInfoBlockP,
  StyledUserInfoBlockSpan,
  StyledUserInfoBlockTg,
} from './styled';

const UserInfo: React.FC<PropsUserInfo> = ({ user, viewModal, changeViewModal }) => {
  const { photo, name, date, secondName, linkTG, gender } = user;

  return (
    <StyledUserInfo>
      <StyledUserInfoBackWrapper>
        <StyledUserInfoBack src={back} alt="flowers" />
      </StyledUserInfoBackWrapper>
      <StyledUserInfoBlock>
        <StyledUserInfoAvatarWraper>
          <StyledUserInfoAvatar src={photo ? photo : plug} alt="avatar" />
        </StyledUserInfoAvatarWraper>
        <StyledUserInfoBlockName>
          {name} {secondName}
        </StyledUserInfoBlockName>
        {date && (
          <StyledUserInfoBlockP>
            Date: <StyledUserInfoBlockSpan>{date}</StyledUserInfoBlockSpan>
          </StyledUserInfoBlockP>
        )}
        <StyledUserInfoBlockP>
          Gender: <StyledUserInfoBlockSpan>{gender ? gender : 'secret'}</StyledUserInfoBlockSpan>
        </StyledUserInfoBlockP>
        {linkTG && (
          <StyledUserInfoBlockP>
            TG: <StyledUserInfoBlockTg>{linkTG}</StyledUserInfoBlockTg>
          </StyledUserInfoBlockP>
        )}
      </StyledUserInfoBlock>
      <EditButton changeModal={changeViewModal} />
      {viewModal && <UserModal user={user} changeModal={changeViewModal} />}
    </StyledUserInfo>
  );
};

export { UserInfo };
