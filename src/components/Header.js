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
          Personnages
        </Link>
        <Link className="link-comics" to="/comics">
          Comics
        </Link>
        <Link className="link-favorits" to="/favoris">
          Favoris
        </Link>
      </div>
    </header>
  );
};

export default Header;
