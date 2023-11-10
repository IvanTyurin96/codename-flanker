import React, { useState, useEffect } from "react";
import Patchnote from "../components/patchnote";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher"


const Patchnotes = ({ match }) => {
  const patchnoteId = match.params.patchnoteId;
  console.log(patchnoteId === null);

  const [patchnotes, setPatchnotes] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [page, setPage] = useState(3);

  function show() {
    if(fetchError === null) {
      return renderData();
    } else {
      return renderError();
    }
  }

  function renderData() {
    if(patchnotes.length > 0) {
      return (
        <div className="patchnotes d-flex pt-3">
          <div>
            <ul className="patchnotes-list border border-dark p-2 m-0">
              {patchnotes.map((patchnote) => {
                return (
                  <li key={patchnote.id}>
                    <a href={`/patchnotes/${patchnote.id}`} className="link-primary" onClick={() => setPage(patchnote.id)}>
                      {patchnote.version}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Patchnote id={page} patchnotes={patchnotes} />
        </div>
      );
    } else {
      return (
        <div className="patchnotes pt-3">
          <div className="d-flex flex-column align-items-center">
            <LoadingSpinner />
          </div>
        </div>
      );
    }
  }

  function renderError() {
    return (
      <div className="error">{fetchError.toString()}</div>
    );
  }

  useEffect(() => {
    fetchApi("v1/patchnotes", setPatchnotes, setFetchError);
  }, []);

  return (
    <>
      {show()}
    </>
  );
};

export default Patchnotes;
