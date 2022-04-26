import React, {Component} from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import {withBookstoreService} from '../hoc';
import './book-list.css'
import {booksLoaded} from '../../actions';
import {compose} from "../../utils";

class BookList extends Component {


    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    };

    render() {
        const {books} = this.props;
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
        books: state.books  // {books}
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

