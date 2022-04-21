import Menu from "../menu/Menu.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/"><h1>The 掲示板 App</h1></Link>
      <Menu />
    </header>
  );
}

export default Header;
