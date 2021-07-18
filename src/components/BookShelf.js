import React from 'react';
import { Book } from './Book';

export const BookShelf = (props) => {
    const { books, changeShelf } = props;

    return (
        <ol className="books-grid">
            {books.map((book, id) => (
                <Book book={book} books={books} changeShelf={changeShelf} key={id} />
            ))}
        </ol>
    );
};
