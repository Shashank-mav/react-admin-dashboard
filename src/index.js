import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const frontendApi = 'pk_test_Zmlyc3QtcXVhaWwtNDguY2xlcmsuYWNjb3VudHMuZGV2JA';

console.log('Clerk Frontend API Key:', frontendApi); // Add this line for debugging

if (!frontendApi) {
  throw new Error("Missing Clerk Frontend API Key");
}

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_FRONTEND_API}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
