import styled from 'styled-components';

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

const StyledErrorExist = styled.h3`
  color: ${(props) => props.theme.colors.mainRed};
  font-size: ${(props) => props.theme.fontSizes.signup.err};
  font-weight: 600;
`;

const StyledFormSignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 670px;
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

  &:disabled {
    opacity: 0.4;
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
  &:disabled {
    opacity: 0.5;
  }

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
  StyledSignUp,
  StyledFormSignUpWrapper,
  StyledFormSignUpImg,
  StyledFormSignUp,
  StyledInput,
  StyledError,
  StyledErrorExist,
  StyledFormSignUpBtn,
  StyledFormSignUpLink,
  StyledFormSignUpTitle,
};
