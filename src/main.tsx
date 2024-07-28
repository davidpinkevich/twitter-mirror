import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { myTheme } from 'styles/myTheme';

import { App } from 'components/App/App';

import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
