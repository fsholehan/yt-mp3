import logo from "../assets/img/logo.jpg";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex space-x-4 my-2">
        <p>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </p>
        <p>
          <Link to="/term" className="hover:text-blue-400">
            Privacy & Policy
          </Link>
        </p>
        <p>
          <Link to="/disclaimer" className="hover:text-blue-400">
            Disclaimer
          </Link>
        </p>
        <p>
          <Link to="/explore" className="hover:text-blue-400">
            Explore
          </Link>
        </p>
      </div>
      <Link to="/">
        <img
          src={logo}
          alt="Lagu Mp3"
          className="cursor-pointer object-contain mt-3"
          width="300"
          height="70"
        />
      </Link>
      <InputSearch />
    </div>
  );
}

export default Header;
