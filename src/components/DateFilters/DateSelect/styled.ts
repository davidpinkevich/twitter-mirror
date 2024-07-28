import styled from 'styled-components';

const StyledDateSelect = styled.div`
  color: ${(props) => props.theme.colors.darkGray};
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  &:first-child {
    flex-basis: 40%;
  }
  &:nth-child(2) {
    flex-basis: 20%;
  }
  &:nth-child(3) {
    flex-basis: 20%;
  }
`;

const StyledDateSelectList = styled.ul`
  position: absolute;
  background-color: ${(props) => props.theme.colors.mainWhite};
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  border-radius: 6px;
  width: 100%;
  max-height: 200px;
  bottom: 73px;
  left: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-ms-scrollbar {
    width: 0px;
  }
`;

const StyledDateSelectListItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: ${(props) => props.theme.fontSizes.dateSelect.item};
  text-align: left;
  &:hover {
    background-color: gray;
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;

const StyledDateSelectBtn = styled.button`
  position: relative;
  text-align: left;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.dateSelect.item};
  border: ${(props) => `1px solid ${props.theme.colors.ligthGray}`};
  background-color: inherit;
  color: inherit;
  border-radius: 6px;
  padding: 24px 20px;
  transition: all 0.2s;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.mainWhite};
  }
`;

const StyledDateSelectBtnImg = styled.img<{ $target: boolean }>`
  position: absolute;
  top: calc(50% - 10px);
  right: 0;
  width: 40px;
  height: 20px;
  transition: all 0.2s;
  transform: ${(props) => (props.$target ? 'rotate(180deg)' : 'rotate(0)')};
`;

export {
  StyledDateSelect,
  StyledDateSelectBtn,
  StyledDateSelectBtnImg,
  StyledDateSelectList,
  StyledDateSelectListItem,
};
