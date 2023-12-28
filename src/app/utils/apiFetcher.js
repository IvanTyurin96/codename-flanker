import webApi from "../api";

export function fetchApi(path, callbackDataHook, callbackErrorHook) {
  fetch(`${webApi}/${path}`)
    .then((response) => {
      if (response.ok) {
        callbackErrorHook(null);
        return response.json();
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    })
    .then((data) => callbackDataHook(data))
    .catch((error) => {
      callbackErrorHook(error);
    });
}
