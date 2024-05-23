import React from 'react';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import CustomSignInPage from './CustomSignInPage';

const frontendApi = 'pk_test_Zmlyc3QtcXVhaWwtNDguY2xlcmsuYWNjb3VudHMuZGV2JA';

const ClerkWrapper = () => {
  return (
    <ClerkProvider frontendApi={frontendApi}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<CustomSignInPage />} />
          <Route
            path="*"
            element={
              <>
                <SignedIn>
                  <App />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default ClerkWrapper;
