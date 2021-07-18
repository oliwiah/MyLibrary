import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as BooksAPI from '../requests/BooksAPI';
import { Search } from './Search';
import { BookList } from './BookList';
import { PageNotFound } from './PageNotFound';
import { Loader } from './Loader';
import '../styles/App.css';

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    // componentDidMount is deprecated but in order to use hooks,
    // I would need to upgrade React version and I did not know
    // whether it is acceptable
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
        const { books } = this.state;

        return (
            <div className="app">
                {books.length ? (
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
                                        <BookList books={books} changeShelf={this.changeShelf} />
                                        <div className="open-search">
                                            <button>Search a book</button>
                                        </div>
                                    </div>
                                )}
                            />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default BooksApp;
