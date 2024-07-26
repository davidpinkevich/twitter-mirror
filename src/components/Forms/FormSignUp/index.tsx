import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import twitter from 'assets/icons/twitter.svg';

import { Paths, ERRORS } from 'constants/index';

import { type TypesFormSignUp } from 'types';

import {
  StyledFormSignUpWrapper,
  StyledFormSignUp,
  StyledInput,
  StyledFormSignUpLink,
  StyledFormSignUpImg,
  StyledFormSignUpTitle,
  StyledFormSignUpBtn,
  StyledFormSignUpH3,
  StyledFormSignUpInfo,
  StyledError,
} from './styled';

const FormSignUp = ({
  createUser,
}: {
  createUser: (mail: string, phone: string) => Promise<void>;
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<TypesFormSignUp>({});

  const submitValid: SubmitHandler<TypesFormSignUp> = (data) => {
    reset();
    clearErrors();
    createUser(data.email, data.password);
  };

  return (
    <StyledFormSignUpWrapper>
      <StyledFormSignUpImg src={twitter} alt="logo" />
      <StyledFormSignUpTitle>Create an account</StyledFormSignUpTitle>
      <StyledFormSignUp onSubmit={handleSubmit(submitValid)}>
        <StyledInput
          placeholder="Name"
          {...register('name', { required: true, minLength: 3, pattern: /^[A-Z][a-z]{2,}$/ })}
        />
        {errors.name?.type && (
          <StyledError>{ERRORS.name[errors.name?.type as keyof typeof ERRORS.name]}</StyledError>
        )}
        <StyledInput
          type="number"
          placeholder="Phone number"
          {...register('phone', { required: true, minLength: 11, maxLength: 11 })}
        />
        {errors.phone?.type && (
          <StyledError>{ERRORS.phone[errors.phone?.type as keyof typeof ERRORS.phone]}</StyledError>
        )}
        <StyledInput
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
          })}
        />
        {errors.email?.type && (
          <StyledError>{ERRORS.email[errors.email?.type as keyof typeof ERRORS.email]}</StyledError>
        )}
        <StyledInput
          placeholder="Password"
          type="password"
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[0-9]).*[^ ]+$/,
          })}
        />
        {errors.password?.type && (
          <StyledError>
            {ERRORS.password[errors.password?.type as keyof typeof ERRORS.password]}
          </StyledError>
        )}
        <Link to={Paths.base}>
          <StyledFormSignUpLink>Use email</StyledFormSignUpLink>
        </Link>
        <StyledFormSignUpH3>Date of birth</StyledFormSignUpH3>
        <StyledFormSignUpInfo>
          This information will not be publicly available. Verify your age, even if this account is
          for a company, home kitchen, etc.
        </StyledFormSignUpInfo>
        <StyledFormSignUpBtn type="submit">Create</StyledFormSignUpBtn>
      </StyledFormSignUp>
    </StyledFormSignUpWrapper>
  );
};

export { FormSignUp };
