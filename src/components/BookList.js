import React from 'react';
import { BookShelf } from './BookShelf';

export const BookList = (props) => {
    const { books, changeShelf } = props;
    const shelves = [
        { name: 'currentlyReading', title: 'Currently Reading' },
        { name: 'wannaread', title: 'Want to Read' },
        { name: 'read', title: 'Read' },
    ];

    return (
        <div className="list-books-content">
            {shelves.map((shelf, id) => {
                return (
                    <div className="bookshelf" key={id}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <BookShelf books={books} changeShelf={changeShelf} key={id} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
