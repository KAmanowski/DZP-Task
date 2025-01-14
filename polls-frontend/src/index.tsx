import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './pages/MainVote';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
