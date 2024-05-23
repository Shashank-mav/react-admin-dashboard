import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const CustomSignInPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeBox}>
        <h1 style={styles.title}>Welcome to Admin Dashboard</h1>
        <p style={styles.subtitle}>Please sign in to continue</p>
      </div>
      <div style={styles.signInBox}>
        <SignIn  />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150vh',
    background: 'linear-gradient(135deg, #6b73ff 10%, #000dff 100%)',
    color: '#fff',
    padding: '2rem',
  },
  welcomeBox: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '0.5rem',
  },
  signInBox: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
};

export default CustomSignInPage;
