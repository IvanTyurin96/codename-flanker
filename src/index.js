import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { setSortedArtworks } from "./redux/actions";
import { shuffleArray } from "./app/utils/shuffleArray";
import App from "./App";

const store = createStore(rootReducer);

const sortedArtworks = store.getState().sortedArtworks;
store.dispatch(setSortedArtworks(shuffleArray(sortedArtworks)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter basename="codename-flanker/#">
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
