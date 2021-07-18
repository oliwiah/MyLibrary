import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from '../requests/BooksAPI';
import { Search } from './Search';
import { BookList } from './BookList';
import '../styles/App.css';

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({ books }));
    }

    changeShelf = (currBook, shelf) => {
        BooksAPI.update(currBook, shelf).then((response) => {
            currBook.shelf = shelf;
            this.setState((prevState) => ({
                books: prevState.books.filter((book) => book.id !== currBook.id).concat(currBook),
            }));
        });
    };

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route path="/search" render={() => <Search />} />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <div className="list-books">
                                    <div className="list-books-title">
                                        <h1>MyReads</h1>
                                    </div>
                                    <BookList
                                        books={this.state.books}
                                        changeShelf={this.changeShelf}
                                    />
                                    <div className="open-search">
                                        <button>Search a book</button>
                                    </div>
                                </div>
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default BooksApp;
