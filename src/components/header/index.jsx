import { Link } from "react-router-dom";
import Logo from "../../assets/myalc.png";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="navbar navbar-light bg-light px-4 border-bottom">
      <div>
        <Link to="/p/dashboard">
          <img src={Logo} width="100" />
        </Link>
      </div>
      <div>
        <TopNav />
      </div>
    </header>
  );
};

export default Header;
