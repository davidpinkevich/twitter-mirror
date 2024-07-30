import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { serviceAuthentication } from 'services/auth';
import { serviceCollections } from 'services/collections';
import { ERRORS, Paths, PATTERNS } from 'constants/index';
import { checkDate } from 'utils/checkDate';
import { useAppDispatch } from 'hooks/useRedux';
import twitter from 'assets/icons/twitter.svg';
import { changeUID } from 'data/slices/sliceMemory';
import { StyledButton, StyledError,StyledInput } from 'styles/generalStyles';
import { type TypesFormSignUp } from 'types';

import { DateFilters } from 'components/DateFilters';
import { Loading } from 'components/Loading';

import {
  StyledErrorExist,
  StyledFormSignUp,
  StyledFormSignUpImg,
  StyledFormSignUpLink,
  StyledFormSignUpTitle,
  StyledFormSignUpWrapper,
  StyledSignUp,
} from './styled';

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypesFormSignUp>({});

  const dispatch = useAppDispatch();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState({ month: '', day: '', year: '' });
  const [dateError, setDateError] = useState(false);

  const submitValid: SubmitHandler<TypesFormSignUp> = async (data) => {
    try {
      if (checkDate(date)) {
        setError(false);
        setDateError(false);
        setLoading(true);
        const user = await serviceAuthentication.createUser(data.email, data.password);
        dispatch(changeUID(user.uid));
        await serviceCollections.addUserWithEmail(user.uid, data, date);
        setLoading(false);
      } else {
        setDateError(true);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <StyledSignUp>
      <StyledFormSignUpWrapper>
        <StyledFormSignUpImg src={twitter} alt="logo" />
        <StyledFormSignUpTitle>Create an account</StyledFormSignUpTitle>
        {error && <StyledErrorExist>This account already exists</StyledErrorExist>}
        <StyledFormSignUp onSubmit={handleSubmit(submitValid)}>
          <StyledInput disabled={loading} placeholder="Name" {...register('name', PATTERNS.name)} />
          {errors.name?.type && (
            <StyledError>{ERRORS.name[errors.name?.type as keyof typeof ERRORS.name]}</StyledError>
          )}
          <StyledInput
            disabled={loading}
            type="number"
            placeholder="Phone number"
            {...register('phone', PATTERNS.number)}
          />
          {errors.phone?.type && (
            <StyledError>
              {ERRORS.phone[errors.phone?.type as keyof typeof ERRORS.phone]}
            </StyledError>
          )}
          <StyledInput
            disabled={loading}
            placeholder="Email"
            {...register('email', PATTERNS.email)}
          />
          {errors.email?.type && (
            <StyledError>
              {ERRORS.email[errors.email?.type as keyof typeof ERRORS.email]}
            </StyledError>
          )}
          <StyledInput
            disabled={loading}
            placeholder="Password"
            type="password"
            {...register('password', PATTERNS.pass)}
          />
          {errors.password?.type && (
            <StyledError>
              {ERRORS.password[errors.password?.type as keyof typeof ERRORS.password]}
            </StyledError>
          )}
          <StyledInput
            disabled={loading}
            placeholder="Repeat password"
            type="password"
            {...register('repeatPass', {
              ...PATTERNS.repeatPass,
              validate: (value: string) => value === watch('password'),
            })}
          />
          {errors.repeatPass?.type && (
            <StyledError>
              {ERRORS.repeatPass[errors.repeatPass?.type as keyof typeof ERRORS.repeatPass]}
            </StyledError>
          )}
          <Link to={Paths.base}>
            <StyledFormSignUpLink>Use email</StyledFormSignUpLink>
          </Link>
          <DateFilters date={date} setDate={setDate} disabled={loading} />
          {dateError && <StyledError>This field is required</StyledError>}
          <StyledButton disabled={loading} type="submit">
            {loading ? <Loading text="Send" /> : 'Create'}
          </StyledButton>
        </StyledFormSignUp>
      </StyledFormSignUpWrapper>
    </StyledSignUp>
  );
};

export { SignUp };
