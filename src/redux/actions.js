import { SET_WINDOW_WIDTH, SET_SORTED_ARTWORKS, SET_PATCHNOTES } from "./types";

export function setWindowWidth(windowWidth) {
  return {
    type: SET_WINDOW_WIDTH,
    windowWidth: windowWidth,
  };
}

export function setSortedArtworks(sortedArtworks) {
  return {
    type: SET_SORTED_ARTWORKS,
    sortedArtworks: sortedArtworks,
  };
}

export function setPatchnotes(patchnotes) {
  return {
    type: SET_PATCHNOTES,
    patchnotes: patchnotes,
  };
}
