import GoogleDriveIcon from "../icons/google-drive.png";

const Download = () => {
  return (
    <div className="pt-3 pb-3">
      <h3 className="mb-2">Su-30 Community Mod v2.1.12 Beta</h3>
      <em>Multiple links are for redundancy. All links below have the exact same file.</em>
      <p className="mt-2 mb-2">Links:</p>
      <ul className="mt-2 mb-2">
        <li>
          <img className="download-icon" src={GoogleDriveIcon}></img>
          <a href="https://drive.google.com/file/d/1vMsumbJcgLJcULbA6f77kWGyN0s2SkrV/view?usp=sharing" target="_blank" className="link-primary text-break">
            https://drive.google.com/file/d/1vMsumbJcgLJcULbA6f77kWGyN0s2SkrV/view?usp=sharing
          </a>
        </li>
        <li className="pe-4">
          <img className="download-icon" src={GoogleDriveIcon}></img>
          <a href="https://drive.google.com/file/d/1VdNFqdtqPeanB3HdqW87MbjXz-mJ2qW8/view?usp=share_link" target="_blank" className="link-primary text-break">
            https://drive.google.com/file/d/1VdNFqdtqPeanB3HdqW87MbjXz-mJ2qW8/view?usp=share_link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Download;
