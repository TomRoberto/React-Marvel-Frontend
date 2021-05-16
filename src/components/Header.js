import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo marvel" />
      </div>
      <div>
        <Link className="link-characters" to="/">
          PERSONNAGES
        </Link>
        <Link className="link-comics" to="/comics">
          COMICS
        </Link>
        <Link className="link-favorits" to="/favoris">
          FAVORIS
        </Link>
      </div>
    </header>
  );
};

export default Header;
