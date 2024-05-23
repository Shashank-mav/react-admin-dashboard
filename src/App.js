import React from 'react';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';
import { Admin, Resource } from 'react-admin';
import BookList from './BookList';
import BookEdit from './BookEdit';
import dataProvider from './dataProvider';
import CustomSignInPage from './CustomSignInPage';
import { MyLayout } from './MyLayout';

const App = () => {
  const { signOut } = useClerk();

  return (
    <>
      <SignedOut>
        <CustomSignInPage />
      </SignedOut>
      <SignedIn>
        <div style={styles.appContainer}>
          <header style={styles.header}>
            <div style={styles.headerContent}>
              <div style={styles.userActions}>


              </div>
            </div>
          </header>
          <main style={styles.mainContent}>

            <Admin layout={MyLayout} dataProvider={dataProvider}>

              <Resource  name="books" list={BookList} edit={BookEdit} />
            </Admin>
          </main>
        </div>
      </SignedIn>
    </>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    overflowX: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#1a73e8',
    color: 'white',
  },
  headerContent: {

    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    height:"10vh"
  },
  userActions: {


  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   
    width: '100%',
  },
};

export default App;
