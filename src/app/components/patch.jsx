const Patch = ({ _id, patchnotes }) => {
  const patchnote = patchnotes.filter((patch) => patch._id === _id)[0];
  return (
    <div className="w-100 ps-4">
      <h2 className="text-center m-0 mb-3">{patchnote.version}</h2>
      {patchnote.changes.map((change, changeIndex) => {
        return (
          <div key={changeIndex} className="mt-3 mb-3">
            <h5 className="mb-2">{change.name}</h5>
            <ul className="patch m-0">
              {change.value.split("\n").map((note, noteIndex) => {
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

export default Patch;
