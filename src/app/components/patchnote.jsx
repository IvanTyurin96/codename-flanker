const Patchnote = ({ id, patchnotes }) => {
  const patchnote = patchnotes.filter((item) => item.id === id)[0];
  function showPatchnote() {
    return (
      <div className="w-100 ps-4">
        <h2 className="text-center m-0 mb-3">{patchnote.version}</h2>
        {patchnote.patchnoteChanges.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className="mt-3 mb-3">
              <h5 className="mb-2">{item.name}</h5>
              <ul className="patchnote m-0">
                {item.change.split("\n").map((note, noteIndex) => {
                  return (
                    <li key={noteIndex} className="mt-2 mb-2">
                      {note.replace("-", "").trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  function showNotFound() {
    return <div className="w-100 ps-4">Patchnote with id = {id} not found.</div>;
  }

  if (patchnote != null) {
    return showPatchnote();
  } else {
    return showNotFound();
  }
};

export default Patchnote;
