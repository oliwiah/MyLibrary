import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../requests/BooksAPI';
import { Book } from './Book';

export class Search extends React.Component {
    state = {
        searchValue: '',
        searchResults: [],
        emptySearch: false,
    };

    getBook = (event) => {
        const searchValue = event.target.value;
        this.setState({ searchValue });

        if (searchValue) {
            BooksAPI.search(searchValue.trim()).then((books) => {
                books.length > 0
                    ? this.setState({
                          searchResults: books,
                          emptySearch: false,
                      })
                    : this.setState({
                          searchResults: [],
                          emptySearch: true,
                      });
            });
        } else {
            this.setState({
                searchResults: [],
                emptySearch: true,
            });
        }
    };

    render() {
        const { books, changeShelf } = this.props;
        const { searchValue, searchResults, emptySearch } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={searchValue}
                            onChange={this.getBook}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {searchResults && (
                        <ol className="books-grid">
                            {searchResults.map((book, id) => (
                                <Book
                                    book={book}
                                    books={books}
                                    changeShelf={changeShelf}
                                    key={book.id}
                                />
                            ))}
                        </ol>
                    )}
                    {emptySearch && <h3>We do not have the book which matches these criteria</h3>}
                </div>
            </div>
        );
    }
}
