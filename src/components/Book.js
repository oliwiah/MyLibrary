import React from 'react';
import { ShelfChanger } from './ShelfChanger';
import emptyCover from '../images/emptyCover.png';

export const Book = (props) => {
    const { book, books, changeShelf, id } = props;
    const bookCover =
        book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : emptyCover;
    const bookTitle = book.title ? book.title : 'Title not Available';

    return (
        <li key={id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${bookCover})`,
                        }}
                    />
                    <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
                </div>
                <div className="book-title">{bookTitle}</div>
                {book.authors &&
                    book.authors.map((author, id) => (
                        <div className="book-authors" key={id}>
                            {author}
                        </div>
                    ))}
            </div>
        </li>
    );
};
