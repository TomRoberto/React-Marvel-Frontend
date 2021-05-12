import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo marvel" />
      </div>
      <Link to="/">Personnages</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/favoris">Favoris</Link>
    </div>
  );
};

export default Header;
