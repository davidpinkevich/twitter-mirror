import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { serviceCollections } from 'services/collections';
import { ERRORS, GENDERS, PATTERNS, ThemeMode } from 'constants/index';
import { useAppSelector } from 'hooks/useRedux';
import crossGray from 'assets/icons/cross-gray.svg';
import crossWhite from 'assets/icons/cross-white.svg';
import { getTheme } from 'data/slices/sliceMemory';
import { StyledError, StyledInput } from 'styles/generalStyles';
import { type PropsUserModal, type TypesFormModal } from 'types';

import { Loading } from 'components/Loading';

import { StyledUserModal } from './styled';
import {
  StyledInputFile,
  StyledInputFileLabel,
  StyledInputFileSpan,
  StyledModalClouse,
  StyledModalClouseImg,
  StyledModalSelect,
  StyledModalSelectItem,
  StyledUserButton,
  StyledUserForm,
  StyledUserModalWrap,
  StyledUserTitle,
} from './styled';

const UserModal: React.FC<PropsUserModal> = ({ user, changeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypesFormModal>({
    defaultValues: {
      name: user?.name,
      secondName: user?.secondName ?? '',
      linkTG: user?.linkTG,
    },
  });

  const theme = useAppSelector(getTheme);

  const [gender, setGender] = useState(user?.gender ?? 'secret');

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const submitValid: SubmitHandler<TypesFormModal> = async (data) => {
    try {
      setLoading(true);
      if (file && user.uid) {
        await serviceCollections.updateAvatar(user, data, gender, user.uid, file);
      } else if (!file && user.uid) {
        await serviceCollections.updateProfile(user, data, gender, user.uid);
      }
      setLoading(false);
      changeModal();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <StyledUserModalWrap>
      <StyledUserModal $typeTheme={theme}>
        <StyledModalClouse type="button" onClick={changeModal}>
          <StyledModalClouseImg
            src={theme === ThemeMode.WHITE ? crossGray : crossWhite}
            alt="cross"
          />
        </StyledModalClouse>
        <StyledUserTitle>Change profile</StyledUserTitle>
        <StyledUserForm onSubmit={handleSubmit(submitValid)}>
          <StyledInput disabled={loading} placeholder="Name" {...register('name', PATTERNS.name)} />
          {errors.name?.type && (
            <StyledError>{ERRORS.name[errors.name?.type as keyof typeof ERRORS.name]}</StyledError>
          )}
          <StyledInput
            disabled={loading}
            type="text"
            placeholder="Second name"
            {...register('secondName', { ...PATTERNS.name, required: false })}
          />
          {errors.secondName?.type && (
            <StyledError>
              {ERRORS.name[errors.secondName?.type as keyof typeof ERRORS.name]}
            </StyledError>
          )}
          <StyledInput
            disabled={loading}
            type="password"
            placeholder="New password"
            {...register('password', { ...PATTERNS.pass, required: false })}
          />
          {errors.password?.type && (
            <StyledError>
              {ERRORS.password[errors.password?.type as keyof typeof ERRORS.password]}
            </StyledError>
          )}
          <StyledInput
            disabled={loading}
            placeholder="Link for telegram"
            {...register('linkTG', PATTERNS.linkTG)}
          />
          {errors.linkTG?.type && (
            <StyledError>
              {ERRORS.linkTG[errors.linkTG?.type as keyof typeof ERRORS.linkTG]}
            </StyledError>
          )}
          <StyledModalSelect $disabled={loading}>
            {GENDERS.map((item) => {
              return (
                <StyledModalSelectItem
                  $target={item === gender}
                  key={item}
                  onClick={() => setGender(item)}
                >
                  {item}
                </StyledModalSelectItem>
              );
            })}
          </StyledModalSelect>
          <StyledInputFileLabel>
            <StyledInputFile
              type="file"
              accept="image/*"
              multiple={false}
              onChange={handleFileChange}
            />
            <StyledInputFileSpan $disabled={loading}>
              {file ? file.name : 'Change avatar'}
            </StyledInputFileSpan>
          </StyledInputFileLabel>
          <StyledUserButton disabled={loading} type="submit">
            {loading ? <Loading text="Updating" /> : 'Update'}
          </StyledUserButton>
        </StyledUserForm>
      </StyledUserModal>
    </StyledUserModalWrap>
  );
};

export { UserModal };
