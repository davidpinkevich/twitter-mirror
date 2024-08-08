import image from 'assets/images/error.svg';
import { type TypeFallback } from 'types';

import {
  StyledFallback,
  StyledFallbackBlock,
  StyledFallbackImg,
  StyledFallbackInfo,
  StyledFallbackTitle,
} from './styled';

const Fallback: React.FC<TypeFallback> = ({ logger }) => {
  return (
    <StyledFallback>
      <StyledFallbackImg src={image} alt="error" />
      <StyledFallbackBlock>
        <StyledFallbackTitle>Something is wrong.</StyledFallbackTitle>
        <StyledFallbackInfo>{logger}</StyledFallbackInfo>
      </StyledFallbackBlock>
    </StyledFallback>
  );
};

export { Fallback };
