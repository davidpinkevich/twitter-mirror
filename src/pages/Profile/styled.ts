import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/index';

const StyledPofile = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const StyledUser = styled.div`
  flex-grow: 1;
  max-width: 750px;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;

  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 550px;
  }
`;

export { StyledUser, StyledPofile };
