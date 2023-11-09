import api from "../api";
import React, { useState, useEffect } from "react";
import Patchnote from "../components/patchnote";

const Patchnotes = ({ match }) => {
  const patchnoteId = match.params.patchnoteId;
  console.log(patchnoteId);

  const [patchnotes, setPatchnotes] = useState([]);
  const [page, setPage] = useState(3);

  useEffect(() => {
    fetch(`${api.webApi()}/v1/patchnotes`)
      .then((response) => response.json())
      .then((data) => setPatchnotes(data));
  }, []);

  if (patchnotes.length > 0) {
    return (
      <div className="patchnotes d-flex pt-3">
        <div>
          <ul className="patchnotes-list border border-dark p-2 m-0">
            {patchnotes.map((patchnote) => {
              return (
                <li key={patchnote.id}>
                  <a href="/patchnotes" className="link-primary" onClick={() => setPage(patchnote.id)}>
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
    return <div className="patchnotes d-flex pt-3">Loading...</div>;
  }
};

export default Patchnotes;
