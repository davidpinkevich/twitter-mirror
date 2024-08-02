import { Outlet } from 'react-router-dom';

import { StyledLayout } from './styled';

const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
};

export { Layout };
