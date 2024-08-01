import styled, { keyframes } from 'styled-components';

const pulsLoading = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const StyledLoading = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.signup.btn};
  color: inherit;
  flex-grow: 1;
`;

const StyledLoadingSpan = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  margin: 0 3px;
  background-color: ${(props) => props.theme.colors.darkGray};
`;

const SpanOne = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0s infinite;
`;

const SpanTwo = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0.1s infinite;
`;

const SpanThree = styled(StyledLoadingSpan)`
  animation: ${pulsLoading} 0.4s ease 0.2s infinite;
`;

export { SpanOne, SpanThree, SpanTwo, StyledLoading };
