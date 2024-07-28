import { Link } from 'react-router-dom';

import { Paths } from 'constants/index';
import googleIcon from 'assets/icons/google.svg';
import twitterIcon from 'assets/icons/twitter.svg';

import {
  StyledEnter,
  StyledEnterBtn,
  StyledEnterH2,
  StyledEnterImgGoogle,
  StyledEnterP,
  StyledEnterTitle,
  StyledEnterTitleImg,
} from './styled';

import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from 'services/firebase';

const Enter: React.FC = () => {
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider).then((data) => console.log(data));
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
      <StyledEnterBtn>Log in</StyledEnterBtn>
    </StyledEnter>
  );
};

export { Enter };
