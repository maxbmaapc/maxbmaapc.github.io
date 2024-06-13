import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterView = () => {
  return (
    <footer className="footer">
      <div>
        <p>Developed by Maksim Lukianenko 2024</p>
      </div>
      <div className="footer__links">
        <div>
          <a href="mailto:m.lukianenko@icloud.com">m.lukianenko@icloud.com</a>
        </div>
        <div className="footer__icons">
          <a href="https://www.linkedin.com/in/maksimlukianenko/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mpanasetckiy">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/m.panasetckiy">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
