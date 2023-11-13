import React, { useState, useEffect } from "react";
import Patchnote from "../components/patchnote";
import LoadingSpinner from "../components/loadingSpinner";
import { fetchApi } from "../utils/apiFetcher";
import { Link } from "react-router-dom";

const Patchnotes = ({ match }) => {
  const [patchnoteId, setPatchnoteId] = useState(parseInt(match.params.patchnoteId));

  const [patchnotes, setPatchnotes] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  function show() {
    if (fetchError === null) {
      return renderData();
    } else {
      return renderError();
    }
  }

  function getPatchnoteId() {
    if (patchnoteId !== null && Number.isInteger(patchnoteId)) {
      return patchnoteId;
    } else {
      return patchnotes.length;
    }
  }

  function renderData() {
    if (patchnotes.length > 0) {
      return (
        <div className="patchnotes d-flex pt-3">
          <div>
            <ul className="patchnotes-list border border-dark p-2 m-0">
              {patchnotes.map((patchnote) => {
                return (
                  <li key={patchnote.id}>
                    <Link
                      to={`/patchnotes/${patchnote.id}`}
                      onClick={() => {
                        setPatchnoteId(patchnote.id);
                      }}
                    >
                      {patchnote.version}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Patchnote id={getPatchnoteId()} patchnotes={patchnotes} />
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
    return <div className="error">{fetchError.toString()}</div>;
  }

  useEffect(() => {
    fetchApi("v1/patchnotes", setPatchnotes, setFetchError);
  }, []);

  return <>{show()}</>;
};

export default Patchnotes;
