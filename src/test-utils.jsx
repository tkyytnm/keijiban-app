import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

function render(
  ui,
  { route = "/" } = {},
  { preloadedState, stores = store, ...renderOptions } = {}
) {
  window.history.pushState({}, "", route);
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={stores}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
