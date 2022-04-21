import Menu from "../menu/Menu.js";
import { Link } from "react-router-dom";
import FlashMessage from "./FlashMessage";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>The 掲示板 App</h1>
      </Link>
      <Menu />
      <FlashMessage />
    </header>
  );
}

export default Header;
