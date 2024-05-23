import axios from 'axios';

const apiUrl = 'https://openlibrary.org';

const dataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const { q: query } = params.filter;

        const url = `${apiUrl}/search.json?q=${query}&page=${page}&limit=${perPage}`;

        try {
            const response = await axios.get(url);
            const books = response.data.docs;

            // Sort the data manually since the API doesn't support sorting directly
            const sortedBooks = books.sort((a, b) => {
                if (order === 'ASC') {
                    return a[field] > b[field] ? 1 : -1;
                } else {
                    return a[field] < b[field] ? 1 : -1;
                }
            });

            return {
                data: sortedBooks.map((book, index) => ({
                    id: book.key || index, // Use book.key if available, otherwise use index
                    ratings_average: book.ratings_average || 'N/A',
                    author_name: book.author_name ? book.author_name.join(', ') : 'N/A',
                    title: book.title,
                    first_publish_year: book.first_publish_year || 'N/A',
                    subject: book.subject ? book.subject.join(', ') : 'N/A',
                    author_birth_date: book.author_birth_date || 'N/A',
                    author_top_work: book.author_top_work || 'N/A',
                })),
                total: response.data.numFound,
            };
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
            throw new Error('Error fetching data');
        }
    },
    getOne: async (resource, params) => {
        // Mock implementation
        const url = `${apiUrl}/search.json?q=${params.id}`;
        try {
            const response = await axios.get(url);
            const book = response.data.docs[0];
            return {
                data: {
                    id: params.id,
                    ratings_average: book.ratings_average || 'N/A',
                    author_name: book.author_name ? book.author_name.join(', ') : 'N/A',
                    title: book.title,
                    first_publish_year: book.first_publish_year || 'N/A',
                    subject: book.subject ? book.subject.join(', ') : 'N/A',
                    author_birth_date: book.author_birth_date || 'N/A',
                    author_top_work: book.author_top_work || 'N/A',
                }
            };
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
            throw new Error('Error fetching data');
        }
    },
    update: async (resource, params) => {
        // Mock implementation
        return { data: params.data };
    },
    // Other methods (getMany, getManyReference, create, delete) can be implemented similarly
};

export default dataProvider;
