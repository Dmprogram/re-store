const booksRequested = () => ({
  type: "FETCH_BOOKS_REQUEST",
});

const booksLoaded = (newBooks) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload: newBooks,
});

const booksError = (error) => ({
  type: "FETCH_BOOKS_FAILURE",
  payload: error,
});

const bookAddedToCart = (bookId) => ({
  type: "BOOK_ADDED_TO_CART",
  payload: bookId,
});

const bookDecrease = (bookId) => ({
  type: "BOOK_DECREASE",
  payload: bookId,
});

const bookDelete = (bookId) => ({
  type: "BOOK_DELETE",
  payload: bookId,
});

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks, bookAddedToCart, bookDecrease, bookDelete };
