import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QueryProvider from "./queryFunction/QueryProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
