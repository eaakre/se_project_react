import "./Footer.css";

const Footer = () => {
  const yearDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__text">Developed by Practicum Students</div>
      <div className="footer__text">{yearDate}</div>
    </footer>
  );
};

export default Footer;
