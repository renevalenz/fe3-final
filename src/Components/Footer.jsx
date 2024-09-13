import DH from "./assets/images/DH.png";
import tiktok from "./assets/images/ico-tiktok.png";
import instagram from "./assets/images/ico-instagram.png";
import facebook from "./assets/images/ico-facebook.png";
import whatsapp from "./assets/images/ico-whatsapp.png";
import "../Routes/main.css";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a
          href="https://www.tiktok.com/@digitalhouseglobal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktok} alt="tiktok-logo" />
        </a>
        <a
          href="https://www.instagram.com/digitalhouseglobal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram-logo" />
        </a>
        <a
          href="https://www.facebook.com/digitalhouseglobal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook-logo" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=541159842100&text=Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Digital%20House"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="whatsapp-logo" />
        </a>
      </div>
      <p className="powered">Powered by</p>
      <img src={DH} alt="DH-logo" className="dh-logo" />
    </footer>
  );
};

export default Footer;
