import styled from 'styled-components';

const StyledUserHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

const StyledUserHeaderName = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.user.headerName};
`;

export { StyledUserHeader, StyledUserHeaderName };
