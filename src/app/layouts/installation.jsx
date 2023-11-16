const Installation = () => {
  return (
    <div className="pt-3 pb-3">
      <h3 className="mt-0 mb-3 text-center">Installation Guide</h3>
      <p className="mt-2 mb-2">Follow next steps to install Su-30 Community Mod for DCS World.</p>
      <ol className="mb-0">
        <li>
          Follow the links to Google Drive on{" "}
          <a className="link-primary" href="/download">
            download page
          </a>{" "}
          and download zip-archive with mod.{" "}
        </li>
        <li>
          Open the archive. You will see the folder with mod:
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_1.png`)} alt="Installation image №1"></img>
          </div>
          Hold this window opened. In steps below we will drag this folder to another place.
        </li>
        <li>
          Find your user DCS folder in Saved Games. By default it has this path: <strong>C:\Users\[YourUserName]\Saved Games\DCS</strong>
          <br />
          This DCS folder has these folders:{" "}
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_2.png`)} alt="Installation image №2"></img>
          </div>
          You need <strong>Mods</strong> folder. If this folder does not exist, create it.
        </li>
        <li>
          <strong>Mods</strong> folder should contain <strong>aircraft</strong> folder. If this folder does not exist, create it.
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_3.png`)} alt="Installation image №3"></img>
          </div>
        </li>
        <li>
          Drag <strong>Su-30MK_SFM v2.1.12b</strong> folder from your zip-archive and place it in <strong>aircraft</strong> folder. After previous steps you
          should have next path: <strong>C:\Users\[YourUserName]\Saved Games\DCS\Mods\aircraft\Su-30MK_SFM v2.1.12b</strong>
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_4.png`)} alt="Installation image №4"></img>
          </div>
        </li>
        <li>
          Run the DCS World, open <strong>Module Manager</strong>:
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_5.png`)} alt="Installation image №5"></img>
          </div>
        </li>
        <li>
          Select <strong>Installed</strong> tab and ensure that <strong>Flanker Ex</strong> module from Codename Flanker installed:
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_6.png`)} alt="Installation image №6"></img>
          </div>
        </li>
        <li>
          You can see module icon at bottom of screen:
          <div className="text-center">
            <img className="installation-image mt-2 mb-2" src={require(`../img/installation_7.png`)} alt="Installation image №7"></img>
          </div>
        </li>
        <li>
          Module installed. You can use it:
          <div className="text-center">
            <img className="installation-image mt-2" src={require(`../img/installation_8.png`)} alt="Installation image №8"></img>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Installation;
