import React from 'react';
import { Filter, TextInput } from 'react-admin';

const BookFilter = props => (
    <Filter {...props}>
        <TextInput label="Search by Author" source="q" alwaysOn />
    </Filter>
);

export default BookFilter;
