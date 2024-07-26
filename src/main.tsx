import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { myTheme } from 'styles/myTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
