import React from "react";
import "./book-list-item.css";

function BookListItem({ book, onAddedToCart }) {
  const { title, author, price, coverImage, description } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          type="button"
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart"
        >
          Add to cart
        </button>
      </div>
      <div className="description">
        <h4>The book description:</h4>
        {description}
      </div>
    </div>
  );
}

export default BookListItem;
