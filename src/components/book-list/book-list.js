import React, {Component} from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import {withBookstoreService} from '../hoc';
import './book-list.css'
import {fetchBooks} from '../../actions';
import {compose} from "../../utils";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const BookList = ({books}) => {
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
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} />

    }
};



const mapStateToProps = (state) => { //({books})
    return {
        books: state.books,
        loading: state.loading,
        error: state.error  // {books}
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};
    
    
    // booksLoaded,
    // booksRequested,
    // booksError

    // return bindActionCreators({
    //     booksLoaded,
    // }, dispatch);
    

    // return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks));
    //     }


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

