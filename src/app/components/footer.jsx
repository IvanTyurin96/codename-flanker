import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ReactComponent as VkLogo } from "../svg/vk.svg";

const Footer = () => {
  return (
    <footer className="mt-auto bg-dark">
      <div className="container column d-flex align-items-center justify-content-between">
        <div className="text-center pl-0 pt-3 pb-3 pr-3">© 2024 Ivan Tyurin</div>
        <div className="text-center d-flex">
          <a className="footer-society me-2 d-flex align-items-center justify-content-center" href="https://vk.com/codenameflanker" target="_blank">
            <VkLogo className="bi-vk" />
          </a>
          <a className="footer-society me-2" href="https://discord.gg/codename-flanker-community-839196573228335185" target="_blank" role="button">
            <i className="bi bi-discord"></i>
          </a>
          <a className="footer-society" href="https://www.youtube.com/@codenameflanker1751" target="_blank" role="button">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
