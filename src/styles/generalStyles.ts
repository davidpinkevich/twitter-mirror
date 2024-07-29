import styled from 'styled-components';

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

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: ${(props) => props.theme.colors.mainWhite};
  font-size: ${(props) => props.theme.fontSizes.signup.btn};
  font-weight: 700;
  width: 100%;
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

const StyledError = styled.p`
  color: ${(props) => props.theme.colors.mainRed};
`;

export { StyledInput, StyledButton, StyledError };
