import { Route, Routes } from 'react-router-dom';

import { Paths } from 'constants/index';

import { Home } from 'pages/Home';
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
        <Profile />
      </ProtectedRoute>
    ),
  },
];

function App() {
  return (
    <StyledApp>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </StyledApp>
  );
}

export { App };
