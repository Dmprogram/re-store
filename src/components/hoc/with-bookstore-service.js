import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

const withBookstoreService = () => (Wrapped) =>
  // eslint-disable-next-line func-names
  function (props) {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => (
          <Wrapped {...props} bookstoreService={bookstoreService} />
        )}
      </BookstoreServiceConsumer>
    );
  };

export default withBookstoreService;
