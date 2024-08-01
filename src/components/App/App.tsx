import { Route, Routes } from 'react-router-dom';

import { Paths } from 'constants/index';
import { useAppSelector } from 'hooks/useRedux';
import { getTheme } from 'data/slices/sliceMemory';

import { Home } from 'pages/Home';
import { Layout } from 'pages/Layout';
import { LogIn } from 'pages/LogIn';
import { Profile } from 'pages/Profile';
import { SignUp } from 'pages/SignUp';
import { ProtectedRoute } from 'components/ProtectedRoute';

import { StyledApp } from './styled';

const routes = [
  {
    path: Paths.base,
    element: (
      <ProtectedRoute path={Paths.profile}>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: Paths.signup,
    element: (
      <ProtectedRoute path={Paths.profile}>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: Paths.login,
    element: (
      <ProtectedRoute path={Paths.profile}>
        <LogIn />
      </ProtectedRoute>
    ),
  },
  {
    path: Paths.profile,
    element: (
      <ProtectedRoute path={Paths.base}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Profile />,
      },
    ],
  },
  {
    path: Paths.feed,
    element: (
      <ProtectedRoute path={Paths.base}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <div>feed</div>,
      },
    ],
  },
];

function App() {
  const theme = useAppSelector(getTheme);

  return (
    <StyledApp $themeType={theme}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, childIndex) => (
                <Route key={childIndex} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>
    </StyledApp>
  );
}

export { App };
