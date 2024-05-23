import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

const BookEdit = props => (
    <Edit {...props}>

        <SimpleForm>
        <UserButton />
            <TextInput source="title" label="Title" />
            <TextInput source="author_name" label="Author Name" />
            <NumberInput source="ratings_average" label="Ratings Average" />
            <NumberInput source="first_publish_year" label="First Publish Year" />
            <TextInput source="subject" label="Subject" />
            <TextInput source="author_birth_date" label="Author Birth Date" />
            <TextInput source="author_top_work" label="Author Top Work" />
        </SimpleForm>
    </Edit>
);

export default BookEdit;
