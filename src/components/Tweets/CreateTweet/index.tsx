import { ChangeEvent, useState } from 'react';

import { serviceCollections } from 'services/collections';
import addImage from 'assets/icons/add-image.svg';
import cross from 'assets/icons/cross-blue.svg';
import plug from 'assets/images/plug.svg';
import { type PropsCreateTweet } from 'types';

import { Loading } from 'components/Loading';

import {
  StyledCreateEdit,
  StyledCreateTweet,
  StyledCreateTweetAvatar,
  StyledCreateTweetAvatarWrap,
  StyledCreateTweetBtn,
  StyledCreateTweetButtons,
  StyledCreateTweetButtonsFile,
  StyledCreateTweetTextarea,
  StyledCreateTweetViewImage,
  StyledDeleteImage,
  StyledInputFile,
  StyledInputFileImage,
  StyledInputFileLabel,
} from './styled';

const CreateTweet: React.FC<PropsCreateTweet> = ({ user, uid }) => {
  const [value, setValue] = useState('');

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleChangeTextara = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleCreate = async () => {
    try {
      setLoading(true);
      await serviceCollections.createTweet(user, uid, value, file);
      setFile(null);
      setValue('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
  };

  return (
    <StyledCreateTweet>
      <StyledCreateTweetAvatarWrap>
        <StyledCreateTweetAvatar src={user.photo ? user.photo : plug} alt="avatar" />
      </StyledCreateTweetAvatarWrap>
      <StyledCreateEdit>
        <StyledCreateTweetTextarea
          value={value}
          disabled={loading}
          onChange={handleChangeTextara}
          placeholder="What’s happening"
        />
        <StyledCreateTweetButtons>
          <StyledCreateTweetButtonsFile>
            <StyledInputFileLabel>
              <StyledInputFile
                type="file"
                accept="image/*"
                disabled={loading}
                multiple={false}
                onChange={handleFileChange}
              />
              <StyledInputFileImage src={addImage} />
            </StyledInputFileLabel>
            {file && <StyledCreateTweetViewImage src={URL.createObjectURL(file)} />}
            {file && (
              <StyledDeleteImage
                $disabled={loading}
                src={cross}
                alt="cross"
                onClick={handleFileDelete}
              />
            )}
          </StyledCreateTweetButtonsFile>
          <StyledCreateTweetBtn disabled={!value.length || loading} onClick={handleCreate}>
            {loading ? <Loading text="Create" /> : 'Tweet'}
          </StyledCreateTweetBtn>
        </StyledCreateTweetButtons>
      </StyledCreateEdit>
    </StyledCreateTweet>
  );
};

export { CreateTweet };
