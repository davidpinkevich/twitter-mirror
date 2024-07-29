import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  width: 100%;
`;

const StyledHomeImageWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.mainBlue};
  width: 50vw;
  height: 100vh;
`;

const StyledHomeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { StyledHome, StyledHomeImageWrapper, StyledHomeImage };
