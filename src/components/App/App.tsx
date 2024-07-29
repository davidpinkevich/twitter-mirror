import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
import { LogIn } from 'pages/LogIn';
import { SignUp } from 'pages/SignUp';

import { StyledApp } from './styled';

const routes = [
  { path: '/', element: <Home /> },
  { path: 'signup', element: <SignUp /> },
  { path: 'login', element: <LogIn /> },
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
