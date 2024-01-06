import PdfIcon from "../icons/PDF_file_icon.svg.png";
import webApi from "../api";

const Documentation = () => {
  return (
    <div className="pt-3 pb-3">
      <p className="mb-2">Download:</p>
      <ul className="mt-2 mb-0 documentation-list">
        <li>
          <img className="download-icon" src={PdfIcon}></img>
          <a href={`${webApi}/v1/documents?language=ru`} target="_blank" className="link-primary text-break">
            RU
          </a>
        </li>
        <li>
          <img className="download-icon" src={PdfIcon}></img>
          <a href={`${webApi}/v1/documents?language=en`} target="_blank" className="link-primary text-break">
            EN
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Documentation;
