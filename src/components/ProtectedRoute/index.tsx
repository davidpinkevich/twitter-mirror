import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from 'constants/index';
import { useAppSelector } from 'hooks/useRedux';
import { getUID } from 'data/slices/sliceMemory';

type ProtectedRouteProps = {
  children: ReactNode;
  path: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, path }) => {
  const isLoggedIn = useAppSelector(getUID);

  if (!!isLoggedIn && path === Paths.profile) {
    return <Navigate to={`/${path}`} replace />;
  } else if (!isLoggedIn && path === Paths.base) {
    return <Navigate to={path} replace />;
  }

  return <>{children}</>;
};

export { ProtectedRoute };
