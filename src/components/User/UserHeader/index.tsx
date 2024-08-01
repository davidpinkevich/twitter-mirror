import { type PropsUserHeader } from 'types';

import { Swiper } from 'components/Swiper';

import { StyledUserHeader, StyledUserHeaderName } from './styled';

const UserHeader: React.FC<PropsUserHeader> = ({ name }) => {
  return (
    <StyledUserHeader>
      <StyledUserHeaderName>{name ? name : 'Home'}</StyledUserHeaderName>
      <Swiper />
    </StyledUserHeader>
  );
};

export { UserHeader };
