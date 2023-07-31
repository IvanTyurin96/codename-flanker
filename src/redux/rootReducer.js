import { combineReducers } from "redux";
import { SET_WINDOW_WIDTH, SET_SORTED_ARTWORKS } from "./types";
import api from "../app/api";

function windowWidth(state = window.innerWidth, action) {
  if (action.type === SET_WINDOW_WIDTH) {
    return (state = action.windowWidth);
  }

  return state;
}

function screenCollapseWidth(state = 720) {
  return state;
}

function sortedArtworks(state = api.artworks.fetchAll(), action) {
  if (action.type === SET_SORTED_ARTWORKS) {
    return (state = action.sortedArtworks);
  }
  return state;
}

export const rootReducer = combineReducers({
  windowWidth: windowWidth,
  screenCollapseWidth: screenCollapseWidth,
  sortedArtworks: sortedArtworks,
});
