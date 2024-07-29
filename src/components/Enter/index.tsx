import { Link } from 'react-router-dom';

import { serviceAuthentication } from 'services/auth';
import { serviceCollections } from 'services/collections';
import { Paths } from 'constants/index';
import { useAppDispatch } from 'hooks/useRedux';
import googleIcon from 'assets/icons/google.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import { changeUID } from 'data/slices/sliceMemory';

import {
  StyledEnter,
  StyledEnterBtn,
  StyledEnterH2,
  StyledEnterImgGoogle,
  StyledEnterP,
  StyledEnterTitle,
  StyledEnterTitleImg,
} from './styled';

const Enter: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleGoogle = async () => {
    const user = await serviceAuthentication.enterWithGoogle();
    dispatch(changeUID(user.uid));
    serviceCollections.addUserWithGoogle(user.uid, user);
  };

  return (
    <StyledEnter>
      <StyledEnterTitleImg src={twitterIcon} alt="logo" />
      <StyledEnterTitle>Happening now</StyledEnterTitle>
      <StyledEnterH2>Join Twitter today</StyledEnterH2>
      <StyledEnterBtn onClick={handleGoogle}>
        <StyledEnterImgGoogle src={googleIcon} alt="google" />
        Sign up with Google
      </StyledEnterBtn>
      <Link to={Paths.signup}>
        <StyledEnterBtn>Sign up with email</StyledEnterBtn>
      </Link>
      <StyledEnterP>Already have an account?</StyledEnterP>
      <Link to={Paths.login}>
        <StyledEnterBtn>Log in</StyledEnterBtn>
      </Link>
    </StyledEnter>
  );
};

export { Enter };
