import styled from 'styled-components';

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledUserInfoAvatarWraper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  box-shadow: ${(props) => `inset 0px 0px 2px 4px ${props.theme.colors.ligthGray}`};
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

const StyledUserInfoAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledUserInfoBackWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
`;
const StyledUserInfoBack = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledUserInfoBlock = styled.div`
  position: relative;
  bottom: 30px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledUserInfoBlockName = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.home.name};
`;

const StyledUserInfoBlockP = styled.p`
  font-weight: 700;
`;

const StyledUserInfoBlockSpan = styled.span`
  font-weight: 500;
`;

const StyledUserInfoBlockTg = styled.span`
  color: ${(props) => props.theme.colors.mainBlue};
  font-weight: 400;
`;

export {
  StyledUserInfo,
  StyledUserInfoBackWrapper,
  StyledUserInfoAvatarWraper,
  StyledUserInfoAvatar,
  StyledUserInfoBack,
  StyledUserInfoBlock,
  StyledUserInfoBlockName,
  StyledUserInfoBlockP,
  StyledUserInfoBlockSpan,
  StyledUserInfoBlockTg,
};
