const Patchnote = ({ id, patchnotes }) => {
  const patchnote = patchnotes.filter((item) => item.id === id)[0];
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
};

export default Patchnote;
