import { PropsLoading } from 'types';

import { SpanOne, SpanThree, SpanTwo, StyledLoading } from './styled';

const Loading: React.FC<PropsLoading> = ({ text }) => {
  return (
    <StyledLoading>
      {text}
      <SpanOne></SpanOne>
      <SpanTwo></SpanTwo>
      <SpanThree></SpanThree>
    </StyledLoading>
  );
};

export { Loading };
