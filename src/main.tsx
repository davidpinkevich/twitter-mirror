import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { persistor, store } from 'data/store';
import { GlobalStyles } from 'styles/GlobalStyles';
import { myTheme } from 'styles/myTheme';

import { App } from 'components/App/App';
import { ErrorBoundary } from 'components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <GlobalStyles />
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
