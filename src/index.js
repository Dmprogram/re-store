import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-context";

import store from "./store";

const bookStoreService = new BookstoreService();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <App />
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
