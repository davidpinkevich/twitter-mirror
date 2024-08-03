import styled from 'styled-components';

const StyledLogout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLogoutAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledLogoutProfile = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLogoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLogoutInfoTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.logout.text};
  font-weight: 600;
`;

const StyledLogoutInfoTg = styled.p`
  font-size: ${(props) => props.theme.fontSizes.logout.text};
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 500;
`;

const StyledLogoutBtn = styled.button`
  background-color: ${(props) => props.theme.colors.middleGray};
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: ${(props) => props.theme.fontSizes.logout.btn};
  font-weight: 700;
  border-radius: 60px;
  padding: 18px;
  width: 230px;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
  }
`;

export {
  StyledLogout,
  StyledLogoutProfile,
  StyledLogoutAvatar,
  StyledLogoutBtn,
  StyledLogoutInfo,
  StyledLogoutInfoTg,
  StyledLogoutInfoTitle,
};
