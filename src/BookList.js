import React from 'react';
import { List, Datagrid, TextField, Pagination } from 'react-admin';
import BookFilter from './BookFilter';

const BookList = props => (
    <List filters={<BookFilter />} {...props} pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}>
        <Datagrid rowClick="edit">
            <TextField source="ratings_average" label="Ratings Average" sortable />
            <TextField source="author_name" label="Author Name" sortable />
            <TextField source="title" label="Title" sortable />
            <TextField source="first_publish_year" label="First Publish Year" sortable />
            <TextField source="subject" label="Subject" sortable />
            <TextField source="author_birth_date" label="Author Birth Date" sortable />
            <TextField source="author_top_work" label="Author Top Work" sortable />
        </Datagrid>
    </List>
);

export default BookList;
