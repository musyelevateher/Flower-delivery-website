import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 🔇 Suppress Stripe wallet-config 401 error in console (only in development)
if (process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("wallet-config") &&
      args[0].includes("401")
    ) {
      return; // ignore Stripe wallet-config 401
    }
    originalConsoleError(...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("You may test your Stripe.js integration over HTTP")
    ) {
      return; // ignore Stripe HTTPS warning
    }
    originalConsoleWarn(...args);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
