const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, quantity, item = {}) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    totalBookPrice = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    totalBookPrice: totalBookPrice + quantity * book.price,
  };
};

const total = (items, prop) => {
  const arrTotal = items.map((el) => el[prop]);
  return arrTotal.reduce((sum, cur) => sum + cur, 0);
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    cart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, quantity, item);
  const items = updateCartItems(cartItems, newItem, itemIndex);

  return {
    cartItems: items,
    orderTotal: total(items, "totalBookPrice"),
    quantityTotal: total(items, "count"),
  };
};

const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      quantityTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_DECREASE":
      return updateOrder(state, action.payload, -1);

    case "BOOK_DELETE": {
      const item = state.cart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    }

    default:
      return state.cart;
  }
};

export default updateCart;
