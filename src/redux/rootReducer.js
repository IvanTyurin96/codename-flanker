import { combineReducers } from "redux";
import { SET_WINDOW_WIDTH, SET_SORTED_ARTWORKS, SET_PATCHNOTES } from "./types";

function windowWidth(state = window.innerWidth, action) {
  if (action.type === SET_WINDOW_WIDTH) {
    return (state = action.windowWidth);
  }

  return state;
}

function screenCollapseWidth(state = 720) {
  return state;
}

function sortedArtworks(state = [], action) {
  if (action.type === SET_SORTED_ARTWORKS) {
    return (state = action.sortedArtworks);
  }
  return state;
}

function patchnotes(state = [], action) {
  if (action.type === SET_PATCHNOTES) {
    return (state = action.patchnotes);
  }
  return state;
}

export const rootReducer = combineReducers({
  windowWidth: windowWidth,
  screenCollapseWidth: screenCollapseWidth,
  sortedArtworks: sortedArtworks,
  patchnotes: patchnotes,
});
