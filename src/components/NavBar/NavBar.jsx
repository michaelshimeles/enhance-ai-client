import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar__img" />
        </Link>
      </div>
    </div>
  );
};
