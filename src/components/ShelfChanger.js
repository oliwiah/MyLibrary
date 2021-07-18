import React from 'react';

export const ShelfChanger = (props) => {
    const { book, books, changeShelf } = props;

    const onShelfChange = (event) => changeShelf(book, event.target.value);

    let currShelf = 'none';

    for (let element of books) {
        if (element.id === book.id) {
            currShelf = element.shelf;
            break;
        }
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={onShelfChange} defaultValue={currShelf}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};
