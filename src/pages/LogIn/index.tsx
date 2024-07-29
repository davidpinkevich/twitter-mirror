import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { serviceAuthentication } from 'services/auth';
import { ERRORS, Paths,PATTERNS } from 'constants/index';
import { useAppDispatch } from 'hooks/useRedux';
import twitter from 'assets/icons/twitter.svg';
import { changeUID } from 'data/slices/sliceMemory';
import { StyledButton,StyledError, StyledInput } from 'styles/generalStyles';
import { type TypesFormLogIn } from 'types';

import { Loading } from 'components/Loading';

import {
  StyledErrorLogin,
  StyledLogin,
  StyledLoginForm,
  StyledLoginImg,
  StyledLoginLink,
  StyledLoginTitle,
} from './styled';

const LogIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypesFormLogIn>({});

  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitValid: SubmitHandler<TypesFormLogIn> = async (data) => {
    try {
      setLoading(true);
      setError(false);
      const user = /^\d{11}$/.test(data.login)
        ? await serviceAuthentication.userSignInPhone(data.login, data.password)
        : await serviceAuthentication.userSignInEmail(data.login, data.password);
      dispatch(changeUID(user.uid));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <StyledLogin>
      <StyledLoginImg src={twitter} alt="logo" />
      <StyledLoginTitle>Log in to Twitter</StyledLoginTitle>
      {error && <StyledErrorLogin>This user isn`t registered yet</StyledErrorLogin>}
      <StyledLoginForm onSubmit={handleSubmit(submitValid)}>
        <StyledInput
          disabled={loading}
          placeholder="Phone number, email address"
          {...register('login', PATTERNS.login)}
        />
        {errors.login?.type && (
          <StyledError>{ERRORS.login[errors.login?.type as keyof typeof ERRORS.login]}</StyledError>
        )}
        <StyledInput
          disabled={loading}
          type="password"
          placeholder="Password"
          {...register('password', PATTERNS.pass)}
        />
        {errors.password?.type && (
          <StyledError>
            {ERRORS.password[errors.password?.type as keyof typeof ERRORS.password]}
          </StyledError>
        )}
        <StyledButton disabled={loading} type="submit">
          {loading ? <Loading text="Check" /> : 'Log In'}
        </StyledButton>
      </StyledLoginForm>
      <Link to={Paths.base}>
        <StyledLoginLink>Sign up to Twitter</StyledLoginLink>
      </Link>
    </StyledLogin>
  );
};

export { LogIn };
