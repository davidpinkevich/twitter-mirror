import styled from 'styled-components';

import { ThemeMode } from 'constants/themeMode';

const StyledUserModalWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(100, 77, 77, 0.6);
`;

const StyledUserTitle = styled.div`
  color: inherit;
  font-size: ${(props) => props.theme.fontSizes.signup.title};
  margin-bottom: 20px;
`;

const StyledUserModal = styled.div<{ $typeTheme: ThemeMode.DARK | ThemeMode.WHITE }>`
  position: absolute;
  padding: 20px 35px 35px 35px;

  width: 450px;
  border: ${(props) => `2px solid ${props.theme.colors.darkGray}`};
  box-shadow: ${(props) => `inset 0px 0px 4px 2px ${props.theme.colors.mainWhite}`};
  background-color: ${(props) =>
    props.$typeTheme === ThemeMode.WHITE
      ? props.theme.colors.mainWhite
      : props.theme.colors.mainBlack};
  top: 10%;
  left: calc(50% - 225px);
  border-radius: 16px;
`;

const StyledModalClouse = styled.button`
  background-color: inherit;
  position: absolute;
  top: 25px;
  right: 25px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.15);
  }
`;

const StyledModalClouseImg = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledUserButton = styled.button`
  padding: 20px;
  border-radius: 6px;
  font-size: inherit;
  margin-top: 15px;
  transition: all 0.2s;
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.ligthGray};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.mainWhite};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.ligthGray};
    color: ${(props) => props.theme.colors.darkGray};
    pointer-events: none;
  }
`;

const StyledUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledModalSelect = styled.ul<{ $disabled: boolean }>`
  background-color: ${(props) => props.theme.colors.mainWhite};
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  border-radius: 6px;
  display: flex;
  width: 100%;
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'all')};
`;

const StyledModalSelectItem = styled.li<{ $target: boolean }>`
  padding: 15px 20px;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  transition: all 0.2s;
  font-size: ${(props) => props.theme.fontSizes.dateSelect.item};
  &::first-letter {
    text-transform: uppercase;
  }
  background-color: ${(props) => (props.$target ? props.theme.colors.darkGray : 'inherit')};
  color: ${(props) =>
    props.$target ? props.theme.colors.mainWhite : props.theme.colors.mainBlack};

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;

const StyledInputFileLabel = styled.label`
  position: relative;
  display: inline-block;
`;

const StyledInputFileSpan = styled.span<{ $disabled: boolean }>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-align: center;
  border-radius: 6px;
  background-color: inherit;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  transition: all 0.2s;
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  background-color: ${(props) =>
    props.$disabled ? props.theme.colors.ligthGray : props.theme.colors.mainWhite};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'all')};
  color: ${(props) =>
    props.$disabled ? props.theme.colors.darkGray : props.theme.colors.darkGray};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;

const StyledInputFile = styled.input`
  position: relative;
  display: inline-block;
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

export {
  StyledUserModalWrap,
  StyledUserModal,
  StyledUserForm,
  StyledUserTitle,
  StyledModalSelect,
  StyledUserButton,
  StyledModalClouse,
  StyledModalClouseImg,
  StyledModalSelectItem,
  StyledInputFileLabel,
  StyledInputFileSpan,
  StyledInputFile,
};
