import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="mt-auto bg-dark">
      <div className="container column d-flex align-items-center justify-content-between">
        <div className="text-center pl-0 pt-3 pb-3 pr-3">© 2023 Ivan Tyurin</div>
        <div className="text-center">
          <a className="btn btn-outline-light btn-floating btn-sm m-1" href="https://discord.gg/codename-flanker-community-839196573228335185" role="button">
            <i className="bi bi-discord"></i>
          </a>
          <a className="btn btn-outline-light btn-floating btn-sm m-1" href="https://www.youtube.com/@codenameflanker1751" role="button">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
