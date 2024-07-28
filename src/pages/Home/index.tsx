import mainImg from 'assets/images/back-twitter.webp';

import { Enter } from 'components/Enter';

import { StyledHome, StyledHomeImage } from './styled';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledHomeImage src={mainImg} alt="twitter" />
      <Enter />
    </StyledHome>
  );
};

export { Home };
