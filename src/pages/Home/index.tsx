import mainImg from 'assets/images/back-twitter.webp';

import { Enter } from 'components/Enter';

import { StyledHome, StyledHomeImage,StyledHomeImageWrapper } from './styled';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledHomeImageWrapper>
        <StyledHomeImage src={mainImg} alt="twitter" />
      </StyledHomeImageWrapper>
      <Enter />
    </StyledHome>
  );
};

export { Home };
