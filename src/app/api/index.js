import patchnotes from "./fake.api/patchnotes.api";
import artworks from "./fake.api/artworks.api";
import artists from "./fake.api/artists.api";
import screenshots from "./fake.api/screenshots.api";

const webApi = "https://localhost:81";

const API = {
  patchnotes,
  artworks,
  artists,
  screenshots,
  webApi() {
    return webApi;
  },
};

export default API;
