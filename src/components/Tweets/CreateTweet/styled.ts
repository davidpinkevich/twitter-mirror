import styled from 'styled-components';

const StyledCreateTweet = styled.div`
  border-radius: 6px;
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const StyledCreateEdit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledCreateTweetTextarea = styled.textarea`
  width: 100%;
  flex-grow: 1;
  height: 200px;
  resize: none;
  border-radius: 6px;
  font-size: 20px;
  transition: all 0.2s;
  background-color: inherit;
  color: inherit;
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  padding: 10px;

  &:focus {
    box-shadow: ${(props) => `0px 0px 2px 2px ${props.theme.colors.mainBlue}`};
    border: ${(props) => `1px solid ${props.theme.colors.mainBlue}`};
  }
`;

const StyledCreateTweetAvatarWrap = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: ${(props) => `inset 0px 0px 2px 4px ${props.theme.colors.ligthGray}`};
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

const StyledCreateTweetAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => `0px 0px 2px 2px ${props.theme.colors.mainBlue}`};
  object-fit: cover;
`;

const StyledInputFileLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledInputFileImage = styled.img`
  width: 100%;
  height: 100%;
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

const StyledCreateTweetViewImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
  border: ${(props) => `2px solid ${props.theme.colors.ligthGray}`};
`;

const StyledCreateTweetButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledCreateTweetButtonsFile = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledCreateTweetBtn = styled.button`
  font-weight: 700;
  padding: 15px 30px;
  height: 50px;
  border-radius: 120px;
  font-size: ${(props) => props.theme.fontSizes.user.createTweet};
  color: ${(props) => props.theme.colors.mainWhite};
  background-color: ${(props) => props.theme.colors.mainBlue};
  transition: all 0.2s;

  &:disabled {
    background-color: #a5d9fa;
    pointer-events: none;
  }

  &:hover {
    background-color: #027ec9;
  }
`;

const StyledDeleteImage = styled.img<{ $disabled: boolean }>`
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  pointer-events: ${(props) => (props.$disabled ? 'none' : 'all')};
`;

export {
  StyledCreateTweet,
  StyledCreateTweetTextarea,
  StyledCreateTweetAvatarWrap,
  StyledCreateTweetAvatar,
  StyledCreateEdit,
  StyledInputFileLabel,
  StyledInputFile,
  StyledInputFileImage,
  StyledCreateTweetViewImage,
  StyledCreateTweetButtonsFile,
  StyledCreateTweetBtn,
  StyledDeleteImage,
  StyledCreateTweetButtons,
};
