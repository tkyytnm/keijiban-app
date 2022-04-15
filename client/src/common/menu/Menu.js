import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <div>スレッド作成</div>
      <Link to="login">ログイン</Link>
      <div>新規登録</div>
      <div>ログアウト</div>
    </nav>
  );
}

export default Menu;
