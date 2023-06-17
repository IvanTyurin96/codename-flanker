import api from "../api";
import React, { useState } from "react";
import Patch from "../components/patch";

const Patchnotes = () => {
  const patchnotes = api.patchnotes.fetchAll();

  const [page, setPage] = useState(patchnotes[0]._id);
  return (
    <div className="patchnotes d-flex pt-3">
      <div>
        <ul className="patchnotes-list border border-dark p-2 m-0">
          {patchnotes.map((patchnote) => {
            return (
              <li key={patchnote._id}>
                <a href="#/patchnotes" className="link-primary" onClick={() => setPage(patchnote._id)}>
                  {patchnote.version}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <Patch _id={page} patchnotes={patchnotes} />
    </div>
  );
};

export default Patchnotes;
