import styled from 'styled-components';

const StyledFormSignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 750px;
  width: 100%;
`;
const StyledFormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const StyledError = styled.p`
  color: ${(props) => props.theme.colors.mainRed};
`;

const StyledFormSignUpTitle = styled.h2`
  text-align: left;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.signup.title};
  font-weight: 700;
`;

const StyledFormSignUpH3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.signup.h3};
  font-weight: 700;
`;

const StyledFormSignUpInfo = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  line-height: 160%;
`;

const StyledFormSignUpBtn = styled.button`
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: ${(props) => props.theme.fontSizes.signup.btn};
  font-weight: 700;
  border-radius: 76px;
  padding: 20px;
  transition: all 0.2s;

  &:hover {
    background-color: #027ec9;
  }
`;

const StyledFormSignUpImg = styled.img`
  width: 40px;
  height: 33px;
`;

const StyledFormSignUpLink = styled.p`
  color: ${(props) => props.theme.colors.mainBlue};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 25px 20px;
  border-radius: 6px;
  font-size: ${(props) => props.theme.fontSizes.signup.input};
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};

  &::placeholder {
    color: ${(props) => props.theme.colors.darkGray};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export {
  StyledFormSignUpWrapper,
  StyledFormSignUpImg,
  StyledFormSignUp,
  StyledFormSignUpH3,
  StyledInput,
  StyledError,
  StyledFormSignUpBtn,
  StyledFormSignUpLink,
  StyledFormSignUpInfo,
  StyledFormSignUpTitle,
};
