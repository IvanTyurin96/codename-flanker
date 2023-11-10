import api from "../api";

export function fetchApi(path, callbackDataHook, callbackErrorHook) {
    fetch(`${api.webApi()}/${path}`)
    .then((response) => {
      if(response.ok) {
        callbackErrorHook(null);
        return response.json();
      }
      throw new Error(response.status)
    })
    .then((data) => callbackDataHook(data))
    .catch((error) => {
        callbackErrorHook(error);
    });
}