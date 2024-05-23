import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import BookList from './BookList';
import dataProvider from './dataProvider';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

const App = () => (
    <Admin dataProvider={dataProvider}>
        
        <Resource name="books" list={BookList} />
    </Admin>
);

export default App;
