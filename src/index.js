/**
 * 동영상 강좌
 * https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp&index=33
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
