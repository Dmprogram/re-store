import React, {Component} from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import {withBookstoreService} from '../hoc';
import './book-list.css'
import {booksLoaded} from '../../actions';
import {compose} from "../../utils";
import Spinner from '../spinner';

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, booksLoaded} = this.props;
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;
        if (loading) {
            return <Spinner />;
        }
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
};

const mapStateToProps = (state) => { //({books})
    return {
        books: state.books,
        loading: state.loading  // {books}
    };
};

const mapDispatchToProps = {

    booksLoaded

    // return bindActionCreators({
    //     booksLoaded,
    // }, dispatch);
    

    // return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks));
    //     }
    // };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

