import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const StyledLoginTitle = styled.h2`
  text-align: left;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.signup.title};
  font-weight: 700;
`;

const StyledLoginLink = styled.p`
  text-align: right;
  width: 100%;
  color: ${(props) => props.theme.colors.mainBlue};
  transition: all 0.2s;
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.mainBlack};
  }
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledLoginImg = styled.img`
  width: 40px;
  height: 33px;
`;

const StyledErrorLogin = styled.h3`
  color: ${(props) => props.theme.colors.mainRed};
  font-size: ${(props) => props.theme.fontSizes.signup.err};
  font-weight: 600;
`;

export {
  StyledLogin,
  StyledErrorLogin,
  StyledLoginForm,
  StyledLoginImg,
  StyledLoginTitle,
  StyledLoginLink,
};
