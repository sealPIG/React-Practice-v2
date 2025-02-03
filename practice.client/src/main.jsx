/**
 * ？ hook
 * ✓ 生命週期
 * ✕ redux-saga
 * ？ jotai
 * ✕ tanskack-query
 * 
 * ✓ useffect
 * ✓ usestate 
 * ✓ props 傳遞
 */

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Application from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Application />
    </Provider>
  </BrowserRouter>
);
