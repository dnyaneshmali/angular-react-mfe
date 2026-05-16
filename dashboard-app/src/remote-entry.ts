import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const mount = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(App));
    
    return () => root.unmount();
  }
};
