import updateBookList from "./book-list";
import updateCart from "./cart";

const reducer = (state, action) => ({
  bookList: updateBookList(state, action),
  cart: updateCart(state, action),
});

export default reducer;
