import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendBaseTheme} from '@chakra-ui/react';
import App from './App';
import './index.css';

import twygoTheme from './components/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={twygoTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);