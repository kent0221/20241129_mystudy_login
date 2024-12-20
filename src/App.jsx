/**
 * App.jsx
 * 
 * 全体のトップに当たるコンポーネント
 * Context管理を利用できるように、ここでProviderを設定する
 */
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import { SnackbarProvider } from './providers/SnackbarProvider';
import { LoginUserProvider } from './providers/LogInUserProvider';


function App() {
  return (
    <LoginUserProvider>
      <SnackbarProvider>
        <BrowserRouter>
          <CssBaseline/>
          <Router/>
        </BrowserRouter>
      </SnackbarProvider>
    </LoginUserProvider>
  );
}

export default App;
