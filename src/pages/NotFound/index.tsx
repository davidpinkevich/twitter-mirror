import image from 'assets/images/404.svg';

import { StyledNF, StyledNFImage, StyledNFInfo } from './styled';

const NotFound: React.FC = () => {
  return (
    <StyledNF>
      <StyledNFImage src={image} />
      <StyledNFInfo>Ops. Page not found</StyledNFInfo>
    </StyledNF>
  );
};

export { NotFound };
