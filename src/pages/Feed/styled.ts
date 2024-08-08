import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/index';

const StyledFeed = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column-reverse;
    padding-top: 80px;
  }
`;

const StyledFeedMain = styled.div`
  flex-grow: 1;
  min-width: 750px;

  @media (max-width: ${BREAKPOINTS.xl}) {
    max-width: 550px;
    min-width: auto;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    max-width: 100%;
  }
`;

export { StyledFeed, StyledFeedMain };
