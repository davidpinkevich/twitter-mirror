import { useAppSelector } from 'hooks/useRedux';
import { getTheme } from 'data/slices/sliceMemory';
import { PropsEditButton } from 'types';

import { StyledEditButton } from './styled';

const EditButton: React.FC<PropsEditButton> = ({ changeModal }) => {
  const theme = useAppSelector(getTheme);

  return (
    <StyledEditButton onClick={changeModal} $themeType={theme}>
      Edit Profile
    </StyledEditButton>
  );
};

export { EditButton };
