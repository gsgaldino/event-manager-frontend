import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'components/CustomToast';
import Routes from './routes';
import { store } from './store';

import { GlobalStyles } from './styles/globals';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);

export default App;
